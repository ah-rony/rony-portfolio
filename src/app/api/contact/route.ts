import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * ==============================================================================
 * CONTACT API ROUTE — /api/contact
 * ==============================================================================
 * Features:
 * 1. 100% Free email dispatch using Nodemailer & Gmail SMTP (or Resend)
 * 2. In-memory rate limiting (max 5 requests per 10 minutes per IP) to prevent abuse
 * 3. Honeypot anti-spam verification (traps automated bots without annoying CAPTCHAs)
 * 4. Input validation and HTML escaping to protect against XSS and injection
 * 5. Automatic fallback to developer console logging when SMTP keys are not yet configured
 */

// Rate limiter storage: IP address -> array of request timestamps
const rateLimitMap = new Map<string, number[]>();

// Maximum submissions allowed within the timeframe window
const RATE_LIMIT_MAX = 5;
// Time window: 10 minutes in milliseconds
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

/**
 * Helper: Simple Rate Limiter to stop spam attacks
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps to keep only those within the active window
  const recentTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= RATE_LIMIT_MAX) {
    return false; // Rate limit exceeded
  }

  // Record this request timestamp
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return true;
}

/**
 * Helper: Escape HTML special characters to prevent XSS in email clients
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // 1. Identify Client IP for rate-limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // 2. Enforce Rate Limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 3. Parse incoming JSON body
    const body = await request.json();
    const { name, email, subject, message, hp } = body;

    // 4. Honeypot Anti-Spam Check:
    // Automated bots automatically fill hidden input fields (hp = honeypot).
    // If 'hp' is populated, return a silent fake success so bots don't adapt.
    if (hp && String(hp).trim().length > 0) {
      console.warn(`[Anti-Spam] Bot detected from IP: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Message received successfully." },
        { status: 200 }
      );
    }

    // 5. Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    // Clean inputs
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = subject && typeof subject === "string" ? escapeHtml(subject.trim()) : "New Project Opportunity / Inquiry";
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

    // 6. Check for SMTP credentials in environment
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECEIVER_EMAIL || smtpUser || "hello@yourdomain.com";

    // If SMTP is not yet configured, log the contact form payload in terminal
    // and return a helpful mock success message so the application remains fully functional!
    if (!smtpUser || !smtpPass) {
      console.log("\n=======================================================");
      console.log("📨 NEW CONTACT FORM SUBMISSION (SMTP Demo Mode)");
      console.log(`From:    ${name} <${email}>`);
      console.log(`Subject: ${safeSubject}`);
      console.log(`Message:\n${message.trim()}`);
      console.log("=======================================================");
      console.log("💡 TIP: To receive live emails directly in your Gmail inbox,");
      console.log("add SMTP_USER and SMTP_PASS (Gmail App Password) to your .env.local file.\n");

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message has been received successfully.",
          demoMode: true,
        },
        { status: 200 }
      );
    }

    // 7. Dispatch Email using Nodemailer Free SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email sent to MD. Ainal Haque Rony
    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: recipient,
      replyTo: safeEmail,
      subject: `[Portfolio Inquiry] ${safeSubject} — from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e9e0ff; border-radius: 12px; background: #faf8ff;">
          <div style="background: linear-gradient(100deg, #792bff, #6424e9); color: white; padding: 18px 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Message from Portfolio</h2>
          </div>
          <div style="padding: 24px; background: #ffffff; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 12px;"><strong>Sender Name:</strong> ${safeName}</p>
            <p style="margin: 0 0 12px;"><strong>Sender Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${safeSubject}</p>
            <hr style="border: none; border-top: 1px solid #e9e0ff; margin: 18px 0;" />
            <p style="margin: 0 0 8px;"><strong>Message Content:</strong></p>
            <div style="background: #f8f6fc; padding: 16px; border-radius: 8px; border-left: 4px solid #7028f5; color: #171a48; line-height: 1.6;">
              ${safeMessage}
            </div>
            <div style="margin-top: 24px; font-size: 11px; color: #777; text-align: center;">
              Sent via MD. Ainal Haque Rony Portfolio Contact Form • IP: ${ip}
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("[Contact API Error]:", errMessage);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please reach out directly to ah.rony.dev@gmail.com.",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, interest } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification
    await resend.emails.send({
      from: "Methanol.Green <noreply@methanol.green>",
      to: ["info@methanol.green"],
      replyTo: email,
      subject: `New Contact: ${interest || "General Inquiry"} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Interest:</strong> ${interest || "Not specified"}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "Methanol.Green <noreply@methanol.green>",
      to: [email],
      subject: "Thank you for contacting Methanol.Green",
      html: `
        <h2>Thank you for your message</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The Methanol.Green Team</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Methanol.Green - Green Methanol Trading for Maritime Bunkering<br>
          Milan, Italy | Estonia, EU
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

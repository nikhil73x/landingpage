import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "nikhil73x@gmail.com";

    // 1. Resend API (if RESEND_API_KEY is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `Portfolio [${subject}]: ${name}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
              <h2 style="color: #2563eb;">New Message from Portfolio Website</h2>
              <p><strong>Sender:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Inquiry Type:</strong> ${subject}</p>
              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
              <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${message}</div>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true, provider: "resend" });
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
      }
    }

    // 2. Web3Forms API (if WEB3FORMS_ACCESS_KEY is configured)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          subject: `Portfolio [${subject}]: ${name}`,
          message,
          from_name: `${name} (via Portfolio Contact)`,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        return NextResponse.json({ success: true, provider: "web3forms" });
      } else {
        console.error("Web3Forms API error:", data);
      }
    }

    // 3. Fallback: Neither key is configured, tell frontend to trigger mailto
    return NextResponse.json({
      success: false,
      fallbackToMailto: true,
      recipientEmail,
      message: "No email API key configured. Falling back to email client.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}

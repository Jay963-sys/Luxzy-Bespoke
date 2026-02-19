"use server";

import { Resend } from "resend";

// Ensure you have RESEND_API_KEY in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!firstName || !email || !message) {
    return { error: "Missing required fields." };
  }

  try {
    await resend.emails.send({
      from: "Luxzy Notifications <onboarding@resend.dev>", // Replace with your verified domain in production
      to: ["studio@luxzybespoke.com"], // Replace with the client's actual email
      replyTo: email, // This allows the client to just hit "Reply" in their inbox
      subject: `New Studio Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #171717;">
          <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 4px; color: #a3a3a3;">Luxzy Bespoke</p>
          <h2 style="font-weight: 300; letter-spacing: -0.5px; border-bottom: 1px solid #e5e5e5; padding-bottom: 16px; margin-bottom: 24px;">New Studio Inquiry</h2>
          
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0;"><strong>Client:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #a3a3a3; margin-bottom: 8px;">Message</p>
          <div style="background: #f9f9f9; padding: 24px; border-left: 2px solid #171717;">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}

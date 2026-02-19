// src/actions/sendBespokeOrder.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBespokeOrder(orderData: any) {
  const { formData, cartItems, totalAmount } = orderData;

  // Shared Item List Logic
  const itemsHtml = cartItems
    .map(
      (item: any) => `
    <div style="margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
      <p style="margin:0; font-size: 14px;"><strong>${item.name}</strong> (Size: EU ${item.size})</p>
      <p style="margin:0; font-size: 12px; color: #666;">Qty: ${item.quantity || 1} — ₦${item.price.toLocaleString()}</p>
    </div>
  `,
    )
    .join("");

  try {
    // EMAIL 1: TO THE OWNER (The Production Dossier)
    await resend.emails.send({
      from: "Luxzy Bespoke <orders@luxzy.com>",
      to: ["your-studio-email@gmail.com"],
      subject: `New Commission: ${formData.name} (₦${totalAmount.toLocaleString()})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2>New Bespoke Order</h2>
          <p><strong>Customer:</strong> ${formData.name} (${formData.email})</p>
          <p><strong>WhatsApp:</strong> ${formData.phone}</p>
          <p><strong>Profile:</strong> ${formData.footProfile} Width</p>
          <p><strong>Consultation:</strong> ${formData.requestConsultation ? "YES" : "NO"}</p>
          <p><strong>Delivery Method:</strong> ${formData.deliveryMethod}</p>
          <p><strong>Notes:</strong> ${formData.fitNotes || "None"}</p>

          <hr />
          ${itemsHtml}
          <h3>Total Received: ₦${totalAmount.toLocaleString()}</h3>
        </div>
      `,
    });

    // EMAIL 2: TO THE CUSTOMER (The Luxury Receipt)
    await resend.emails.send({
      from: "Luxzy Bespoke <studio@luxzy.com>",
      to: [formData.email],
      subject: "Your Luxzy Bespoke Commission is Confirmed",
      html: `
        <div style="font-family: serif; max-width: 600px; color: #111; line-height: 1.6;">
          <h1 style="text-align: center; font-style: italic;">Luxzy Bespoke</h1>
          <p>Dear ${formData.name.split(" ")[0]},</p>
          <p>Thank you for choosing Luxzy. We have received your commission and your place in our production queue is now secured.</p>
          
          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0;">
            <h4 style="margin-top:0; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">What Happens Next</h4>
            <ol style="font-size: 13px; color: #444;">
              <li><strong>Review:</strong> Our master artisan is currently reviewing your fit profile.</li>
              <li><strong>Contact:</strong> ${formData.requestConsultation ? "We will email you shortly to schedule your virtual fitting." : "We will reach out if we require further measurement details."}</li>
              <li><strong>Crafting:</strong> Once fit is verified, production begins (approx. 2-4 weeks).</li>
            </ol>
          </div>

          <p style="font-size: 12px; border-top: 1px solid #eee; pt: 20px;">
            Order Total: ₦${totalAmount.toLocaleString()}
          </p>
          <p style="font-size: 10px; color: #999; text-align: center;">
            Lagos, Nigeria — Handcrafted Excellence
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

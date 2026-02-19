import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendBespokeOrder } from "@/actions/sendBespokeOrder";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("x-paystack-signature");

  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY!)
    .update(body)
    .digest("hex");

  if (hash !== signature) {
    return new Response("Invalid signature", { status: 401 });
  }

  const event = JSON.parse(body);

  if (event.event === "charge.success") {
    const { metadata, amount, customer } = event.data;

    await sendBespokeOrder({
      formData: {
        name: metadata.name,
        email: customer.email,
        footProfile: metadata.footProfile,
        fitNotes: metadata.fitNotes,
        requestConsultation: metadata.requestConsultation,
      },
      cartItems: metadata.cartItems,
      totalAmount: amount / 100,
    });

    return new Response("Success", { status: 200 });
  }

  return new Response("Event not handled", { status: 200 });
}

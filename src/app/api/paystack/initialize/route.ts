import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, amount, metadata } = await req.json();

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100,
        metadata,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`, // Where user goes after paying
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

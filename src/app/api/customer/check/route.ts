export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const customer = await prisma.customer.findUnique({
      where: { email },
      select: {
        name: true,
        savedMeasurements: true,
      },
    });

    if (customer) {
      return NextResponse.json({
        exists: true,
        name: customer.name,
        measurements: customer.savedMeasurements,
      });
    }

    return NextResponse.json({ exists: false });
  } catch (error) {
    return NextResponse.json({ error: "Check failed" }, { status: 500 });
  }
}

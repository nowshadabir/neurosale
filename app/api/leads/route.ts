import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return NextResponse.json(leads);
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    company?: string;
  };

  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: "name and email are required" },
      { status: 400 }
    );
  }

  const lead = await prisma.lead.create({
    data: {
      name: body.name,
      email: body.email,
      company: body.company,
    },
  });

  return NextResponse.json(lead, { status: 201 });
}

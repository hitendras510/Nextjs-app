import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();

  await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      name: data.name,
    },
  });

  return NextResponse.json({ message: "You have been signed up" });
}

import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

type RequestBody = {
  email: string;
  name: string;
  password: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody;
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user, { status: 201 });
}

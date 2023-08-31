import prisma from '@/lib/prisma';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };
    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        hashedPassword,
      },
    });

    return NextResponse.json({
      status: true,
      data: {
        name: user.name,
        email: user.email,
      },
      message: 'Registered successfully',
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: false,
        data: null,
        message: error.message,
      }),
      { status: 500 }
    );
  }
}

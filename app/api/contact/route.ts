import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity.client';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Save to Sanity (optional: create a 'message' document type in schemas)
    // const doc = await client.create({
    //   _type: 'message',
    //   name,
    //   email,
    //   message,
    //   submittedAt: new Date().toISOString(),
    // });

    // For now, just log and respond (in production, integrate email service)
    console.log('[Contact Form]', { name, email, message });

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact Form Error]', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

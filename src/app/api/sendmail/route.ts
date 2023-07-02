/* eslint-disable no-unused-vars */
import { RequestBody } from '@/types/global.types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const requestBody = (await req.json()) as RequestBody;

  return NextResponse.json({
    status: 'success',
    statusCode: 200,
    data: requestBody,
    message:
      'Your message has been sent successfully. We will get back to you shortly.',
  });
}

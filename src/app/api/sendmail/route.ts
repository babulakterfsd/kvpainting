/* eslint-disable no-unused-vars */
import { RequestBody } from '@/types/global.types';
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../server/lib/connectDB';
import KVPainting_Orders from '../../../../server/model/kvmails.model';

export async function POST(req: NextRequest, res: NextResponse) {
  await connectDB();

  const requestBody = (await req.json()) as RequestBody;

  const { name, email, address, message } = requestBody;

  const savedEmail = await KVPainting_Orders.create({
    name,
    email,
    address,
    message,
  });

  if (savedEmail) {
    return NextResponse.json({
      status: 'success',
      statusCode: 200,
      data: savedEmail,
      message: 'Bericht verzonden, bedankt',
    });
  }
  return NextResponse.json({
    status: 'failed',
    statusCode: 400,
    data: null,
    message: 'Kan bericht niet verzenden, probeer het opnieuw.',
  });
}

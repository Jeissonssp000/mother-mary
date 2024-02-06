import { NextResponse } from 'next/server';
import NextCors from 'nextjs-cors';

export async function middleware(req) {
  await NextCors(req, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  return NextResponse.next();
}
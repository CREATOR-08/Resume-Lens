import { destroySession } from '@/lib/session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await destroySession();
  const redirectUrl = new URL('/', req.url);
  const response = NextResponse.redirect(redirectUrl);

  for (const cookie of req.cookies.getAll()) {
    response.cookies.delete(cookie.name);
  }

  return response;
}

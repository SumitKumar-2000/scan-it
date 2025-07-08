import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const manuals = await prisma.userManual.findMany({
    include: {
      product: true,
      sections: { include: { media: true } },
    },
  });
  return NextResponse.json(manuals);
}


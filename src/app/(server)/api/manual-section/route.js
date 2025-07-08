import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const sections = await prisma.manualSection.findMany({
    include: { manual: true, media: true },
    orderBy: { order_index: 'asc' },
  });
  return NextResponse.json(sections);
}


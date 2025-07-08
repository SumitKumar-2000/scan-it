import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const companies = await prisma.company.findMany({
    orderBy: { id: 'asc' },
    select: {
      id: true,
      name: true,
      website: true,
      logo_url: true,
      description: true,
    },
  });
  return NextResponse.json(companies);
}


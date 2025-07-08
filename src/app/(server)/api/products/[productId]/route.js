import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(req, { params }) {
  const productId = parseInt(params.productId);
  if (isNaN(productId)) return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });

  const products = await prisma.product.findMany({
    where: { id: productId },
    select: {
      id: true,
      name: true,
      model_no: true,
      category: true,
      release_at: true,
      description: true,
    }
  });

  return NextResponse.json(products);
}

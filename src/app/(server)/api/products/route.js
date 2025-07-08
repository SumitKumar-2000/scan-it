import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        description: true,
      }
    });

    if (!products) {
      return NextResponse.json({ error: "Error fetching products" }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: `SERVER ERROR: ${error}` }, { status: 500 });
  }
}

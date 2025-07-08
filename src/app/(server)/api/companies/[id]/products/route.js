import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const { id } = params;
  const companyId = Number(id);

  if (isNaN(companyId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const productsWithMedia = await prisma.$queryRaw`
    SELECT 
      p.id,
      p.name,
      p.category,
      p.model_no,
      p.release_at,
      p.description,
      m.url,
      m.caption,
      m.owner_type
    FROM "Product" p
    LEFT JOIN "Media" m 
      ON m.owner_id = p.id 
      AND m.owner_type = 'PRODUCT'
      AND m.is_main = 'Y'
    WHERE p.company_id = ${companyId}
  `;

  return NextResponse.json({ products: productsWithMedia });
}

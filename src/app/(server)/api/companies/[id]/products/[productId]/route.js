import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const { id, productId } = await params;

  const companyId = Number(id);
  const pid = Number(productId);

  if (isNaN(companyId))
    return NextResponse.json({ error: "Invalid company id" }, { status: 400 });
  if (isNaN(pid))
    return NextResponse.json({ error: "Invalid product id" }, { status: 400 });

  const product = await prisma.product.findFirst({
    where: { company_id: companyId, id: pid },
    select: {
      id: true,
      name: true,
      model_no: true,
      category: true,
      release_at: true,
      description: true,
    },
  });

  const media = await prisma.media.findMany({
    where: { owner_id: pid, owner_type: "PRODUCT" },
    select: {
      id: true,
      url: true,
      caption: true,
      owner_id: true,
    },
  });

  return NextResponse.json({ product, media });
}

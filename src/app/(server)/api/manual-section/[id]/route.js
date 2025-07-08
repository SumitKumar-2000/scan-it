import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const manualId = parseInt(id, 10);

  if (isNaN(manualId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const company = await prisma.manualSection.findUnique({
      where: { id: manualId },
      include: { manual: true, media: true },
    });

    if (!company) {
      return NextResponse.json({ error: "Mannual not found" }, { status: 404 });
    }

    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: `SERVER ERROR: ${error}` }, { status: 500 });
  }
}

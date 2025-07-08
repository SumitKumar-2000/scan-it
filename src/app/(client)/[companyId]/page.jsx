// app/companies/[companyId]/products/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Product",
  description: "Product listing by company",
};

async function getProductByCompany(companyId) {
  const API_URL = process.env.API_URL;

  if (!API_URL) throw new Error("Missing API_URL in environment");

  const res = await fetch(`${API_URL}/api/companies/${companyId}/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export default async function ProductByCompany({ params }) {
  const { companyId } = params;
  const products = await getProductByCompany(Number(companyId));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-sm:w-full">
      {products.map((product) => (
        <Link key={product.id} href={`/${companyId}/products/${product.id}`}>
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {product.url && (
                <Image
                  src={product.url}
                  alt={product.caption || product.name}
                  width={300}
                  height={200}
                  className="rounded-lg object-contain"
                />
              )}
              <p className="text-sm text-gray-600">{product.description}</p>
              {product.caption && (
                <p className="text-xs text-muted-foreground italic">
                  {product.caption}
                </p>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

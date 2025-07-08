import Info from "@/components/pages/product/Info";
import Header from "@/components/pages/product/header";
import Seemore from "@/components/pages/product/seemore";

export const metadata = {
  title: "Product",
  description: "Product",
};

async function getProductData(companyId, productId) {
  const API_URL = process.env.API_URL;
  if (!API_URL) throw new Error("Missing API_URL");

  const res = await fetch(
    `${API_URL}/api/companies/${companyId}/products/${productId}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

export default async function ProductPage({ params }) {
  const { companyId, productId } = params;
  const { product, media } = await getProductData(companyId, productId);

  return (
    <>
      <Header media={media} product={product} />
      <Info product={product} />
      <Seemore companyId={companyId} />
    </>
  );
}

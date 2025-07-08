import * as Carousel from "@/components/ui/carousel";
import * as Card from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";

async function getProductData(companyId) {
  const API_URL = process.env.API_URL;
  if (!API_URL) throw new Error("Missing API_URL");

  const res = await fetch(`${API_URL}/api/companies/${companyId}/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

async function SeeMore({ companyId }) {
  const { products } = await getProductData(companyId);

  return (
    <div className="p-4">
      <h1 className="mx-auto w-full text-2xl mb-2 text-center">See More</h1>

      <Carousel.Carousel className="w-full relative">
        <Carousel.CarouselPrevious className="left-2 z-10 size-6" />
        <Carousel.CarouselNext className="right-2 z-10 size-6" />

        <Carousel.CarouselContent>
          {products?.map((product) => (
            <Carousel.CarouselItem key={product.id} className="basis-1/2">
              <Card.Card className="bg-app-tertiary rounded-lg shadow-sm">
                <Card.CardContent className="flex flex-col items-center justify-between p-2">
                  <Image
                    src={product.url}
                    alt={product.caption}
                    width={250}
                    height={250}
                    loading="lazy"
                    className="mb-2"
                  />

                  <hr className="border-t border-gray-300 w-full my-2" />

                  <Link
                    href={`/${companyId}/products/${product.id}`}
                    className="text-xs font-semibold text-var(--app-primary) hover:underline text-center"
                  >
                    {product.name}
                  </Link>
                </Card.CardContent>
              </Card.Card>
            </Carousel.CarouselItem>
          ))}
        </Carousel.CarouselContent>
      </Carousel.Carousel>
    </div>
  );
}

export default React.memo(SeeMore);

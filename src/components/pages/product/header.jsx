import * as Carousel from "@/components/ui/carousel";
import * as Card from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Header = ({ media, product }) => {
  return (
    <React.Fragment>
      <Carousel.Carousel className="w-full shadow-2xl rounded-b-[35px] relative">
        <Carousel.CarouselPrevious className="left-5 z-10 size-6" />
        <Carousel.CarouselNext className="right-5 z-10 size-6" />
        <Carousel.CarouselContent>
          {media.map((item) => {
            return (
              <Carousel.CarouselItem key={item.id}>
                <Card.Card className="bg-app-tertiary rounded-b-[35px] bg-gradient-to-b from-secondary to-app-tertiary">
                  <Card.CardContent className="flex aspect-square items-center justify-center">
                    <Image
                      src={item.url}
                      alt={item.caption}
                      width={300}
                      height={300}
                      loading="lazy"
                    />
                  </Card.CardContent>
                </Card.Card>
              </Carousel.CarouselItem>
            );
          })}
        </Carousel.CarouselContent>
      </Carousel.Carousel>

      {/* Product name */}
      <div>
        <div className="flex w-full justify-center items-center gap-4">
          <h3 className="font-semibold text-2xl tracking-widest">
            {product?.name}{" "}
          </h3>
          <p className="tracking-widest font-thin text-lg">
            {product?.model_no}
          </p>
        </div>
        <p className="text-xs font-light tracking-widest text-gray-500">
          {product?.category}
        </p>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Header);

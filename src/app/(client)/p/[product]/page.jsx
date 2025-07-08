import Info from "@/components/pages/product/Info";
import Header from "@/components/pages/product/header";
import Seemore from "@/components/pages/product/seemore";

export const metadata = {
    title: "Product",
    description: "Product"
}

export default function Product() {
  return (
    <>      
      <Header/>
      <Info/>
      <Seemore/>
    </>
  );
}

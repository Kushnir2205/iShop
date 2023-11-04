import Bestseller from "@/components/Bestseller/Bestseller";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import TheSwiper from "@/components/TheSwiper/TheSwiper";

export default function Home() {
  return (
    <>
      <TheSwiper />
      <Bestseller />
      <ProductGrid />
    </>
  );
}

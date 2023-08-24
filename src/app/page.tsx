import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import Events from "@/components/Events";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ProductSlider from "@/components/ProductSlider";
import SanityProducts from "@/components/SanityProducts/SanityProducts";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl m-auto p-4">
        <Hero />
        <SanityProducts />
        {/* <Events />
        <ProductSlider />
        <Categories />
        <BestSelling /> */}
      </div>
      <Features />
      <div className="max-w-screen-xl m-auto p-4">
        <Newsletter />
      </div>
    </>
  );
}
 
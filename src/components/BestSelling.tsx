import React from "react";
import ProductCard from "./ProductCard";
import { ProductsList } from "@/app/utils/mock";
import { Product } from "@/app/utils/types";
// import { IProduct, ProductsList } from "@/lib/products";

function BestSelling() {
  const getProducts: Product[] = ProductsList.slice(0, 3);
  return (
    <div>
      <div className="mb-[100px] mt-[100px]">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight 1g:text-2x1">
            Best Selling
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#0062f5] inline-flex" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-0">
          {getProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              slug={product.slug}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              discounted={product.discounted}

            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSelling;

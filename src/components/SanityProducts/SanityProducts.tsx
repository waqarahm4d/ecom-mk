import React from "react";
import { Image as IImage } from "sanity";
import ProductCard from "../ProductCard";
import Image, { StaticImageData } from "next/image";
import { urlForImage } from "@/lib/sanityImage";
import { client } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import SanityProductCard from "./SanityProductCard";

const query = groq`*[_type == 'product']{
  _id,
  name,
  slug {
    current,
  } ,
  description,
  image,
  price,
  discounted,
  size,
  color,
  category -> {
      name
  },
  qty
}`

export const getProductsData = async () => {
  const res = await client.fetch(query);
  return res;
  
};



export interface IProduct {
  _id: string;
  name: string; 
  slug: {current: string};
  image: IImage[] | StaticImageData | StaticImageData[] | string[] | string;
  description: string;
  category: {name: string};
  price: number;
  discounted: number;
  size: string[];
  color: string[];
  qty: number;
}

async function SanityProducts() {
  const data: IProduct[] = await getProductsData();
  return (
    <div className="products_list pb-[5rem]">
      <div className="pl_header text-center mb-[2rem]">
        <p className="leading-7 text-[12px] text-[#0062f5] font-[700] mb-[1rem]">
          PRODUCTS
        </p>
        <h2 className="scroll-m-20 text-[32px] font-[600] lg:text-[32px] leading-[1.1] tracking-wide">
          Check What We Have
        </h2>
      </div>
      <div className="sanity_products flex flex-col md:flex-row gap-4 justify-between">
        {data.map((item: any) => (
          
          <SanityProductCard
            key={item._id}
            name={item.name}
            image={item.image}
            slug={item.slug}
            price={item.price}
            discounted={item.discounted}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default SanityProducts;

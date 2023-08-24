import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/lib/sanityImage";
import ATCpopOver from "../addToCartPopOver";
import { imageURL } from "../../../sanity/lib/client";



function SanityProductCard({
  name,
  image,
  slug,
  price,
  discounted,
  category,
}:{
  name: string,
  image: StaticImageData | StaticImageData[] | string | string[] | any | IImage[],
  slug: {current: string},
  price: number,
  discounted:number | any,
  category: {name: string},
}) {
  return (
    <div className="p-2">
      <div className="card glass relative">
      {discounted < price && (
        <div className="absolute top-0 right-0 text-[#0062f5] p-2 bg-[#e1edff] font-semibold rounded rounded-tr-md rounded-b-full">
          {((discounted/price) * 100).toFixed(0) }% <br></br> OFF
        </div>
      )}
        <Link href={`/product/${slug.current}`}>
        <Image
          width={300}
          height={300}
          src={imageURL(image[0]).url()}
          alt="product_image"
          className="h-full md:h-[400px] w-full md:w-[400px] object-cover object-top"
        />  
        </Link>
        <div className="card-body px-4">
          <div className="flex justify-between items-center">
          <Link href={`product/${slug.current}`}>
            <h2 className="card-title text-[1em]">{name}</h2>
          </Link>
          <h3 className="uppercase italic text-gray-300 text-sm">{category.name}</h3>
          </div>
          {/* {description && (
          <p className="hidden">{description}</p>
            )} */}
          <div className="flex items-center justify-end gap-4">
            {discounted && (
              <span className="block text-2xl font-semibold text-black">
                ${discounted.toFixed(2)}
              </span>
            )}
            {price && (
              <span className={`block text-2xl text-gray ${discounted ? discounted < price && "line-through": "font-semibold"}`}>
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="card-actions w-full mt-4">
          <button className="btn w-full bg-black text-white hover:bg-white hover:text-black border-black">
              Add to cart
          </button>
            
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default SanityProductCard;

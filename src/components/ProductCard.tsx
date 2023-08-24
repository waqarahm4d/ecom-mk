import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import ATCpopOver from "./addToCartPopOver";
import { ToastContainer } from "react-toastify";

function ProductCard({
  name,
  image,
  slug,
  description,
  price,
  discounted,
  category,
}:{
  name: string,
  image: StaticImageData[] | string | string[],
  slug: string,
  description: string,
  price: number,
  discounted:number | any,
  category:string,
}) {
  // console.log('image', image)
  return (
    <div className="p-2">
      <div className="card glass relative">
      {discounted < price && (
        <div className="absolute top-0 right-0 text-[#0062f5] p-2 bg-[#e1edff] font-semibold rounded rounded-tr-md rounded-b-full">
          {((discounted/price) * 100).toFixed(0) }% <br></br> OFF
        </div>
      )}
        <Link href={`/product/${slug}`}>
          <Image
            width={416}
            height={300}
            src={image[0]}
            alt="Product Image"
            className="h-full md:h-[400px] rounded w-full md:w-[416px] object-cover"
          />
        </Link>
        <div className="card-body px-4">
          <div className="flex justify-between items-center">
          <Link href={`product/${slug}`}>
            <h2 className="card-title">{name}</h2>
          </Link>
          <h3 className="uppercase italic text-gray-300 text-sm">{category}</h3>
          </div>
          {description && (
          <p className="hidden">{description}</p>
            )}
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
            <ATCpopOver slug={slug} />
            {/* <button className="btn max-w-[150px] w-[45%] bg-black text-white hover:bg-white hover:text-black border-black">
              Buy Now
            </button> */}
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

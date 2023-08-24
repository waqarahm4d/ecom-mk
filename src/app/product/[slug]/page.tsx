import ATC from "@/components/ATC";
import ProductImageThumbnails from "@/components/ProductImageThumbnails";
import {
  IProduct,
  getProductsData,
} from "@/components/SanityProducts/SanityProducts";
import ProductAddedToast from "@/components/addedToast";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { CartProduct } from "../../../../iterfaces";

const getProductDetails = async (slug: string) => {
  const data: IProduct[] = await getProductsData();
  const res = data.filter((product) => product.slug.current === slug);
  console.log(res);
  return res;
};

async function ProductDetailsPage({ params }: { params: { slug: string } }) {
// @ts-nocheck
  const productDetails = await getProductDetails(params.slug);
  return (
    <div className="product_main">
      
      { // @types-ignore
      productDetails.map((product: any)  => (
        <section
          key={product._id}
          className="text-gray-600 body-font overflow-hidden"
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col md:flex-row ">
              <ProductImageThumbnails image={product.image} />
              <div className="flex-1 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-md title-font uppercase text-gray-500 tracking-widest mb-2">
                  {product.category.name}
                </h2>
                <h1 className="text-gray-900 uppercase text-3xl title-font font-semibold mb-10">
                  {product.name}
                </h1>
                {/* reviews  */}
                <div className="flex mb-10 reviews">
                  <span className="flex items-center">
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStarHalf size={20} />
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                {/* variants  */}
                <div className="variants flex mt-6 items-center pb-10 border-b-2 border-gray-100 mb-12">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    {product.color.map((color: string, i: any) => (
                      <button
                        key={i}
                        // onClick={() => setCartItem({ ...cartItem, color: color })}
                        style={{ backgroundColor: color }}
                        className="border-2 rounded-full w-6 h-6 active:scale-125 focus:scale-125 focus:outline-none mr-2 active:border-black focus:border-black duration-200"
                      />
                    ))}
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select
                        // onChange={(e) =>
                        //     setCartItem({ ...cartItem, size: e.target.value })
                        // }
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      >
                        {product.size.map((size: string, i: any) => (
                          <option key={i}>{size}</option>
                        ))}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* price  */}
                <div className="flex price items-center mb-10 gap-4">
                  {/* {cartItem.discounted && ( */}
                  <span className="block text-5xl font-semibold text-black">
                    ${product.discounted.toFixed(2)}
                  </span>
                  {/* )} */}
                  {/* {cartItem.price && ( */}
                  <span
                    className={`block text-5xl text-gray 
                    ${
                      product.discounted < product.price
                        ? "line-through"
                        : "font-semibold"
                    }`}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  {/* )} */}
                  {/* {cartItem.discounted && ( */}
                  <div className="save flex flex-col justify-center">
                    <span className="block text-xl text-blue-500 font-semibold">
                      Save
                    </span>
                    <div className="flex">
                      <span className="text-blue-500 font-semibold">
                        ${(product.price - product.discounted).toFixed(2)}
                      </span>
                      <span className="text-red-500 ml-2 font-semibold">
                        (
                        {((product.discounted / product.price) * 100).toFixed(
                          0
                        )}
                        %)
                      </span>
                    </div>
                  </div>
                  {/* )} */}
                </div>
                {
                  // @types-ignore
                }
                <ATC product={product} qty={product.qty} />
                
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductDetailsPage;

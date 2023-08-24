'use client'
import { IProduct } from "@/lib/products";
import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import ProductImageThumbnails from "./ProductImageThumbnails";
import ProductAddedToast from "./addedToast";

function ProductMain(props: IProduct) {
  const [cartItem, setCartItem] = useState({
    id: props.id,
    title: props.name,
    image: props.image[0],
    slug: props.slug,
    price: props.price,
    discounted: props.discounted,
    category: props.category,
    size: props.size[0],
    color: props.color[0],
    qty: props.qty,

  })
  
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col md:flex-row ">
            <ProductImageThumbnails image={props.image} />
            
            <div className="flex-1 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-md title-font uppercase text-gray-500 tracking-widest mb-2">
                {props.category}
              </h2>
              <h1 className="text-gray-900 uppercase text-3xl title-font font-semibold mb-10">
                {props.name}
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
                  {
                    props.color.map((color,i) => (
                      <button key={i} onClick={()=>setCartItem({...cartItem, color:color})} style={{backgroundColor:color}}  className="border-2 rounded-full w-6 h-6 active:scale-125 focus:scale-125 focus:outline-none mr-2 active:border-black focus:border-black duration-200" />
                    ))
                  }
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select  onChange={(e)=>setCartItem({...cartItem, size:e.target.value})} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    {
                    props.size.map((size,i) => (
                      <option key={i}>{size}</option>
                    ))
                  }
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
                {cartItem.discounted && (
                  <span className="block text-5xl font-semibold text-black">
                    ${cartItem.discounted.toFixed(2)}
                  </span>
                )}
                {cartItem.price && (
                  <span className={`block text-5xl text-gray ${props.discounted ? props.discounted < props.price && "line-through" : "font-semibold"}`}>
                    ${cartItem.price.toFixed(2)}
                  </span>
                )}
                {cartItem.discounted && (
                  <div className="save flex flex-col justify-center">
                    <span className="block text-xl text-blue-500 font-semibold">
                    Save 
                  </span>
                  <div className="flex">
                    <span className="text-blue-500 font-semibold">${(cartItem.price - cartItem.discounted).toFixed(2)}</span>  
                    <span className="text-red-500 ml-2 font-semibold">
                    ({((cartItem.discounted/cartItem.price) * 100).toFixed(0)}%)
                    </span>
                  </div>
                  </div>
                )}

              </div>
              {/* quantity  */}
              <div className="qty my-8">
                <div className="qty flex gap-4 items-center">
                  <div className="quantity_box flex gap-4 items-center">
                    <button onClick={ () => setCartItem({...cartItem, qty:cartItem.qty>0?--cartItem.qty:1})
                    } className="bg-black text-white text-[35px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">-</button>
                    <div id='#quantity' className="rounded bg-gray-100 p-2 w-[150px] text-center">{cartItem.qty}</div>
                    <button onClick={ () => {
                        setCartItem({...cartItem, qty:++cartItem.qty})
                    }} className="bg-black text-white text-[25px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">+</button>
                  </div>
                  {
                    cartItem.qty > 1 && (
                      <div className="pricebox flex items-center gap-4">
                    <div>
                    {cartItem.discounted && (
                      <span className="block text-md font-semibold text-black">
                        ${((cartItem.discounted)*(cartItem.qty)).toFixed(2)}
                      </span>
                    )}
                    {cartItem.price && (
                      <span className={`block text-md text-gray ${cartItem.discounted ? cartItem.discounted < cartItem.price && "line-through" : "font-semibold"}`}>
                        ${((cartItem.price)*(cartItem.qty)).toFixed(2)}
                      </span>
                    )}
                    </div>
                  {cartItem.discounted && (
                    <div className="save flex flex-row items-center gap-2 justify-center">
                      <span className="block text-xl text-blue-500 font-semibold">
                      Save 
                      </span>
                    <div className="flex">
                      <span className="text-blue-500 font-semibold">${(((cartItem.price)*(cartItem.qty)) - ((cartItem.discounted)*(cartItem.qty))).toFixed(2)}</span>  
                      <span className="text-red-500 ml-2 font-semibold hidden">
                      ({((((cartItem.discounted)*(cartItem.qty))/((cartItem.price)*(cartItem.qty))) * 100).toFixed(0)}%)
                      </span>
                    </div>
                    </div>
                  )}
                  </div>
                    )
                  }
                </div>
              </div>
              <div className="card-actions w-full justify-between">
                
                <ProductAddedToast cartItem = {cartItem} />
                <button className="h-[3rem] rounded text-lg uppercase font-semibold max-w-[45%] w-1/2 bg-black text-white hover:bg-white hover:text-black border-black">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="description flex flex-col md:flex-row my-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold uppercase text-center">
                Product Description
              </h2>
            </div>
            <div className="flex-1 px-4">
              <p className="description leading-relaxed text-xl">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductMain;

'use client'
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ATCpopOver({slug}:{slug:string}) {
    const product = useAppSelector(state => state.products).find(
        product => product.slug == slug
    )
    const dispatch = useAppDispatch()
    const [cartItem, setCartItem] = useState({
        id: product?.id,
        title: product?.name,
        image: product?.image[0],
        slug: product?.slug,
        price: product?.price,
        discounted: product?.discounted,
        category: product?.category,
        size: product?.size[0],
        color: product?.color[0],
        qty: product?.qty,
    
      })
    //   toast 
    const notify = () =>
    toast.success("Product Added Successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger asChild>
          <button className="btn max-w-[320px] w-full text-sm bg-white text-black hover:bg-black hover:text-white border-white">
            Add to cart
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-white w-[315px] rounded">
          <div className="w-full">
            <div className="variants mb-4">
              <div className="flex justify-between items-center gap-4 mb-4">
                <span className="">Size:</span>
                <div className="relative flex-1">
                  <select
                    onChange={(e) =>
                      setCartItem({ ...cartItem, size: e.target.value })
                    }
                    className="w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                  >
                    {product?.size.map((size, i) => (
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
              <div className="flex gap-4">
                <span className="">Color:</span>
                {product?.color.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setCartItem({ ...cartItem, color: color })}
                    style={{ backgroundColor: color }}
                    className="border-2 rounded-full w-6 h-6 active:scale-125 focus:scale-125 focus:outline-none mr-2 active:border-black focus:border-black duration-200"
                  />
                 ))}
              </div>
            </div>
            <div onClick={notify}>
                <button onClick={() => dispatch(addToCart(cartItem))} className="btn w-full bg-black text-white hover:bg-white hover:text-black border-black">
                    Add to cart
                </button>
            </div>
    <ToastContainer />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ATCpopOver;

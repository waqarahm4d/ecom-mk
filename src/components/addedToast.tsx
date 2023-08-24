"use client";
import { addToCart } from "@/app/store/features/cartSlice";
import { useAppDispatch } from "@/app/store/hooks";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductAddedToast({cartItem}:any) {
    
  const dispatch = useAppDispatch()
  const notify = () =>
    toast.success("Product Added Successfully", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="h-[3rem] rounded bg-white max-w-[45%] w-1/2">
      <div className="w-full h-full rounded font-semibold text-black hover:bg-black hover:text-white border-white" onClick={() => dispatch(addToCart(cartItem))}>
        <button onClick={notify} className="w-full h-full text-lg uppercase">
          Add to cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductAddedToast;

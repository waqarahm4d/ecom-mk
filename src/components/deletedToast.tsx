import { deleteCartItem } from "@/app/store/features/cartSlice";
import { useAppDispatch } from "@/app/store/hooks";
import React from "react";
import { FaTrash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

function ProductDeleted(id:any) {
    console.log("rID",id)
  const dispatch = useAppDispatch();
  const notify = () =>
    toast("Product Removed", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div
      
      className="text-red-600 cursor-pointer line-clamp-1"
    >
      <FaTrash
        onClick={() => dispatch(deleteCartItem(id))}
        className="text-red-600 cursor-pointer line-clamp-1 hover:translate-y-1 duration-300"
      />
      <ToastContainer />
    </div>
  );
}

export default ProductDeleted;

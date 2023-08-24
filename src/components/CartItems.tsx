import React from 'react'
import { FaTrash } from "react-icons/fa";
import Image from 'next/image'
import { Cart } from '@/app/utils/types';
import { useAppDispatch } from '@/app/store/hooks';
import { addQty, deleteCartItem, minusQty } from '@/app/store/features/cartSlice';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function CartItems(props: Cart) {
  const dispatch = useAppDispatch()
  const itemDeleted = () =>
    toast.warn("Product Deleted", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const itemAdded = () =>
    toast.info("Product Quantity Increased", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const itemSub = () =>
    toast.warn("Product Quantity Reduced", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(props.slug)
  return (
    <div className='cart_item relative shadow-md rounded flex w-full md:max-h-[230px] flex-row justify-center gap-4 border-b border-gray-200 border-solid p-4'>
        <div className="item_image w-1/2">
            <Image src={props.image} alt="cart_item" className=' w-[120px] m-auto md:w-full md:h-full object-contain rounded p-4'/>
        </div>
        <div className="item_details w-1/2">
          <h3 className='text-lg md:text-2xl font-semibold my-2'>{props.name}</h3>
          <div className="variants flex items-center gap-4">
          <div className="size flex items-center gap-4">
            <h3 className='font-semibold'>Size:</h3>
            <h3 className='font-semibold shadow-sm bg-white w-5 h-5 text-center leading-tight rounded-full'>{props.size}</h3>
          </div>
          <div className="size flex items-center gap-4">
            <h3 className='font-semibold'>Color:</h3>
            <div className='font-semibold shadow-sm border border-black w-5 h-5 text-center leading-tight rounded-full' style={{backgroundColor:props.color}}></div>
          </div>
          </div>
          <div className="price flex flex-row gap-4 items-center my-2">
          {props.discounted && (
              <div className="discounted text-lg md:text-xl font-semibold text-black">
                ${props.discounted.toFixed(2)}
              </div>
           )}
            {props.price && (
              <div className={`original text-gray ${props.discounted ? props.discounted < props.price && "line-through text-sm" : "font-semibold text-lg"}`}>
                ${props.price.toFixed(2)}
              </div>
            )}
          </div>
          <div className="qty my-2">
            <div className="quantity_box flex gap-4 items-center">
              <div onClick={itemSub} className="minus_div">
                <button onClick={()=>dispatch(minusQty(props))} className="bg-black text-white text-[35px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">-</button>
              </div>
              <div id='#quantity' className="rounded bg-gray-100 p-2 w-[150px] text-center">{props.qty}</div>
              <div onClick={itemAdded} className="plus_div">
              <button onClick={(e)=>dispatch(addQty(props))} className="bg-black text-white text-[25px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">+</button>
              </div>
            </div>
          </div>
          <div className="item_total">
            <span className='text-lg md:text-xl font-semibold text-black'>Total: </span><span className='text-xl font-semibold text-black'>${props.discounted ? props.discounted * props.qty : props.price * props.qty }</span>
          </div>
        </div>
        <div onClick={itemDeleted} className="absolute right-5 top-1/2">
          <FaTrash onClick={()=>dispatch(deleteCartItem(props.uuid))} className="text-red-600 cursor-pointer line-clamp-1 hover:translate-y-1 duration-300" />
        </div>
        <ToastContainer />
    </div>
  )
}

export default CartItems
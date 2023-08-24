"use client"
import React, { useState } from 'react'

function Quantity(props:any) {
    // let q:number = 1;
    const [quantity, setQuantity] = useState(1);
    const subDisPrice = ((props.discounted)*(quantity ? quantity : props.qty))
    const subPrice = ((props.price)*(quantity ? quantity : props.qty))
  return (
    <div className="qty flex gap-4 items-center">
      <div className="quantity_box flex gap-4 items-center">
        <button onClick={ () => {
            quantity > 1 ? 
            setQuantity(quantity-1) : setQuantity(quantity)
        }} className="bg-black text-white text-[35px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">-</button>
        <div id='#quantity' className="rounded bg-gray-100 p-2 w-[150px] text-center">{quantity ? quantity : props.qty}</div>
        <button onClick={ () => {
            setQuantity(quantity+1)
        }} className="bg-black text-white text-[25px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">+</button>
      </div>
      {
        quantity > 1 && (
          <div className="pricebox flex items-center gap-4">
        <div>
        {props.discounted && (
          <span className="block text-md font-semibold text-black">
            ${subDisPrice.toFixed(2)}
          </span>
        )}
        {props.price && (
          <span className={`block text-md text-gray ${props.discounted ? props.discounted < props.price && "line-through" : "font-semibold"}`}>
            ${subPrice.toFixed(2)}
          </span>
        )}
        </div>
      {props.discounted && (
        <div className="save flex flex-row items-center gap-2 justify-center">
          <span className="block text-xl text-blue-500 font-semibold">
          Save 
          </span>
        <div className="flex">
          <span className="text-blue-500 font-semibold">${(subPrice - subDisPrice).toFixed(2)}</span>  
          <span className="text-red-500 ml-2 font-semibold hidden">
          ({((subDisPrice/subPrice) * 100).toFixed(0)}%)
          </span>
        </div>
        </div>
      )}
      </div>
        )
      }
    </div>
  )
}

export default Quantity
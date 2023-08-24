import React from "react";
import { CartProduct } from "../../iterfaces";

type IProps = {
    product: CartProduct,
    qty: number,
}

function ATC(props: IProps) {
  return (
    <div>
      {/* quantity  */}
      <div className="qty my-8">
        <div className="qty flex gap-4 items-center">
          <div className="quantity_box flex gap-4 items-center">
            <button
              // onClick={() =>
              //     setCartItem({
              //         ...cartItem,
              //         qty: cartItem.qty > 0 ? --cartItem.qty : 1,
              //     })
              // }
              className="bg-black text-white text-[35px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center"
            >
              -
            </button>
            <div
              id="#quantity"
              className="rounded bg-gray-100 p-2 w-[150px] text-center"
            >
              {props.qty}
            </div>
            <button
              // onClick={() => {
              //     setCartItem({ ...cartItem, qty: ++cartItem.qty });
              // }}
              className="bg-black text-white text-[25px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center"
            >
              +
            </button>
          </div>
          {/* {cartItem.qty > 1 && ( */}
          <div className="pricebox flex items-center gap-4">
            <div>
              {props.discounted && (
                <span className="block text-md font-semibold text-black">
                  ${(props.discounted * props.qty).toFixed(2)}
                </span>
              )}
              {/* {cartItem.price && ( */}
              <span
                className={`block text-md text-gray ${
                  props.discounted
                    ? props.discounted < props.price && "line-through"
                    : "font-semibold"
                }`}
              >
                ${(props.price * props.qty).toFixed(2)}
              </span>
              {/* )} */}
            </div>
            {/* {cartItem.discounted && ( */}
            <div className="save flex flex-row items-center gap-2 justify-center">
              <span className="block text-xl text-blue-500 font-semibold">
                Save
              </span>
              <div className="flex">
                <span className="text-blue-500 font-semibold">
                  $
                  {(
                    props.price * props.qty -
                    props.discounted * props.qty
                  ).toFixed(2)}
                </span>
                <span className="text-red-500 ml-2 font-semibold hidden">
                  (
                  {(
                    ((props.discounted * props.qty) /
                      (props.price * props.qty)) *
                    100
                  ).toFixed(0)}
                  %)
                </span>
              </div>
            </div>
            {/* )} */}
          </div>
          {/* )} */}
        </div>
      </div>
      <div className="card-actions w-full justify-between flex">
        <button className="h-[3rem] rounded text-lg uppercase font-semibold w-1/2 max-w-[48%] bg-white text-black hover:bg-black hover:text-white border-white">
          Add to cart
        </button>
        <button className="h-[3rem] rounded text-lg uppercase font-semibold w-1/2 max-w-[48%] bg-black text-white hover:bg-white hover:text-black border-black">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ATC;

'use client'
import { useAppSelector } from "@/app/store/hooks";
import Link from "next/link";
import React from "react";
import {FaCartShopping} from 'react-icons/fa6'

function Carticon() {
  const cart = useAppSelector((state)=> state.cart)
  return (
    <div>
      <div className="dropdown dropdown-end">
        <Link href='/cart'>
        <label className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaCartShopping size={30} />
            {
                cart.length > 0 && (
                  <span className="badge badge-sm indicator-item">
                    {cart.length} 
                  </span>
                )
              }
            
          </div>
        </label>
        </Link>
      </div>
    </div>
  );
}

export default Carticon;

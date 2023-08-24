'use client'
import CartItems from '@/components/CartItems'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useAppSelector } from '../store/hooks'
import { Cart } from '../utils/types'
import Link from 'next/link'

function CartMain() {
    const cart = useAppSelector((state)=>state.cart)
    const total = cart.reduce((total, arr:any) => {
        // console.log(total, arr.price, arr.discounted, arr.qty, (arr.price - arr.discounted))
        return total + (arr.discounted ? arr.discounted : arr.price) * arr.qty
        
    },0)
  return (
    <div className='py-8'>
        {
            cart.length > 0 ? (
                <div className='flex flex-col lg:flex-row justify-between gap-8 items-center lg:items-start'>
                    <div className="cart_items flex2 max-w-2xl w-full">
                        {
                            cart.map((product:Cart,i)=>(
                                <CartItems key={i} {...product}/>
                            ))
                        }
                        {/* <CartItems image={m1} name='Flex Sweatshirt' discounted={257} price={397} size='M' /> */}
                    </div>
                    <div className="cart_summary shadow-md p-4 rounded flex-1 max-w-sm">
                        <h2 className='text-2xl font-semibold my-4'>Order Summary</h2>
                        <div className="divider my-4"></div>
                        <div className="subtotal flex flex-row justify-between my-4">
                            <h3>SubTotal</h3>
                            <p>${total.toFixed(2)}</p>
                        </div>
                        <div className="others my-4">
                            <p className='text-sm italic'>Taxes and Shipping calculated at Checkout</p>
                        </div>
                        <div className="total flex flex-row justify-between my-4">
                            <h3 className='text-xl font-semibold text-black'>Estimated Total</h3>
                            <p className='text-xl font-semibold text-black'>${total.toFixed(2)}</p>
                        </div>
                        <div className="checkout_btn text-center my-4">
                            <Button className='btn bg-black hover:bg-white text-white hover:text-black rounded font-semibold text-xl'>
                                Proceed to checkout
                            </Button>
                        </div>

                    </div>
                 </div>
            ):(
                <div className='empty_cart text-center'>
                    <h2 className='text-2xl font-semibold my-4'>Your Cart is Empty.</h2>
                    <Link href='/products/all' className='btn bg-black hover:bg-white text-white hover:text-black rounded font-semibold text-xl'>Continue Shopping</Link>
                </div>
            )
        }
        
    </div>
  )
}

export default CartMain
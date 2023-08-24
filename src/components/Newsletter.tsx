import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Newsletter() {
  return (
    <div className='newsletter relative'>
        <div className="text-[3.5em] xl:text-[8.5em] font-semibold leading-[151px] text-[#f3f8ff] absolute top-[30%] left-[0%] md:left-[25%]">Newsletter</div>
        <div className="newsletter_inner w-full xl:w-[50%] m-auto text-center py-[10em] relative">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Subscribe Our Newsletter
            </h2>
            <p className="leading-7 mt-2">
            Get the latest information and promo offers directly
            </p>
            <div className="flex w-full max-w-lg mx-auto items-center justify-center space-x-2 mt-[2em]">
            <Input type="email" placeholder="Enter Your Email" className='bg-white rounded border-gray-300' />
            <Button type="submit" className='w-[200px] bg-black hover:bg-white text-white hover:text-black rounded '>Get Started</Button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
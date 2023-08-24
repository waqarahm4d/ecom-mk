import Link from "next/link"
import { Badge } from "./ui/badge"
import Logos from "./Logos"
import Image from "next/image"
import hero from '/public/header.webp'
import {FaCartShopping} from 'react-icons/fa6'

function Hero() {
  return (
    <div className="hero flex flex-col md:flex-row justify-center gap-4 py-4 md:py-[3em]">
        <div className="hero_content flex gap-[2rem] flex-1 flex-col justify-between pr-[2em]">
            <div className="text_content  gap-[2rem] flex flex-col justify-between flex-auto">
                <Badge variant="secondary" className="flex justify-center rounded-[50px] text-lg text-blue-500 bg-[#e1edff] w-[120px] h-[40px] wieght-600 text-center">Sale 70%</Badge>
                <h2 className="scroll-m-20 text-4xl font-[700] tracking-tight lg:text-[3.5em] leading-[1.1]">
                An Industrial Take on Streetwear
                </h2>
                <p className="leading-7 w-[70%]">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <div className="hero_btn">
                    <Link href='/products/all' className="flex items-center justify-center gap-2 w-[200px] bg-black text-white p-4 rounded">
                        <FaCartShopping size={30} />
                        Start Shopping
                    </Link>
                </div>
            </div>
            <div className="flex-auto flex items-end flex-wrap">
                <Logos />
            </div>
        </div>
        <div className="hero_image flex flex-1 relative order-[-1] sm:order-1">
            <div className="absolute z-1 bottom-0 w-[300px] xl:w-[560px] h-[300px] xl:h-[560px] rounded-full bg-[#ffece3]"></div>
            <div className="h_img relative z-2">
                <Image src={hero} alt="header" />
            </div>
        </div>
    </div>
  )
}

export default Hero
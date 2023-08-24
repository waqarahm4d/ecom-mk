import Image from "next/image"
import f1 from "/public/Featured1.webp"
import f2 from "/public/Featured2.webp"
import f3 from "/public/Featured3.webp"
import f4 from "/public/Featured4.webp"

function Logos() {
  return (
    <div className="featured_logos flex gap-[2em] items-center">
        <Image className="w-full md:w-[150px]" src={f1} alt="logo"/>
        <Image className="w-full md:w-[150px]" src={f2} alt="logo"/>
        <Image className="w-full md:w-[150px]" src={f3} alt="logo"/>
        <Image className="w-full md:w-[150px]" src={f4} alt="logo"/>
    </div>
  )
}

export default Logos
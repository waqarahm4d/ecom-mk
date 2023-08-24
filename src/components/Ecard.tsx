import Image, { StaticImageData } from 'next/image'

function Ecard(props:{title:string, sale_price:string, c_price:string, img:StaticImageData}) {
  return (
    
    <div className='card_details flex flex-col justify-between bg-[#efe1c7] h-[100%] pt-[1.5rem] pl-[1rem]'>
        <p>{props.title}</p>
        <div className="price">
            <span className='compare_price line-through'>${props.c_price}</span>
            <span className='sale_price font-semibold text-[18px] ml-[10px]'>${props.sale_price}</span>
        </div>
        <Image src={props.img} alt='Image' />
    </div>
  )
}

export default Ecard
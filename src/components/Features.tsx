import Image from 'next/image'
import Link from 'next/link'
import f_img from 'public/feature.webp'
import Feature from './Feature'

function Features() {
  return (
    <div className='features_main'>
        <div className="title flex justify-end px-4 lg:px-[8rem] pb-[2rem]">
            <h2 className='max-w-screen-xl text-center md:text-left md:px-2 font-semibold text-[1.75rem] lg:text-[2.75rem] text-[#212121] w-full lg:w-[45%]'>Unique and Authentic Vintage Designer Jewellery</h2>
        </div>
        <div className="content bg-[#f3f8ff] pb-4 px-2">
            <div className="max-w-screen-xl px-4 m-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="left flex flex-col md:flex-row flex-1 gap-[2rem] relative">
                    <div className="feature-background w-[70%] absolute text-[4rem] md:text-[6.875rem] font-bold opacity-[.07] leading-[110px]">Different from others</div>
                    <div className="top flex flex-row md:flex-col gap-4 justify-between">
                        <Feature title='Using Good Quality Materials' txt='Lorem ipsum dolor sit amt, consectetur adipiscing elit.' />
                        <Feature title='100% Handmade Products' txt='Lorem ipsum dolor sit amt, consectetur adipiscing elit.' />
                    </div>
                    <div className="bottom flex  flex-row md:flex-col gap-4 justify-between mb-4">
                        <Feature title='Modern Fashion Design' txt='Lorem ipsum dolor sit amt, consectetur adipiscing elit.' />
                        <Feature title='Discount for Bulk Orders' txt='Lorem ipsum dolor sit amt, consectetur adipiscing elit.' />
                    </div>
                </div>
                <div className="right flex flex-col md:flex-row flex-1 items-center justify-between gap-[2rem]">
                    <Image src={f_img} alt='Image' />
                    <div className="right_content">
                        <p className="mb-4">
                        This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                        </p>
                        <div className='pb-4 flex'>
                        <Link href='/products/all' className='w-[200px] text-center bg-black text-white p-4 rounded'>See All Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
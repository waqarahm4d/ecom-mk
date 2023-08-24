import Image from 'next/image'
import img1 from '/public/event1.webp'
import img2 from '/public/event2.webp'
import img3 from '/public/event3.webp'
import Link from 'next/link'
import Ecard from './Ecard'

function Events() {
  return (
    <div className='events_main py-[4rem]'>
        <div className="event_header text-center mb-[2rem]">
            <p className="leading-7 text-[12px] text-[#0062f5] font-[700] mb-[1rem]">
                PROMOTIONS
            </p>
            <h2 className="scroll-m-20 text-[32px] font-[600] lg:text-[32px] leading-[1.1] tracking-wide">
                Our Promotions Event
            </h2>
        </div>
        <div className="event_gallery flex flex-col md:flex-row gap-[2rem]">
            <div className="g_left">
                <div className="g_card flex items-center bg-[#d6d6d8] justify-between px-4 md:px-[2rem] mb-[1rem]">
                    <div className="g_txt flex-1 py-2 md:py-0">
                        <h2 className="scroll-m-20 leading-7 mb-2 text-lg md:text-[20px] font-[700] lg:text-[1.75rem] tracking-wide">
                        GET UP TO 60%
                        </h2>
                        <p className="md:leading-7 text-sm md:text-[1.12rem]">
                        For the summer season
                        </p>
                    </div>
                    <Image className=' flex-1' src={img1} alt='event1'/>
                </div>
                <div className="g_card flex items-center text-center bg-[#212121] justify-center px-[2rem] py-[3rem]">
                    <div className="g_txt text-white">
                        <h2 className="scroll-m-20 text-[20px] mb-[1rem] font-[800] lg:text-[2.25rem] leading-[45px] tracking-wide">
                        GET 30% Off
                        </h2>
                        <p className="text-[.875rem] font-[400] leading-[45px]">
                            USE PROMO CODE
                        </p>
                        <Link href='#' className='text-[17px] rounded-lg font-[700] tracking-[0.25rem] text-white radius-md bg-[#474747] px-4 lg:px-10 py-2'>DINEWEEKENDSALE</Link>
                    </div>
                </div>
            </div>
            <div className="g_right flex gap-[1rem]">
             <Link href='/product/flex-sweatshirt'>
             <Ecard title='FLEX SWEATSHIRT' sale_price='75' c_price='100' img={img2} />
             </Link>
             <Link href='/product/cameryn-sash-tie'>
             <Ecard title='CAMERYN SASH TIE' sale_price='75' c_price='100' img={img3}/>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default Events
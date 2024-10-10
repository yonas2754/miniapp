'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '@/components/footer'






// Define the type for each ticket item
type Ticket = {
  name: string;
  ticketNum: number;
};

const Page: React.FC = () => {
  const tickets: Ticket[] = [
    { name: 'yonas', ticketNum: 4 },
    { name: 'yonas2', ticketNum: 1 },
    { name: 'yonas2', ticketNum: 2 },
    { name: 'yonas3', ticketNum: 3 },
    { name: 'yonas5', ticketNum: 5 },
    { name: 'yonas6', ticketNum: 6 },
    { name: 'yonas7', ticketNum: 7 },
    { name: 'yonas8', ticketNum: 8 },
    { name: 'yonas9', ticketNum: 9 },
    { name: 'yonas10', ticketNum: 10 },
    { name: 'yonas11', ticketNum: 11 },
    { name: 'yonas12', ticketNum: 12 },
  ];

  return (
    <div>
    <section className='py-12 w-full  h-full bg-ethBlack-500'>
      <div className='container h-screen'>
        <Swiper
              navigation          
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
              modules={[Navigation, Autoplay]}
              onSwiper={swiper => console.log(swiper)}
              className=' h-fit bg-ethDeepBlue-900  w-full rounded-[48px] border-2 border-ethLightBlue-950 shadow-2xl  shadow-ethDeepBlue-800  p-8'
        >
          {Array.from({ length: Math.ceil(tickets.length / 10) }).map((_, i) => (
            <SwiperSlide key={i}> 
              <div className='grid grid-cols-3 gap-4 items-center justify-start'>
                {tickets.slice(i * 10, (i + 1) * 10).map((ticket, index) => (
                  <div key={index} className='flex flex-col items-center justify-center'>
                    <div className='w-[10vw] h-[10vw] bg-ethLightBlue-500 rounded-full flex items-center justify-center'>
                      <p className='text-center font-bold text-lg text-ethYellow-600'>
                        {ticket.ticketNum}
                      </p>
                    </div>
                    <p className=' text-center text-ethYellow-500 text-lg'>{ticket.name}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
     

      <div className='w-fit  h-fit m-4 p-4 bg-ethDeepBlue-700 flex justify-center items-center rounded-3xl '>

 <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
      2 <span className='text-2xl'>day</span>: 5 <span className='text-2xl'>hr</span> : 50 <span className='text-2xl'>min</span>: 6 <span className='text-2xl'>sec</span>
    </h1>
      </div>
      </div>
      
    </section>
    <Footer/>
    </div>
  );
};

export default Page;

'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'






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
    <section className='py-12 w-full h-full bg-ethBlack-600'>
      <div className='container h-screen'>
        <Swiper
              navigation          
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
              modules={[Navigation, Autoplay]}
              onSwiper={swiper => console.log(swiper)}
              className='h-1/2 bg-ethDeepBlue-900  w-full rounded-lg'
        >
          {Array.from({ length: Math.ceil(tickets.length / 10) }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className='grid grid-cols-2 gap-4 items-center justify-start'>
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
      </div>
    </section>
  );
};

export default Page;

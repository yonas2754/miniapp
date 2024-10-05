'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Page() {
const ticket =[{'name':'yonas','ticketNum':4},{'name':'yonas2','ticketNum':1},{'name':'yonas2','ticketNum':2},
  {'name':'yonas3','ticketNum':3},{'name':'yonas5','ticketNum':5},{'name':'yonas6','ticketNum':6},{'name':'yonas7','ticketNum':7},{'name':'yonas8','ticketNum':8},{'name':'yonas9','ticketNum':9},{'name':'yonas10','ticketNum':10},{'name':'yonas11','ticketNum':11},{'name':'yonas12','ticketNum':12}
]
  return (
    <section className='py-12'>
      <div className='container h-screen'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
          modules={[Navigation, Autoplay]}
          onSwiper={swiper => console.log(swiper)}
          className='h-1/2 bg-ethLightBlue-400  w-full rounded-lg'
        >
            {ticket.map((t, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col h-full w-full items-center justify-center'>
            

              <div className="p-4 rounded-full circle-outer">
                <div className="w-full h-full rounded-full circle-inner">
                  <p className="text-center font-bold text-lg text-ethYellow-600">
                  {t.ticketNum}
                  </p>
                  </div>

                  </div>
               <p>{t.name}</p>
             

              </div>
            </SwiperSlide>
            ))}
                   
        
         
          
        </Swiper>
      </div>
    </section>
  )
}

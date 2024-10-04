'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Page() {
  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
         
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
               <h1>yonas</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
               <h1>yonas2</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
               <h1>yonas3</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
               <h1>yonas4</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
               <h1>yonas5</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
               <h1>yonas6</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
               <h1>yonas7</h1>
              </div>
            </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  )
}

import Footer from '@/components/footer'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Page() {
  return (
    <div>
      <Swiper autoplay={{ delay: 3000 }} loop>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
</Swiper>
      
      <Footer/>
    </div>
  )
}

export default Page

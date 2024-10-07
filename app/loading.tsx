import React from 'react'
import Image from 'next/image'
import mountains2 from '../public/image/lottery_winning3.png'
function Loading() {
  return (
    <div className=' fixed top-0 w-full h-screen  '>
           <Image
              alt="Mountains2"
              src={mountains2}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit:  'contain',
              }}
            />
      
    </div>
  )
}

export default Loading

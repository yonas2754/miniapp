import BackButtonDemo from '@/components/backButton'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div>
   <BackButtonDemo/>   
   <div className=' bg-ethDeepBlue-950 w-full  h-full p-8'>
    <div  className=''>
    <div>
      {/* Create an array with 100 elements and map over it */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div className="px-4 mt-4 grid grid-cols-3 gap-1  overflow-scroll " key={index}>
           <Link href="/protected/protectedlist">
          <div className="p-4 rounded-full circle-outer">
            <div className="w-full h-full rounded-full circle-inner">
              <p className='text-center font-bold text-lg text-ethYellow-600'>{index + 1}</p>
             
            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>

    </div>

   </div>
    </div>
  )
}

export default Page

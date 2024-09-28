import BackButtonDemo from '@/components/backButton'
import Coins from '@/components/icons/Coins'
import Friends from '@/components/icons/Friends'
import Mine from '@/components/icons/Mine'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div className='bg-ethBlack-950  w-full h-full  mb-2 flex flex-col'>
   <BackButtonDemo/>   
   <div className=" bg-ethBlack-950  p-12  grid grid-cols-3 gap-0 ">
      {/* Create an array with 100 elements and map over it */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div className="px-4 mt-4 flex justify-center" key={index}>
          <div className="p-4 rounded-full circle-outer">
    
            <div className="w-full h-full rounded-full circle-inner">
            <Link href="/protected/protectedlist">
              <p className='text-center font-bold text-lg text-ethYellow-600'>{index + 1}</p>
              </Link>
            </div>
            
          </div>
        </div>
      ))}
    </div>
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs p-2">
        <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
        {/*   <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" /> */}
          <p className="mt-1  text-lg  font-extrabold text-ethYellow-600">Mela</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Mine className="w-8 h-8 mx-auto" />
          <p className="mt-1">Bank</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
        {/* <div className="text-center text-[#85827d] w-1/5">
         <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" /> 
          <p className="mt-1">Airdrop</p>
        </div> */}
      </div>
    </div>
  )
}

export default Page

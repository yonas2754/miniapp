'use client'
import React from 'react'
import Mine from './icons/Mine'
import Friends from './icons/Friends'
import Coins from './icons/Coins'
import { usePathname } from 'next/navigation'
function Footer() {
    const pathname = usePathname()
  return (
    <div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs p-2">
        <div className={`text-center text-[#85827d] w-1/5 ${pathname.includes('/protected')  ? ' bg-[#1c1f24] ' : ''}      m-1 p-2 rounded-2xl`}>
          <p className="mt-1 text-lg font-extrabold text-ethYellow-600">Mela</p>
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
      </div>
    </div>
  )
}

export default Footer

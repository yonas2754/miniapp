'use client'
import React from 'react'
import Mine from './icons/Mine'
import Friends from './icons/Friends'
import Coins from './icons/Coins'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function Footer() {
    const pathname = usePathname()
  return (
    <div>
      <div className="fixed bottom-0  w-full  bg-[#272a2f] flex justify-around items-center z-40 rounded-3xl text-xs p-2">
      
        <div className={`text-center  w-1/5 ${pathname.includes('/protected')  ? ' bg-[#1c1f24]  text-ethYellow-600' : ' text-ethYellow-300'}      m-1 p-2 rounded-2xl`}>
        <Link href="/protected">

          <p className="mt-1 text-lg font-extrabold ">Mela</p>
          </Link>
        </div>
        <div className={`text-center  w-1/5  ${pathname.includes('/bank')  ? ' bg-[#1c1f24] text-ethGray-100' : 'text-[#85827d]'} `}>
        <Link href="/bank">
          <Mine className="w-8 h-8 mx-auto" />
          <p className="mt-1">Bank</p>
          </Link>
        </div>
        <div className={`text-center  w-1/5  ${pathname.includes('/friends')  ? ' bg-[#1c1f24] text-ethGray-100 ' : 'text-[#85827d]'} `}>
        <Link href="/friends">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
          </Link>
        </div>
        <div className={`text-center  w-1/5  ${pathname.includes('/earn')  ? ' bg-[#1c1f24] text-ethGray-100 ' : 'text-[#85827d]'} `}>
        <Link href="/earn">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

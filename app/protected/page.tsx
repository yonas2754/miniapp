import { getSession } from '@/utils/session';
import Image from 'next/image'
import profilePic from '../public/image/lottery_winning3.png'


import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
export default async function ProtectedPage() {
  const session = await getSession()
    return (

      <>

<div className=' bg-ethBlack-950 flex justify-center'>
<div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
<div className="px-4 z-10">




    <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#1d2025]">
         
<Image
     src="/image/lottery_winning3.png"
      alt=""
      width={30}
      height={30}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
            </div>
            <div>
              <p className="text-sm">yonas (CEO)</p>
            </div>
          </div>

    </div>
    </div>
    

</div>

    {/*   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Protected Page</h1>
        <h1 className="text-4xl font-bold mb-8">Jwt Authentication for Telegram Mini Apps</h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <p className="text-xl">Welcome to the protected page! Only authenticated users can see this.</p>
      </div> */}
      </>
    )
  }
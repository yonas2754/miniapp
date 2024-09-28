import { getSession } from '@/utils/session';
import Image from 'next/image'
import profilePic from '../public/image/lottery_winning3.png'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
export default async function ProtectedPage() {
  const session = await getSession()
    return (

      <>

<div className=' '>
<div className="   w-full bg-ethBlack-600 text-white h-screen font-bold flex flex-col max-w-xl">
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

    
    

<div className=' flex flex-col rounded-t-3xl   bg-ethBlack-500 border-t-2    shadow-2xl  border-ethYellow-500 w-full grow p-8 '>

<div>

<Tabs defaultValue="own" className="w-full grow ">
      <TabsList className="grid w-full grid-cols-3  bg-ethBlack-400">
        <TabsTrigger value="own" className='bg-ethBlack-500'>own</TabsTrigger>
        <TabsTrigger value="available" className='bg-ethBlack-500'>available</TabsTrigger>
        <TabsTrigger value="end" className='bg-ethBlack-500'>End</TabsTrigger>
      </TabsList>
      <TabsContent value="own" >
         <div className=' grid grid-cols-2 gap-2 '>


         <Card className='bg-ethLightBlue-950 text-white'>
          <CardHeader>
            <CardTitle>
              <p className=' text-center '>Day At</p>
              <p> 9/24/2021</p>
              </CardTitle>
            <CardDescription>
            <Image
      src="/image/lottery_winning3.png"
      alt="Picture of the author"
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}

      
    />


            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="flex items-center justify-center space-x-1">

<Image
      src="/image/dollar-coin.png"
      alt="Picture of the author"
      width={24}
      height={24}
    />
                  <p className="text-lg">2000</p>
                 
                </div>
           
          </CardContent>
          <CardFooter>
          <p className="text-sm"> price 100</p>
          </CardFooter>
          
        </Card>



        <Card className='bg-ethLightBlue-950 text-white'>
          <CardHeader>
            <CardTitle>Day at 9/24/2021</CardTitle>
            <CardDescription>
            <Image
      src="/image/lottery_winning3.png"
      alt="Picture of the author"
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="flex items-center justify-center space-x-1">




<Image
      src="/image/dollar-coin.png"
      alt="Picture of the author"
      width={24}
      height={24}
    />
                  <p className="text-lg">4000</p>
                 
                </div>
           
          </CardContent>
          <CardFooter>
          <p className="text-sm"> price 100</p>
          </CardFooter>
        </Card>

         </div>
        
      </TabsContent>



      <TabsContent value="available">
        <Card className='bg-ethLightBlue-950 text-white'>
          <CardHeader>
            <CardTitle>Day at 10/27/2024</CardTitle>
            <CardDescription>
            <Image
      src="/image/lottery_winning2.png"
      alt="Picture of the author"
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}

      
    />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">


          <div className="flex items-center justify-center space-x-1">

<Image
      src="/image/dollar-coin.png"
      alt="Picture of the author"
      width={24}
      height={24}
    />
                  <p className="text-lg">10000</p>
                 
                </div>
           
          </CardContent>
          <CardFooter>
          <p className="text-sm"> price 500</p>
          </CardFooter>
        </Card>
      </TabsContent>




      <TabsContent value="end">
        <Card className='bg-ethLightBlue-950 text-white'>
          <CardHeader>
            <CardTitle>Day at 10/27/2025</CardTitle>
            <CardDescription>
            <Image
      src="/image/lottery_winning1.png"
      alt="Picture of the author"
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}

      
    />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">


          <div className="flex items-center justify-center space-x-1">

<Image
      src="/image/dollar-coin.png"
      alt="Picture of the author"
      width={24}
      height={24}
    />
                  <p className="text-lg">10000</p>
                 
                </div>
           
          </CardContent>
          <CardFooter>
          <p className="text-sm"> price 500</p>
          </CardFooter>
        </Card>
      </TabsContent>


    </Tabs>
</div>

<div className="px-4 mt-4 flex justify-center">
              <div
                className=" p-4 rounded-full circle-outer"
                /* onClick={#handleCardClick} */
              >
                <div className="w-full h-full rounded-full circle-inner">
              <p className=' text-center  font-bold text-lg text-ethYellow-600'>1200</p>
              <Link href="/protected/protectedlist">
               
                </Link>
                </div>
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
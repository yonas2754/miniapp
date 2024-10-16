import { getSession } from '@/utils/session';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Coins from '@/components/icons/Coins';
import Friends from '@/components/icons/Friends';
import Mine from '@/components/icons/Mine';
import Footer from '@/components/footer';
import Info from '@/components/icons/Info';
import Settings from '@/components/icons/Settings';
import Posts  from '@/components/userinfo';
import React from 'react';

// Define types for the Lottery Card props
interface LotteryCardProps {
  date: string;
  imageSrc: string;
  amount: number;
  price: number;
}

// Reusable LotteryCard component with type safety
const LotteryCard: React.FC<LotteryCardProps> = ({ date, imageSrc, amount, price }) => (
  <Card className='bg-ethLightBlue-950 text-white'>
    <CardHeader>
      <CardTitle>Day at {date}</CardTitle>
      <CardDescription>
        <Image src={imageSrc} alt="Lottery Image" sizes="100vw" style={{ objectFit: 'cover' }} />
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="flex items-center justify-center space-x-1">
        <Image src="/image/dollar-coin.png" alt="Dollar Icon" width={24} height={24} />
        <p className="text-lg">{amount}</p>
      </div>
    </CardContent>
    <CardFooter>
      <p className="text-sm">Price: {price}</p>
    </CardFooter>
  </Card>
);

// Define a type for the tabsData structure
type TabsData = Record<string, LotteryCardProps[]>;

export default async function ProtectedPage() {
  const session = await getSession();



  // Centralized card data
  const tabsData: TabsData = {
    own: [
      { date: "9/24/2021", imageSrc: "/image/lottery_winning3.png", amount: 2000, price: 100 },
      { date: "9/24/2021", imageSrc: "/image/lottery_winning3.png", amount: 4000, price: 100 }
    ],
    available: [
      { date: "10/27/2024", imageSrc: "/image/lottery_winning2.png", amount: 10000, price: 500 }
    ],
    end: [
      { date: "10/27/2025", imageSrc: "/image/lottery_winning1.png", amount: 10000, price: 500 }
    ]
  };


  

  return (

    <div className=" bg-ethBlack-600 text-white  w-full h-full min-h-screen font-bold flex flex-col max-w-xl">
      <div className="px-4 z-10 pt-4">
        <div className="flex items-center justify-between space-x-4  my-1">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-lg bg-[#1d2025]"> 
            <Image src="/image/lottery_winning3.png" alt="Profile Pic" width={30} height={30} />
          </div>d
         <Posts chatId="7277258087"/> 
     
   {/*        <p className="text-sm">yonas (CEO)</p>  */}
        </div>


        <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
        <Image
      src="/image/lottery_winning1.png"
      width={32}
      height={32}
      alt="Picture"
    />
      
      <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
      <div className="flex-1 text-center">
        <p className="text-xs text-[#85827d] font-medium">wining price</p>
        <div className="flex items-center justify-center space-x-1">
        <Image
      src="/image/dollar-coin.png"
      width={18}
      height={18}
      alt="Picture"
    />
      
          <p className="text-sm">1000</p>
          <Info size={20} className="text-[#43433b]" />
        </div>
      </div>
      <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
      <Settings className="text-white" />
    </div>
 


        </div>
        
      </div>

      <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
        <Tabs defaultValue="own" className="w-full grow">
          <TabsList className="grid w-full grid-cols-3 bg-ethBlack-400">
            {Object.keys(tabsData).map(key => (
              <TabsTrigger key={key} value={key} className='bg-ethBlack-500 capitalize'>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(tabsData).map(([key, cards]) => (
            <TabsContent key={key} value={key}>
              <div className='grid grid-cols-2 gap-2'>
             
                {cards.map((card, index) => (
                  <>
                   <Link href="/protected/protectedlist">
                  <LotteryCard key={index} {...card} />
                  </Link>
                  </>
                ))}
                    
              </div>
            </TabsContent>
          ))}
        </Tabs>

        
      </div>



      <Footer/>
     
    </div>
  );
}


     {/*   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Protected Page</h1>
        <h1 className="text-4xl font-bold mb-8">Jwt Authentication for Telegram Mini Apps</h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <p className="text-xl">Welcome to the protected page! Only authenticated users can see this.</p>
      </div> */}

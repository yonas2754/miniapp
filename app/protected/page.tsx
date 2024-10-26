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
import LotteryCard from './lotteryCard';

// Define types for the Lottery Card props
interface LotteryCardProps {
  date: string;

  amount: number;
  price: number;
}



// Define a type for the tabsData structure
type TabsData = Record<string, LotteryCardProps[]>;

export default async function ProtectedPage() {
  const session = await getSession();



  // Centralized card data
  const tabsData: TabsData = {
    own: [
      { date: "9/24/2021", amount: 2000, price: 100 },
      { date: "9/24/2021", amount: 4000, price: 100 }
    ],
    available: [
      { date: "10/27/2024", amount: 10000, price: 500 }
    ],
    end: [
      { date: "10/27/2025", amount: 10000, price: 500 }
    ]
  };






  

  return (

    <div className=" bg-ethBlack-600 text-white  w-full h-full min-h-screen font-bold flex flex-col max-w-xl">
          <Posts chatId="7277258087"/> 
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

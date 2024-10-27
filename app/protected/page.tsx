import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Posts from '@/components/userinfo'
import { Backend_URL } from '@/lib/Constants';
import { getSession } from '@/utils/session';
import Link from 'next/link';
import LotteryCard from './lotteryCard';
type ele ={
    id: string;
    gameType: string;
    imageNum: number;
    startDate: string;
    endDate: string;
    gameNumber: number;
    gamePrice: number;
    gameDescription: string;
    createdAt: string;
    updatedAt: string;
  }
async function page() {
    const session = await getSession();

    const [activeGamesResponse, endedGamesResponse, userGamesResponse] = await Promise.all([
        fetch(`${Backend_URL}/profiles/activeGames`),
        fetch(`${Backend_URL}/profiles/endedGames`),
        fetch(`${Backend_URL}/profiles/${session.user.telegramId}`),
      ]);

      const activeGames = await activeGamesResponse.json();
      const endedGames = await endedGamesResponse.json();
      const userGames = await userGamesResponse.json();

    

  return (
    <div className='bg-ethBlack-600 text-white w-full h-full min-h-screen font-bold flex flex-col max-w-xl'>
          <Posts chatId="7277258087" />
          <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
      <Tabs defaultValue="my" className="w-full grow">
  <TabsList  className="grid w-full grid-cols-3 bg-ethBlack-500 capitalize">
    <TabsTrigger value="my" >My Tacket </TabsTrigger>
    <TabsTrigger value="tacket">Mela Tacket</TabsTrigger>
    <TabsTrigger value="winner">Mela Winner</TabsTrigger>
  </TabsList>
  <TabsContent value="my">
   
    {activeGames.map((element:ele) => (
        <div key={element.id}>
        
            <LotteryCard element={element}/>
    
    </div>))}
    </TabsContent>
  <TabsContent value="tacket">
    Change your password here.

  </TabsContent>
  <TabsContent value="winner">
    Change your password here.

  </TabsContent>
</Tabs>
</div>
    </div>
  )
}

export default page

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Posts from '@/components/userinfo'
import { Backend_URL } from '@/lib/Constants';
import { getSession } from '@/utils/session';
import Link from 'next/link';
import LotteryCard from './lotteryCard';
import Footer from '@/components/footer';
import Mytickate from './mytickate';
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

  type Ticket = {
    id: string;
    number: number;
    purchaseDate: string;
    winnerOne: boolean;
    winnerTwo: boolean;
    winnerThere: boolean;
  };
  

  type Profile = {
    id: string;
    gameType: string;
    imageNum: number;
    startDate: string;
    endDate: string;
    gameNumber: number;
    gamePrice: number;
    gameDescription: string;
    ticket: Ticket[];
  };

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
    <div>
    <div className='bg-ethBlack-600  flex '>
    <div className=' text-white w-full h-full min-h-screen font-bold flex flex-col max-w-xl mb-60'>
          <Posts chatId="7277258087" />
          <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
      <Tabs defaultValue="my" className="w-full grow">
  <TabsList  className="grid w-full grid-cols-3 bg-ethBlack-500 capitalize">
    <TabsTrigger value="my" >My Tacket </TabsTrigger>
    <TabsTrigger value="tacket">Mela Tacket</TabsTrigger>
    <TabsTrigger value="winner">Mela Winner</TabsTrigger>
  </TabsList>
  <TabsContent value="my" className="pt-4 grid grid-cols-2 gap-4">

    {activeGames.map((element:ele) => (
        <div key={element.id}>
            <LotteryCard element={element} session={session} />
    
    </div>))}
    </TabsContent>
  <TabsContent value="tacket">
  {userGames?.profiles?.map((profile:Profile) => (
        <div key={profile.id}>
           
           <Mytickate profile={profile} />
    </div>))}

  </TabsContent>
  <TabsContent value="winner">
    Change your password here.

  </TabsContent>
</Tabs>
</div>
    </div>
    </div>
    <Footer/>
    </div>

  )
}

export default page

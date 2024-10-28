// pages/page.tsx (or /app if you're using the new app directory)
'use client';

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Posts from '@/components/userinfo'
import { Backend_URL } from '@/lib/Constants';
import Link from 'next/link';
import LotteryCard from './lotteryCard';
import Footer from '@/components/footer';

type ele = {
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
};

// Client-side component
const Page = ({ session, activeGames }: { session: any, activeGames: ele[] }) => {
  return (
    <div>
      <div className='bg-ethBlack-600  flex '>
        <div className=' text-white w-full h-full min-h-screen font-bold flex flex-col max-w-xl mb-60'>
          <Posts chatId={session.user.telegramId} />
          <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
            <Tabs defaultValue="my" className="w-full grow">
              <TabsList className="grid w-full grid-cols-3 bg-ethBlack-500 capitalize">
                <TabsTrigger value="my">My Tacket</TabsTrigger>
                <TabsTrigger value="tacket">Mela Tacket</TabsTrigger>
                <TabsTrigger value="winner">Mela Winner</TabsTrigger>
              </TabsList>
              <TabsContent value="my" className="pt-4 grid grid-cols-2 gap-4">
                {activeGames.map((element: ele) => (
                  <div key={element.id}>
                    <Link href={`protected/${session.user.telegramId}/${element.id}/${element.gameNumber.toString()}/${element.gamePrice.toString()}`}>
                      <LotteryCard element={element} />
                    </Link>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="tacket">Change your password here.</TabsContent>
              <TabsContent value="winner">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

// Server-side logic for fetching session and games data
import { getSession } from '@/utils/session';
export async function getServerSideProps() {
  const session = await getSession(); // Fetch the session on the server side

  const [activeGamesResponse, endedGamesResponse, userGamesResponse] = await Promise.all([
    fetch(`${Backend_URL}/profiles/activeGames`),
    fetch(`${Backend_URL}/profiles/endedGames`),
    fetch(`${Backend_URL}/profiles/${session.user.telegramId}`),
  ]);

  const activeGames = await activeGamesResponse.json();

  return {
    props: {
      session,
      activeGames,
    },
  };
}

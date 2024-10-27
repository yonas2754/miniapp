import { getSession } from '@/utils/session';
import Link from 'next/link';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Posts from '@/components/userinfo';
import React from 'react';
import LotteryCard from './lotteryCard';
import { Backend_URL } from '@/lib/Constants';

// Define types for the Lottery Card props
interface LotteryCardProps {
  id: string;
  gameType: string;
  imageNum: number;
  startDate: string;
  endDate: string;
  gameNumber: number;
  gamePrice: number;
  gameDescription?: string;
  createdAt: string;
  updatedAt: string;
}

// Define a type for the tabsData structure
type TabsData = Record<string, LotteryCardProps[]>;

export default async function ProtectedPage() {
  const session = await getSession();

  // Fetching data from the backend
  const [activeGamesResponse, endedGamesResponse, userGamesResponse] = await Promise.all([
    fetch(`${Backend_URL}/profiles/activeGames`),
    fetch(`${Backend_URL}/profiles/endedGames`),
    fetch(`${Backend_URL}/profiles/${session.user.telegramId}`),
  ]);

  const activeGames = await activeGamesResponse.json();
  const endedGames = await endedGamesResponse.json();
  const userGames = await userGamesResponse.json();

  // Centralized card data
  const tabsData: TabsData = {
    own: activeGames,
    available: activeGames,
    end: activeGames,
  };

  return (
    <div className="bg-ethBlack-600 text-white w-full h-full min-h-screen font-bold flex flex-col max-w-xl">
      <Posts chatId="7277258087" />
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
            <TabsContent key={key} value={key} className="pt-4">
              <div className='grid grid-cols-2 gap-2'>
                {cards.map((card) => (
                  <Link key={card.id} href="/protected/protectedlist">
                    <LotteryCard {...card} />
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

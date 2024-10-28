'use client';
import React from 'react';
import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from 'next/image';
import { emojiSet } from '@/lib/Constants';
import { useRouter } from 'next/navigation'

// Utility function to get a random emoji from the expanded emojiSet
const getRandomEmoji = (x: number): string => {
  if (x >= 0 && x < emojiSet.length) {
    return emojiSet[x];
  }
  return "🎲"; // Example fallback emoji
};

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


function Mytickate({profile ,session}:{profile:any ,session:any}) {
    const emoji = getRandomEmoji(profile.imageNum);
  return (
    <div>
      
      <Card className="bg-gradient-to-r from-ethLightBlue-700 to-ethLightBlue-900 text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 rounded-2xl">
        <CardHeader className="p-2 text-center">
          <CardTitle className="text-2xl font-bold">
            {`At ${format(new Date(profile.endDate), "PPP, p")}`}
          </CardTitle>
          <CardDescription className="mt-2">
            <div className="flex justify-center my-4 text-6xl animate-bounce">
              {emoji}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Image src="/image/lottery_winning3.png" alt="Dollar Icon" width={32} height={32} />
            <p className="text-xl font-semibold">{profile.gameDescription}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4 bg-opacity-50 bg-black rounded-b-2xl">
          <p className="text-sm">Price: <span className="font-bold">{profile.gamePrice}</span></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Mytickate

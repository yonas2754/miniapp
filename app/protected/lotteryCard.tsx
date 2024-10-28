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
import Link from 'next/link';

// Utility function to get a random emoji from the expanded emojiSet
const getRandomEmoji = (x: number): string => {
  // Ensure x is a valid index for emojiSet
  if (x >= 0 && x < emojiSet.length) {
    return emojiSet[x];
  }
  // Fallback emoji in case the index is out of bounds
  return "🎲"; // Example fallback emoji
};

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

const LotteryCard = ({ element ,session}: { element: ele ,session:any}) => {
  // Get the emoji based on imageNum, with fallback handling
  const emoji = getRandomEmoji(element.imageNum);

  return (
    <Link href={`protected/${session.user.telegramId}/${element.id}/${element.gameNumber.toString()}/${element.gamePrice.toString()}`}> 
      

    <Card className="bg-gradient-to-r from-ethLightBlue-700 to-ethLightBlue-900 text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 rounded-2xl">
      <CardHeader className="p-2 text-center">
        <CardTitle className="text-2xl font-bold">
          {`At ${format(new Date(element.endDate), "PPP, p")}`}
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
          <p className="text-xl font-semibold">{element.gameDescription}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 bg-opacity-50 bg-black rounded-b-2xl ">
        <p className="text-sm">Price: <span className="font-bold">{element.gamePrice}</span></p>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default LotteryCard;

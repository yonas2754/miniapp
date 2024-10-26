import React, { useMemo } from 'react';
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

// Utility function to get a random emoji from the expanded emojiSet
const getRandomEmoji = (x: number): string => emojiSet[x];

interface LotteryCardProps {
  date: string;
  amount: number;
  price: number;
  initialEmoji: number;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ date, amount, price, initialEmoji }) => {
  // Memoize the random emoji selection to ensure it doesn't change
  const emoji = getRandomEmoji(initialEmoji);

  return (
    <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <CardHeader className="p-6 text-center">
        <CardTitle className="text-2xl font-bold">{`Day at ${date}`}</CardTitle>
        <CardDescription className="mt-2">
          <div className="flex justify-center my-4 text-6xl animate-bounce">
            {emoji}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Image src="/image/lottery_winning3.png" alt="Dollar Icon" width={32} height={32} />
          <p className="text-xl font-semibold">{amount}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 bg-opacity-50 bg-black rounded-b-lg">
        <p className="text-sm">Price: <span className="font-bold">{price}</span></p>
      </CardFooter>
    </Card>
  );
};

export default LotteryCard;

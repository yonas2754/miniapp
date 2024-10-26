import React, { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; 
import Image from 'next/image';
import { emojiSet } from '@/lib/Constants';

// Utility function to get a random emoji from the expanded emojiSet
const getRandomEmoji = (x:number): string => emojiSet[x];

interface LotteryCardProps {
  date: string;
  amount: number;
  price: number;
  initialEmoji: number;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ date, amount, price, initialEmoji }) => {
  // Memoize the random emoji selection to ensure it doesn't change
  const emoji = getRandomEmoji(initialEmoji)

  return (
    <Card className="bg-ethLightBlue-950 text-white">
      <CardHeader>
        <CardTitle>Day at {date}</CardTitle>
        <CardDescription>
          {/* Display a large, constant random emoji */}
          <div className="flex justify-center my-4 text-6xl">
            {emoji}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-center space-x-1">
          <Image src="/image/lottery_winning3.png" alt="Dollar Icon" width={24} height={24} />
          <p className="text-lg">{amount}</p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm">Price: {price}</p>
      </CardFooter>
    </Card>
  );
};

export default LotteryCard;

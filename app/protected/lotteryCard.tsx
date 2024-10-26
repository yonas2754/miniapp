import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // ShadCN UI components
import Image from 'next/image';

// Expanded emoji set
const emojiSet = [
  '🎉', '🎁', '🎲', '🎯', '🎮', '🎵', '🎶', '🎤', '🎧', '🎸', '🎷', '🎹',
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐥', '🦄', '🐍',
  '🍏', '🍎', '🍌', '🍒', '🍓', '🍍', '🍕', '🍔', '🍟', '🍩', '🍪', '🍫', '🍿', '🍰', '🎂', '🍻', '🍷', '🍸',
  '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎳', '⛳', '🏒', '🏓', '🏸', '🥅', '🎱', '🎯', '🎣', '🤿', '🛹',
  '🌞', '🌝', '🌟', '🌈', '☁️', '⚡', '🔥', '❄️', '🌊', '🌪️', '🌻', '🌵', '🌴', '🌳', '🌿', '🍀', '🍁',
  '💡', '🔦', '🕯️', '🔧', '🔨', '⚙️', '🧰', '🛠️', '🔑', '📱', '💻', '🖥️', '🖱️', '📸', '🎥', '💰', '💸'
];

// Utility function to get random emoji
const getRandomEmoji = (): string => emojiSet[Math.floor(Math.random() * emojiSet.length)];

// Define the props type
interface LotteryCardProps {
  date: string;
 
  amount: number;
  price: number;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ date, amount, price }) => {
  // Get a random emoji
  const randomEmoji = getRandomEmoji();

  return (
    <Card className="bg-ethLightBlue-950 text-white">
      <CardHeader>
        <CardTitle>Day at {date}</CardTitle>
        <CardDescription>
          {/* Render a single large random emoji */}
          <div className="flex justify-center my-4 text-6xl">
            {randomEmoji}
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

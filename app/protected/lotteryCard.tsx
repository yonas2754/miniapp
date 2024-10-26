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

// Define shape types
type ShapeType = 'circle' | 'grid' | 'triangle' | 'hexagon' | 'star' | 'rectangle' | 'diamond' | 'pentagon' | 'octagon' | 'cross';

// Array of shape types for random selection
const shapeTypes: ShapeType[] = ['circle', 'grid', 'triangle', 'hexagon', 'star', 'rectangle', 'diamond', 'pentagon', 'octagon', 'cross'];

// Utility function to get random emoji
const getRandomEmoji = (): string => emojiSet[Math.floor(Math.random() * emojiSet.length)];

// Utility function to get a random shape type
const getRandomShapeType = (): ShapeType => shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

// Generate random emoji shape
const generateEmojiShape = (type: ShapeType) => {
  switch (type) {
    case 'circle':
      return (
        <div className="flex justify-center items-center rounded-full w-24 h-24 border-2 border-gray-300 p-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-2xl mx-1">{getRandomEmoji()}</span>
          ))}
        </div>
      );
    case 'grid':
      return (
        <div className="grid grid-cols-3 gap-2 w-24 h-24">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="text-2xl">{getRandomEmoji()}</span>
          ))}
        </div>
      );
    case 'triangle':
      return (
        <div className="flex flex-col items-center">
          {[1, 2, 3].map((rowCount, rowIndex) => (
            <div key={rowIndex} className="flex justify-center">
              {Array.from({ length: rowCount }).map((_, i) => (
                <span key={i} className="text-2xl mx-1">{getRandomEmoji()}</span>
              ))}
            </div>
          ))}
        </div>
      );
    case 'hexagon':
    case 'star':
    case 'rectangle':
    case 'diamond':
    case 'pentagon':
    case 'octagon':
    case 'cross':
      return (
        <div className="flex flex-col items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-2xl mx-1">{getRandomEmoji()}</span>
          ))}
        </div>
      );
    default:
      return null;
  }
};

// Define the props type
interface LotteryCardProps {
  date: string;
  imageSrc: string;
  amount: number;
  price: number;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ date, imageSrc, amount, price }) => {
  // Select a random shape type on each render
  const shapeType = getRandomShapeType();

  return (
    <Card className="bg-ethLightBlue-950 text-white">
      <CardHeader>
        <CardTitle>Day at {date}</CardTitle>
        <CardDescription>
          {/* Render random emoji shape */}
          <div className="flex justify-center my-4">
            {generateEmojiShape(shapeType)}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-center space-x-1">
          <Image src={imageSrc} alt="Dollar Icon" width={24} height={24} />
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

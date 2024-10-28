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

function Mytickate({profile}:any) {
    const emoji = getRandomEmoji(profile.imageNum);
  return (
    <div>
      <h1>{emoji}</h1>

    </div>
  )
}

export default Mytickate

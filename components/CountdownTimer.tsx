'use client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import { Backend_URL } from '@/lib/Constants';

// Replace with your backend endpoint for server time, if necessary
const getServerTime = async () => {
  const response = await axios.get(Backend_URL+'/time/current'); // Example endpoint
  return new Date(response.data.currentTime).getTime(); // Get server timestamp in milliseconds
};

const calculateTimeLeft = (targetTime: number, serverTime: number) => {
  const difference = targetTime - serverTime;
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

interface CountdownTimerProps {
  targetDate: string; // ISO string of the target date, e.g., '2024-12-31T23:59:59Z'
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const targetTime = new Date(targetDate).getTime(); // Convert target date to milliseconds
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime, Date.now()));
  const queryClient = useQueryClient();
  const { data: serverTime, status } = useQuery({
    queryKey: ['serverTime'],
    queryFn: getServerTime,
    refetchInterval: 1000,
    staleTime: 1000,
  });

  useEffect(() => {
    const checkCountdown = async () => {
      if (status === 'success' && serverTime !== undefined) {
        const updatedTimeLeft = calculateTimeLeft(targetTime, serverTime);
        setTimeLeft(updatedTimeLeft);

        // Check if the countdown has reached zero
        if (
          updatedTimeLeft.days === 0 &&
          updatedTimeLeft.hours === 0 &&
          updatedTimeLeft.minutes === 0 &&
          updatedTimeLeft.seconds === 0
        ) {
          // Invalidate the query when countdown reaches zero
          await queryClient.invalidateQueries({ queryKey: ['activeGames'] });
          
        }
      }
    };

    checkCountdown();
  }, [serverTime, status, targetTime, queryClient]);

  return (
    <Card className="max-w-sm mx-auto my-4 flex items-center justify-center bg-ethLightBlue-500">
      
      <CardContent>
        <div className=" text-sm font-bold text-center text-ethYellow-500">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;

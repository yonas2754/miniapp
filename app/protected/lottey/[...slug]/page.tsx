'use client';

import BackButtonDemo from '@/components/backButton';
import Coins from '@/components/icons/Coins';
import Friends from '@/components/icons/Friends';
import Mine from '@/components/icons/Mine';
import {useShowPopup } from '@vkruglikov/react-telegram-web-app';
import React, { useEffect, useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';
import { Backend_URL } from '@/lib/Constants';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { number } from 'zod';
import CountdownTimer from '@/components/CountdownTimer2';
import { Divide } from 'lucide-react';

const Page = ({ params }: { params: { slug: string[] } }) => {
  // Destructure chatId and profileId from params.slug
  const [chatId, profileId, length, price ,endDate] = params.slug;

const [timeIsUp ,setTimeIsUp] = useState(false)


  const queryClient = useQueryClient();
  const output: any = queryClient.getQueryData(['username', chatId]);

  const balance = output.balance.balance;
  const showPopup = useShowPopup();
  const mutation = useMutation({
    mutationFn: (number: number) => {
      const headers = {
        'Content-Type': 'application/json',
      };

      return axios.post(Backend_URL + `/tackets`, { chatId, profileId, number }, { headers });
    },
    onSuccess: async () => {
      showPopup({
        message: 'Ticket purchased successfully!',
      });
      await queryClient.invalidateQueries({ queryKey: ['userGames'] });
      await queryClient.invalidateQueries({ queryKey: ['unbuying', profileId] });
      await queryClient.invalidateQueries({ queryKey: ['username', chatId] });
    },
  });

  const handleContinueClick = (ticketNumber: number): void => {
    if (balance < Number(price)) {
      showPopup({
        message: 'Insufficient balance. Please recharge your balance.',
      });

   

      
    
    } else { 
      mutation.mutate(ticketNumber);
     // Reset error message on successful action
    }
  };


  const fetchList = async () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    // Unbought ticket
    const response = await fetch(Backend_URL + `/tackets/${profileId}`, { method: 'GET', headers });
    const data = await response.json();
    const array1 = Array.from({ length: Number(length) }, (_, i) => i + 1);
    const numbersToRemove = await data.ticket.map((ticket: { number: any }) => ticket.number);
    const filteredArray = array1.filter((num) => !numbersToRemove.includes(num));

    return filteredArray;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['unbuying', profileId],
    queryFn: () => fetchList(),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="bg-ethBlack-950 w-full h-full min-h-screen flex flex-col">
      <BackButtonDemo />
    <div className="container mx-auto p-1">
       
        <CountdownTimer targetDate={decodeURIComponent(endDate)} setTimeIsUp={setTimeIsUp} />
      </div>
      {!timeIsUp?(<div>

      <div className="bg-ethBlack-950 mb-60 pt-8 pb-13 px-4 grid grid-cols-4 gap-1">
        {/* Map over available tickets */}
        {data.map((ticketNumber) => (
          <div className="px-1 mt-4 flex justify-center" key={ticketNumber}>
            <div className="p-1 rounded-full circle-outer">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="w-full h-full rounded-full circle-inner">
                    <p className="text-center font-bold text-lg text-ethYellow-600">{ticketNumber}</p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-ethDeepBlue-900 w-full grow mt-[50%] text-white border-t-8 border-ethYellow-600 shadow-2xl shadow-ethYellow-600 rounded-3xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Ticket Number <span className=' text-center font-extrabold  text-ethYellow-500 text-5xl'>{ticketNumber}</span> </AlertDialogTitle>
                    <AlertDialogDescription>
                   
                      Are you sure you want to proceed ?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-ethRed-400 rounded-lg">Cancel</AlertDialogCancel>
                    {/* Passing ticket number to the click handler */}
                    <AlertDialogAction className="bg-ethLightBlue-400 rounded-lg" onClick={() => handleContinueClick(ticketNumber)}>
                      Confirm 
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
      </div>):(
      <div>
        <div className='text-center text-ethRed-500 font-sans font-extrabold  m-12'>
          <h1>time is up please check other Mela </h1>
        </div>

        </div>)}
      <Footer />
    </div>
  );
};

export default Page;

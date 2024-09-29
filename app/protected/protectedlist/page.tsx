'use client'
import BackButtonDemo from '@/components/backButton';
import Coins from '@/components/icons/Coins';
import Friends from '@/components/icons/Friends';
import Mine from '@/components/icons/Mine';
import React, { useState } from 'react';

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

const Page: React.FC = () => {
  // TypeScript type annotation for the function
  const [tickets, setTickets] = useState<number[]>(Array.from({ length: 100 }, (_, i) => i + 1));

  const handleContinueClick = (ticketNumber: number): void => {

    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket !== ticketNumber));
  };

  return (
    <div className="bg-ethBlack-950 w-full h-full min-h-screen flex flex-col">
      <BackButtonDemo />
      <div className="bg-ethBlack-950 pt-8 pb-13 px-4 grid grid-cols-3 gap-1">
        {/* Map over 100 items, treating each as a lottery ticket */}
        {tickets.map((ticketNumber) =>  (
            <div className="px-4 mt-4 flex justify-center" key={ticketNumber}>
              <div className="p-4 rounded-full circle-outer">
                <div className="w-full h-full rounded-full circle-inner">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <p className="text-center font-bold text-lg text-ethYellow-600">
                        {ticketNumber}
                      </p>
                    </AlertDialogTrigger>
                    <AlertDialogContent className='bg-ethGray-200 text-black fixed bottom-0  border-t-4 border-ethLightBlue-600     shadow-2xl shadow-ethYellow-600 rounded-3xl'>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Mela Number #{ticketNumber}</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to proceed with Lottery Ticket #{ticketNumber}? Once confirmed, this action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        {/* Passing ticket number to the click handler */}
                        <AlertDialogAction className='bg-ethGreen-400' onClick={() => handleContinueClick(ticketNumber)}>
                          Confirm Mela #{ticketNumber}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs p-2">
        <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
          <p className="mt-1 text-lg font-extrabold text-ethYellow-600">Mela</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Mine className="w-8 h-8 mx-auto" />
          <p className="mt-1">Bank</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

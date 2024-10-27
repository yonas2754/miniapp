'use client'
import BackButtonDemo from '@/components/backButton';
import Coins from '@/components/icons/Coins';
import Friends from '@/components/icons/Friends';
import Mine from '@/components/icons/Mine';
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

 

const Page = ({ params }: { params: { slug: string[] } }) => {
  // Destructure chatId and profileId from params.slug
  const [chatId, profileId,length] = params.slug;

    const [startParam, setStartParam] = useState('')
  // TypeScript type annotation for the function
  //back





  const queryClient = useQueryClient()
  const mutation = useMutation({

    mutationFn: (number:number) => {
     
     
      const headers = {
     
        "Content-Type": "application/json",
      };

  return axios.post(Backend_URL+`/tackets`,{chatId,profileId,number}, { headers });

    },

   onSuccess: async () => {
      console.log("DONE");
  await  queryClient.invalidateQueries({ queryKey: ['unbuying',profileId] })
      
    
    },
   
  });





  const handleContinueClick = (ticketNumber: number): void => {


    mutation.mutate(ticketNumber);

  };
  
  useEffect(() => {
    const initWebApp = async () => {
      if (typeof window !== 'undefined') {
        const WebApp = (await import('@twa-dev/sdk')).default;
        setStartParam(WebApp.initDataUnsafe.start_param || '');
      }
    };

    initWebApp();
  }, [])









  const fetchList = async ( chatId: string ) => {
  
    
    const headers = {
      
        "Content-Type": "application/json",
      };
      //unbuyed ticket
      const response = await fetch(Backend_URL+`/tackets/${profileId}`, { method: "GET",headers});
      const data = await response.json();
      console.log(data)
      const array1= Array.from({ length: Number(length) }, (_, i) => i + 1);
      const numbersToRemove =await data.ticket.map((ticket: { number: any; }) => ticket.number);
      const filteredArray = array1.filter(num => !numbersToRemove.includes(num));
     

      return filteredArray;
      
    }

 const { isPending, isError, data, error } = useQuery({
   queryKey: ['unbuying',profileId],
   queryFn: () =>fetchList(chatId),
 })

 if (isPending) {
   return <span>Loading...</span>

 }

 if (isError) {
   return <span>Error: {error.message}</span>
 }






  return (
    <div className="bg-ethBlack-950 w-full h-full min-h-screen flex flex-col">
      <BackButtonDemo />
      <div className="bg-ethBlack-950 mb-36 pt-8 pb-13 px-4 grid grid-cols-3 gap-1">
        {/* Map over 100 items, treating each as a lottery ticket */}
        {data.map((ticketNumber) =>  (
            <div className="px-4 mt-4 flex justify-center" key={ticketNumber}>
              <div className="p-4 rounded-full circle-outer">
              
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                    <div className="w-full h-full rounded-full circle-inner">
                      <p className="text-center font-bold text-lg text-ethYellow-600">
                        {ticketNumber}
                      </p>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent className='bg-ethDeepBlue-900 w-full grow mt-[50%]  text-white border-t-8 border-ethYellow-600  shadow-2xl shadow-ethYellow-600 rounded-3xl'>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Mela Number #{ticketNumber}</AlertDialogTitle>
                        <AlertDialogDescription>
                          treferal {startParam}
                          Are you sure you want to proceed with Lottery Ticket #{ticketNumber}? Once confirmed, this action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel  className='bg-ethRed-400 rounded-lg'>Cancel</AlertDialogCancel>
                        {/* Passing ticket number to the click handler */}
                        <AlertDialogAction className='bg-ethGreen-400  rounded-lg' onClick={() => handleContinueClick(ticketNumber)}>
                          Confirm Mela #{ticketNumber}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
             
              </div>
            </div>
          )
        )}
      </div>
  
      <Footer/>
    </div>
  );
};

export default Page;

'use client';

import Footer from '@/components/footer';
import { Backend_URL } from '@/lib/Constants';
import { useState, useEffect } from 'react';
import { InputForm } from './registor';
import { useQuery } from '@tanstack/react-query';
import Settings from './icons/Settings';
import Image from 'next/image';
import Info from './icons/Info';
// Define the expected shape of the posts data
interface Post {
  user: any;
}

export default function Posts({chatId}:{chatId:string}) {

 

 




  const fetchList = async ( chatId: string ) => {
  
    
     const headers = {
       
         "Content-Type": "application/json",
       };
       const response = await fetch(Backend_URL+`/users/${chatId}`, { method: "GET",headers});
       const data = await response.json();
       console.log(data)
       return data;
       
     }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['username',chatId],
    queryFn: () =>fetchList(chatId),
  })

  if (isPending) {
    return <span>Loading...</span>

  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }


 
  if(!data.user){
    return (<div>
      <InputForm chatId={chatId}/>
    </div>)
  
  }
else{
  return (
    <div>
        
   




    <div className="px-4 z-10 pt-4">
        <div className="flex items-center justify-between space-x-4  my-1">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-lg bg-[#1d2025]"> 
            <Image src="/image/lottery_winning3.png" alt="Profile Pic" width={30} height={30} />
          </div>

   

         <ul>
      <li>{data.user.first_name}</li>
    </ul>
     
   {/*        <p className="text-sm">yonas (CEO)</p>  */}
        </div>


        <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
        <Image
      src="/image/lottery_winning1.png"
      width={32}
      height={32}
      alt="Picture"
    />
      
      <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
      <div className="flex-1 text-center">
        <p className="text-xs text-[#85827d] font-medium">wining price</p>
        <div className="flex items-center justify-center space-x-1">
        <Image
      src="/image/dollar-coin.png"
      width={18}
      height={18}
      alt="Picture"
    />
      
          <p className="text-sm">{data.balance.balance}</p>
          <Info size={20} className="text-[#43433b]" />
        </div>
      </div>
      <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
      <Settings className="text-white" />
    </div>
 


        </div>
        
      </div>




   
    </div>
  );
}
}
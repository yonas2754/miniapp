'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Posts from '@/components/userinfo'
import { Backend_URL } from '@/lib/Constants';

import LotteryCard from './lotteryCard';
import Footer from '@/components/footer';
import Mytickate from './mytickate';
import { useQuery } from '@tanstack/react-query';
import EndTicket from './endTicket';
import { json } from 'stream/consumers';

  



function Fatch({session}:any) {





    const fetchList = async () => {
  
    
        const headers = {
          
            "Content-Type": "application/json",
          };
          const response = await fetch(`http://128.140.9.82:3000/profiles/activeGames`, { method: "GET",headers});
          const data = await response.json();
          console.log(data)
          return data;
          
        }

        const fetchList2 = async () => {
  
    
            const headers = {
              
                "Content-Type": "application/json",
              };
              const response = await fetch(`${Backend_URL}/profiles/endedGames`, { method: "GET",headers});
              const data = await response.json();
              console.log(data)
              return data;
            }



            const fetchList3 = async () => {
  
    
                const headers = {
                  
                    "Content-Type": "application/json",
                  };
                  const response = await fetch(`${Backend_URL}/profiles/${session.user.telegramId}`, { method: "GET",headers});
                  const data = await response.json();
                  console.log(data)
                  return data;
                }
              
     const activeGames = useQuery({
       queryKey: ['activeGames'],
       queryFn: () =>fetchList(),
     })
   
     const endedGames = useQuery({
        queryKey: ['endedGames'],
        queryFn: () =>fetchList2(),
      })

      const userGames = useQuery({
        queryKey: ['userGames'],
        queryFn: () =>fetchList3(),
      })

     if (activeGames.isPending|| endedGames.isPending||userGames.isPending) {
       return <span>Loading...</span>
   
     }
   
     if (activeGames.isError) {
       return <span>Error: {Backend_URL}/profiles/activeGames 1{activeGames.error.message}</span>
     }
     if (endedGames.isError) {
        return <span>Error: 2 {endedGames.error.message}</span>
      }

      if (userGames.isError) {
        return <span>Error:3 {userGames.error.message}</span>
      }  
   

  return (
    <div>
    <div className='bg-ethBlack-600  flex '>
    <div className=' text-white w-full h-full min-h-screen font-bold flex flex-col max-w-xl mb-60'>
          <Posts chatId={session.user.telegramId} />
          <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
      <Tabs defaultValue="my" className="w-full grow">
  <TabsList  className="grid w-full grid-cols-3 bg-ethBlack-500 capitalize">
    <TabsTrigger value="my" >My Tacket </TabsTrigger>
    <TabsTrigger value="tacket">Mela Tacket</TabsTrigger>
    <TabsTrigger value="winner">Mela Winner</TabsTrigger>
  </TabsList>
  <TabsContent value="my" className="pt-4 grid grid-cols-2 gap-4">

    {activeGames.data?.map((element:any) => (
        <div key={element.id}>
            <LotteryCard element={element} session={session} />
    
    </div>))}
    </TabsContent>
  <TabsContent value="tacket"  className="pt-4 grid grid-cols-2 gap-4">
  {userGames.data?.profiles?.map((profile:any) => (
        <div key={profile.id}>
           
           <Mytickate profile={profile.profile} session={session}/>
    </div>))}

  </TabsContent>
  <TabsContent value="winner"  className="pt-4 grid grid-cols-2 gap-4">
  
    {endedGames.data?.map((profile:any) => (
        <div key={profile.id}>
          
           <EndTicket profile={profile}/> 
    </div>))}

  </TabsContent>
</Tabs>
</div>
    </div>
    </div>
    <Footer/>
    </div>

  )
}

export default Fatch

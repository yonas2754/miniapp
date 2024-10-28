'use client';
import BackButtonDemo from '@/components/backButton';
import { Backend_URL } from '@/lib/Constants';
import { useQuery } from '@tanstack/react-query';
import React from 'react'


const Page = ({ params }: { params: { slug: string[] } }) => {
    // Destructure chatId and profileId from params.slug
    const [chatId, profileId] = params.slug;
  

    const fetchList = async () => {
        const headers = {
          'Content-Type': 'application/json',
        };
        // Unbought ticket
        const response = await fetch(Backend_URL + `/tackets/both/${chatId}/${profileId}`, { method: 'GET', headers });
        const data = await response.json();
       
        return data;
      };
    
      const { isPending, isError, data, error } = useQuery({
        queryKey: ['both',chatId, profileId],
        queryFn: () => fetchList(),
      });
    
      if (isPending) {
        return <span>Loading...</span>;
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>;
      }
      
  return (
    <div>
         <div className="bg-ethBlack-950 w-full h-full min-h-screen flex flex-col">
      <BackButtonDemo />
    
      <div className="bg-ethBlack-950 mb-36 pt-8 pb-13 px-4 grid grid-cols-3 gap-1">

      {data?.map((ticket:any) => (
        <div key={ticket.id}>
           
        
 
         <div className="p-4 rounded-full circle-outer">
       <div className="w-full h-full rounded-full circle-inner">
                    <p className="text-center font-bold text-lg text-ethYellow-600">{ticket.number}</p>
                  </div>
                  </div>

                  </div>))}

                  </div>
                  </div>
    </div>
  )
}

export default Page

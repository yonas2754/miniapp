'use client';
import BackButtonDemo from '@/components/backButton';
import Spinner from '@/components/Spinner';
import WinnerCard from '@/components/WinnerCard';
import { Backend_URL } from '@/lib/Constants';
import { useQuery } from '@tanstack/react-query';
import React from 'react'


const Page = ({ params }: { params: { slug: string[] } }) => {
    // Destructure chatId and profileId from params.slug
    const [profileId] = params.slug;
  

    const fetchList = async () => {
        const headers = {
          'Content-Type': 'application/json',
        };
        // winner
        const response = await fetch(Backend_URL + `/profiles/winners/${profileId}`, { method: 'GET', headers });
        const data = await response.json();
       
        return data;
      };
    
      const { isPending, isError, data: winners, error } = useQuery({
        queryKey: ['winners', profileId],
        queryFn: () => fetchList(),
      });
    
      if (isPending) {
        return <Spinner />;
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>;
      }
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {winners.length === 0 ? (
      <p>No winners found for this profile.</p>
    ) : (
      winners.map((winner:any) => (
        <WinnerCard
          key={winner.ticket.id}
          ticketNumber={winner.ticket.number}
          username={winner.ticket.telegramUser?.username}
          chatId={winner.ticket.telegramUser.chatId}
          level={winner.level}
        />
      ))
    )}
  </div>
  )
}

export default Page

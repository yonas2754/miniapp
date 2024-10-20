'use client';

import Footer from '@/components/footer';
import { Backend_URL } from '@/lib/Constants';
import { useState, useEffect } from 'react';
import { InputForm } from './registor';
import { useQuery } from '@tanstack/react-query';

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
        
    <ul>
      <li>{data.user.first_name}</li>
    </ul>
   
    </div>
  );
}
}
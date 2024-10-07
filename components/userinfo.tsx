"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Define the fetchList function to call an API endpoint
const fetchList = async (chatID: string) => {

    const response = await fetch(`https://a29c-146-70-246-141.ngrok-free.app/users/7277258087`);
    
    // Parse the JSON response
    return await response.json();

};

function UserInfo({ chatID }: { chatID: string }) {
  // Use the useQuery hook to fetch the user data
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['userinfo', chatID],
    queryFn: () => fetchList(chatID),
    enabled: !!chatID, // Ensure the query only runs if chatID is not empty
  });

  // Handle loading, error, and display data states
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error?.message}</p>}
      {data && (
        <div>
       
          <p className=' text-sm'>{data.message}</p>
        
        </div>
      )}
    </div>
  );
}

export default UserInfo;

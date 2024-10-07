"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Define the fetchList function to call an API endpoint
const fetchList = async (chatID: string) => {
  try {
    const response = await fetch(`https://a29c-146-70-246-141.ngrok-free.app/users/${chatID}`);
    
    // Check if the response is okay
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    return await response.json();
  } catch (error) {
    // Handle errors
    console.error('Failed to fetch user data:', error);
    throw error;
  }
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

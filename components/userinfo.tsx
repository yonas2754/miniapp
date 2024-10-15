'use client';

import Footer from '@/components/footer';
import { Backend_URL } from '@/lib/Constants';
import { useState, useEffect } from 'react';

// Define the expected shape of the posts data
interface Post {
  user: any;
}

export default function Posts({chatId}:any) {
  const [posts, setPosts] = useState<Post>( {
    user: 'yonas'
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(Backend_URL +`/users/${chatId}`);
        
        const data = await res.json()
        console.log("*******************"+data)
        setPosts(data)
       
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading..</div>;
  if(!posts.user){
    return (<div>
      <h1>no</h1>
    </div>)
  
  }

  return (
    <div>
        
    <ul>
      <li>{posts.user}</li>
    </ul>
   
    </div>
  );
}

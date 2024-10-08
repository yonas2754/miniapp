'use client';

import Footer from '@/components/footer';
import { useState, useEffect } from 'react';

// Define the expected shape of the posts data
interface Post {
  message: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post>( {
    message: 'yonas'
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://d673-89-33-8-62.ngrok-free.app/users/7277258087', { cache: 'no-store' });
        const data: Post = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading..</div>;

  return (
    <div>
        
    <ul>
      <li>{posts.message}</li>
    </ul>
    <Footer/>
    </div>
  );
}

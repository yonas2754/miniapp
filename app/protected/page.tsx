import React from 'react'
import { getSession } from '@/utils/session';
import Fetch from './fetch';

 


async function page() {
    const session = await getSession();


    

  return (
  <>
  <Fetch session={session}/>
  </>
    
  )
}

export default page

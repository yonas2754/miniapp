import React from 'react';
import { getSession } from '@/utils/session';
import Fetch from './fetch';

async function Page() {
  const session = await getSession();

  return (
    <>
      {session?.user && (
        <Fetch session={session} />
      )}
    </>
  );
}

export default Page;

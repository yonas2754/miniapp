import React from 'react'
import { BackButton } from '@twa-dev/sdk/react';

function Page() {
  return (
    <div className='h-screen w-full bg-red-400'>
      <BackButton onClick={() => window.history.back()} />
    </div>
  )
}

export default Page

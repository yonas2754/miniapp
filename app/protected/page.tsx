import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Posts from '@/components/userinfo'

function page() {
  return (
    <div className='bg-ethBlack-600 text-white w-full h-full min-h-screen font-bold flex flex-col max-w-xl'>
          <Posts chatId="7277258087" />
          <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
      <Tabs defaultValue="my" className="w-full grow">
  <TabsList  className="grid w-full grid-cols-3 bg-ethBlack-500 capitalize">
    <TabsTrigger value="my" >My Tacket </TabsTrigger>
    <TabsTrigger value="tacket">Mela Tacket</TabsTrigger>
    <TabsTrigger value="winner">Mela Winner</TabsTrigger>
  </TabsList>
  <TabsContent value="my">
    Make changes to your account here.
    </TabsContent>
  <TabsContent value="tacket">
    Change your password here.

  </TabsContent>
  <TabsContent value="winner">
    Change your password here.

  </TabsContent>
</Tabs>
</div>
    </div>
  )
}

export default page

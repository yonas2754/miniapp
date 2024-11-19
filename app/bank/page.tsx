import Footer from '@/components/footer'
import ProfileForm from '@/components/profileForm'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function page() {
  return (
    <div>


<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="create">create</TabsTrigger>
    <TabsTrigger value="approve">approve</TabsTrigger>
  </TabsList>
  <TabsContent value="create">
  <div className=' bg-ethLightBlue-950 w-full flex justify-center items-center  h-full '>
      <ProfileForm/>
    </div>
    </TabsContent>
  <TabsContent value="approve">
    Change your approve here.</TabsContent>
</Tabs>



  
    <Footer/></div>
  )
}

export default page

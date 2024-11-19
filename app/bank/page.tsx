import Footer from '@/components/footer'
import ProfileForm from '@/components/profileForm'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function page() {
  return (
    <div  className=' bg-ethDeepBlue-800 flex justify-center items-center m-1 '>


<Tabs defaultValue="create" className="w-full">
  <TabsList  >
    <TabsTrigger value="create" className=' text-white font-extrabold'>Create</TabsTrigger>
    <TabsTrigger value="approve" className=' text-white font-extrabold'>Approve</TabsTrigger>
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

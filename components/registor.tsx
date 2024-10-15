"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query";
import { Backend_URL } from "@/lib/Constants";

const FormSchema = z.object({

  username: z.string().min(2, {
    message: "User Name must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Employee  must be at least 2 characters.",
  }),



})

export function InputForm({chatId}:{chatId:string}) {

  
  
    const mutation = useMutation({
        mutationFn: async (data: {
            chatId: string;
            username: string;
            phone: string;
            
          }) => {
            // Simulate a network request


            console.log(data)

            const response =   await fetch(Backend_URL + `/users`, {
                method: "POST",
                
                body: JSON.stringify(data ) 
              });
              return response.json();

          },
       
      })
    

  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
    
        username:"",
        phone:"",
       

    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
 
   
    const {  username,phone} = data;

console.log("data"+data)
    mutation.mutate({chatId,username,phone});
        

   
  
  }

  return (
     <div className=" fixed top-0  left-0 w-full h-screen  z-40 bg-ethBlack-600  flex  justify-center items-center">
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-1 flex-col min-w-2/3  w-full space-y-6">
      {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
             
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input placeholder="User Name" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>

            
          )}
        />


<FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>

            
          )}
        />















       
        <Button className="bg-[#BCDD8D] hover:bg-[#567A24] flex"    type="submit">

        {mutation.isPending && (
            <div className=" animate-spin">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28821c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
    </div>
      )}

{mutation.error && (
        <>error</>
      )}
            Submit</Button>
      </form>
    </Form>
    </div>
  )
}

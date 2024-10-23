"use client";
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Backend_URL } from "@/lib/Constants";

const FormSchema = z.object({
  first_name: z.string().min(2, {
    message: "User Name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "User Name must be at least 2 characters.",
  }),

});

export function InputForm({ chatId }: { chatId: string }) {
  const queryClient = useQueryClient()
  const mutation = useMutation({

    mutationFn: (newTodo: Object) => {
     
     
      const headers = {
     
        "Content-Type": "application/json",
      };

      return axios.post(Backend_URL+`/users`,{chatId,...newTodo}, { headers });
    },

   onSuccess: async () => {
      console.log("DONE");
      queryClient.invalidateQueries({ queryKey: ['username',chatId] })
      form.reset(); // Reset the form after successful submission
    },
   
  });




  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name:""

    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
   
    console.log("data" + data);
    mutation.mutate(data);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen  bg-ethBlack-600 flex justify-center items-center z-50">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-1 flex-col min-w-2/3 w-full space-y-6"
        >
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />



<FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-[#BCDD8D] hover:bg-[#567A24] flex"
            type="submit"
          >
            {mutation.isPending && (
              <div className="animate-spin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28821c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-loader-circle"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </div>
            )}
            {mutation.error &&( <div>error</div>)}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
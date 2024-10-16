"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Backend_URL } from "@/lib/Constants";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "User Name must be at least 2 characters.",
  }),
});

export function InputForm({ chatId }: { chatId: string }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const { username } = data;
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${Backend_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId, username }), // Ensure the payload is formatted correctly
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to get more info from the response
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
            errorData
          )}`
        );
      }

      const result = await response.json();
      console.log(result); // Handle success (e.g., show a success message or clear the form)
    } catch (error: any) {
      // Log the full error for debugging
      console.error("Error submitting form:", error);
      setSubmitError(error.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-40 bg-ethBlack-600 flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-1 flex-col min-w-2/3 w-full space-y-6"
        >
          {submitError && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {submitError}
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
          <Button
            className="bg-[#BCDD8D] hover:bg-[#567A24] flex"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && (
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
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

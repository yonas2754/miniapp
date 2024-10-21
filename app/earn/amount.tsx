"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { Backend_URL } from "@/lib/Constants"

const FormSchema = z.object({
  amount: z.number({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number",
  }).gte(10, "Amount must be greater than or equal to 10"),
})

export function AmountForm({chatId}:{chatId:string}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 100,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Submit the form data, handle the amount logic, and potentially call NestJS API here
    console.log(data)

    try {
        // Add the phone number to the payment data
  
        // Send the payment data to your NestJS backend
        const response = await fetch(Backend_URL+`/users/amount`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({chatId,...data}),
        });
  
        const result = await response.json();
  
        // Redirect the user to the Chapa payment page if the checkout URL is returned
        if (result.data && result.data.checkout_url) {
          window.location.href = result.data.checkout_url;
        } else {
          console.error('Failed to initialize payment:', result);
        }
      } catch (error) {
        console.error('Error initializing payment:', error);
      }


  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
              <Input
  type="number"
  placeholder="Enter amount"
  {...field}
  onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : '')}
/>

              </FormControl>
              <FormDescription>
                The amount must be greater than or equal to 10.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

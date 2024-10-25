"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Select } from "@/components/ui/select"; // Import Select UI component
import { Backend_URL } from "@/lib/Constants";
import { useMutation } from "@tanstack/react-query";
import { Half1Icon } from "@radix-ui/react-icons";

// Define the schema for the withdraw form using Zod
const FormSchema = z.object({
  accountNumber: z.string().min(3, "Account number must be at least 5 digits"),
  confirmAccountNumber: z
    .string()
    .min(3, "Confirmation account number must be at least 3 digits"),
  bankName: z.string().min(1, "Bank name is required"),
}).refine((data) => data.accountNumber === data.confirmAccountNumber, {
  message: "Account numbers must match",
  path: ["confirmAccountNumber"],
});

// Mock list of banks (You can replace this with your dynamic bank list)
const bankList = [
  { value: "Tele Birr", label: "Tele Birr" },
  { value: "Commercial Bank of Ethiopia", label: "Commercial Bank of Ethiopia" },
  { value: "Awash Bank", label: "Awash Bank" },
  { value: "Dashen Bank", label: "Dashen Bank" },
  { value: "Bank of Abyssinia", label: "Bank of Abyssinia" },
  { value: "Nib International Bank", label: "Nib International Bank" },
];

export function WithdrawForm({ chatId }: { chatId: string }) {
  // Initialize the form using React Hook Form and Zod Resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      accountNumber: "",
      confirmAccountNumber: "",
      bankName: "",
    },
  });

  // Define the mutation function to send data to the backend
  const mutation = useMutation({
    mutationFn: async (data: Object) => {
      const response = await fetch(`${Backend_URL}/users/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId, ...data }),
      });

      const result = await response.json();
      return result;
    },
    onSuccess: (result) => {
      if (result.data && result.data.success) {
        console.log("Withdrawal successful:", result);
        // Handle success (e.g., redirect or display success message)
      } else {
        console.error("Failed to process withdrawal:", result);
      }
    },
    onError: (error) => {
      console.error("Error processing withdrawal:", error);
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form data:", data);
    mutation.mutate(data);
  }

  return (
    <div>
    {mutation.data?.massage && (<h1>{mutation.data.massage}</h1>)}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Account Number Field */}
        <FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Number/Phone</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your account number"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your account number (at least 10 digits).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Account Number Field */}
        <FormField
          control={form.control}
          name="confirmAccountNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Account Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Confirm your account number"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Confirm your account number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bank Name Dropdown Field */}
        <FormField
          control={form.control}
          name="bankName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="border rounded-md p-2 w-full"
                >
                  <option value="" disabled>
                    Select your bank
                  </option>
                  {bankList.map((bank) => (
                    <option key={bank.value} value={bank.value}>
                      {bank.label}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormDescription>
                Please select your bank from the list.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit Withdrawal</Button>
      </form>
    </Form>
    </div>
  );
}

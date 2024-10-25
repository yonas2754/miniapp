"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Backend_URL } from "@/lib/Constants";
import { useMutation } from "@tanstack/react-query";

// Zod schema for the withdraw form
const FormSchema = z.object({
  amount: z.number().gte(0, "Amount must be greater than or equal to 0"),
  accountNumber: z.string().min(5, "Account number must be at least 5 digits"),
  confirmAccountNumber: z
    .string()
    .min(5, "Confirmation account number must be at least 5 digits"),
  bankName: z.string().min(1, "Bank name is required"),
}).refine((data) => data.accountNumber === data.confirmAccountNumber, {
  message: "Account numbers must match",
  path: ["confirmAccountNumber"],
});

// Bank list (can be dynamic if needed)
const bankList = [
  { value: "Tele Birr", label: "Tele Birr" },
  { value: "Commercial Bank of Ethiopia", label: "Commercial Bank of Ethiopia" },
  { value: "Awash Bank", label: "Awash Bank" },
  { value: "Dashen Bank", label: "Dashen Bank" },
  { value: "Bank of Abyssinia", label: "Bank of Abyssinia" },
  { value: "Nib International Bank", label: "Nib International Bank" },
];

export function WithdrawForm({ chatId }: { chatId: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
      accountNumber: "",
      confirmAccountNumber: "",
      bankName: "",
    },
  });

  // Mutation for handling the form submission
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof FormSchema>) => {
      const response = await fetch(`${Backend_URL}/users/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId, ...data }),
      });
      return response.json();
    },
    onSuccess: (result) => {
      if (result.success) {
        console.log("Withdrawal successful:", result);
      } else {
        console.error("Failed to process withdrawal:", result);
      }
    },
    onError: (error) => {
      console.error("Error processing withdrawal:", error);
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      {mutation.data?.message && (
        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
          {mutation.data.message}
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Amount Field */}
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
                    className="input input-bordered w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    className="input input-bordered w-full"
                  />
                </FormControl>
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
                    className="input input-bordered w-full"
                  />
                </FormControl>
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
                    className="border border-gray-300 rounded-md p-2 w-full"
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
          <Button type="submit" className="w-full bg-blue-600 text-white">
            Submit Withdrawal
          </Button>
        </form>
      </Form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

// Define form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  accountNo: z.number({
    required_error: "Account Number is required",
    invalid_type_error: "Account Number must be a number",
  }),
});

export default function Page() {
  const banks = ["Bank of America", "Chase Bank", "Wells Fargo", "Citibank", "HSBC"];
  
  // State to track the submission status of each bank form
  const [filledBanks, setFilledBanks] = useState<Record<string, boolean>>({});

  // Handler to update bank status after form submission
  const handleFormFilled = (bankName: string) => {
    setFilledBanks((prev) => ({ ...prev, [bankName]: true }));
  };

  // Handler to reset the form status if the back button is clicked
  const handleFormReset = (bankName: string) => {
    setFilledBanks((prev) => ({ ...prev, [bankName]: false }));
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      {/* Loop through each bank and generate UI elements */}
      {banks.map((bank) => (
     
        <BankForm
          key={bank}
          bankName={bank}
          isFilled={filledBanks[bank] || false}
          onFormFilled={() => handleFormFilled(bank)}
          onFormReset={() => handleFormReset(bank)}
        />
        
      ))}
    </div>
  );
}

// Reusable component for each bank's form
function BankForm({
  bankName,
  isFilled,
  onFormFilled,
  onFormReset,
}: {
  bankName: string;
  isFilled: boolean;
  onFormFilled: () => void;
  onFormReset: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      accountNo: 0,
    },
  });

  // Submit handler for each bank form
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(`Bank: ${bankName}, Values:`, values);
    onFormFilled(); // Mark form as filled
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* Button shows a checkmark if the form is filled */}
        <Button 
    className={`w-full justify-between ${isFilled ? "bg-green-500  text-white" : "border-gray-400 bg-gray-300"}mx-auto`}
  >
    {bankName}
    {isFilled && <span className="ml-2 text-lg">✔️</span>}
  </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Fill Your Name and Account Number for {bankName}</AlertDialogTitle>
          <AlertDialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-ethGray-200">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormDescription>This is your public display name.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="accountNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Account Number" {...field} />
                      </FormControl>
                      <FormDescription>This is your account display number.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                   <AlertDialogAction asChild>
                <Button type="submit">Submit</Button>
                </AlertDialogAction>
              </form>
            </Form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* When Cancel is clicked, reset the form status for this bank */}
       {/*    <AlertDialogCancel onClick={onFormReset}>Back</AlertDialogCancel> */}
       <AlertDialogCancel >Back</AlertDialogCancel> 
       
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

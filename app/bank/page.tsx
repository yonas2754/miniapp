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
import Footer from "@/components/footer";

// Define form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  accountNo: z.string(),
});

export default function Page() {
  const banks = ["Bank of America", "Chase Bank", "Wells Fargo", "Citibank", "HSBC"];

  // State to track which bank form is currently filled
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

  // Handler to update the currently selected bank after form submission
  const handleFormFilled = (bankName: string) => {
    setSelectedBank(bankName);
  };

  return (
    <div> 
    <div className="w-full h-screen flex flex-col justify-center items-start mt-4 gap-4">
      {/* Loop through each bank and generate UI elements */}
      {banks.map((bank) => (
        <BankForm
          key={bank}
          bankName={bank}
          isSelected={selectedBank === bank}
          onFormFilled={() => handleFormFilled(bank)}
        />
      ))}
    </div>
    <Footer/>
    </div>
  );
}

// Reusable component for each bank's form
function BankForm({
  bankName,
  isSelected,
  onFormFilled,
}: {
  bankName: string;
  isSelected: boolean;
  onFormFilled: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      accountNo: "",
    },
  });

  // Submit handler for each bank form
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(`Bank: ${bankName}, Values:`, values);
    onFormFilled(); // Mark form as filled for this bank
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* Button shows a checkmark if the form is selected */}
        <Button
          className={`w-full justify-between mx-auto ${
            isSelected ? "bg-green-500 text-white" : "border-gray-400 bg-gray-300"
          }`}
        >
          {bankName}
          {isSelected && <span className="ml-2 text-lg">✔️</span>}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-ethGray-200  fixed top-4 ">
        <AlertDialogHeader>
          <AlertDialogTitle>Fill Your Name and Account Number for {bankName}</AlertDialogTitle>
          <AlertDialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button type="submit" className="bg-ethGreen-300">
                  Submit
                </Button>
              </form>
            </Form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

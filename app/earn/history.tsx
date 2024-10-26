"use client"; // Marks this component for client-side rendering

import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Backend_URL } from '@/lib/Constants';
 // Add a Spinner component from Shadcn UI



interface HistoryProps {
  chatId: string;
}

function History({ chatId }: HistoryProps) {
    const queryClient = useQueryClient()
  // TanStack Query for fetching data
 // const data:any = queryClient.getQueryData(['username',chatId])
 const fetchList = async ( chatId: string ) => {
  
    
    const headers = {
      
        "Content-Type": "application/json",
      };
      const response = await fetch(Backend_URL+`/users/${chatId}`, { method: "GET",headers});
      const data = await response.json();
      console.log(data)
      return data;
      
    }

 const { isPending, isError, data, error } = useQuery({
   queryKey: ['userhistory',chatId],
   queryFn: () =>fetchList(chatId),
 })

 if (isPending) {
   return <span>Loading...</span>

 }

 if (isError) {
   return <span>Error: {error.message}</span>
 }



 
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Account Number</TableHead>
          <TableHead>Bank Name</TableHead>
          <TableHead className="w-[100px]">Balance</TableHead>
          <TableHead>Available</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.watingBalance?.map((item: { accountNumber: string, bankName: string, balance: number,  avelible: boolean }) => (
          <TableRow key={item.accountNumber}>
            <TableCell className="font-medium">{item.accountNumber}</TableCell>
            <TableCell>{item.bankName}</TableCell>
            <TableCell>{item.balance}</TableCell>
            <TableCell>{item.avelible ? "Padding" : "Paid"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default History;

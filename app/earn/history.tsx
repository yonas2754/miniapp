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
  const data:any = queryClient.getQueryData(['username',chatId])
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
        {data?.watingBalance?.map((item: { accountNumber: string, bankName: string, balance: number, available: boolean }) => (
          <TableRow key={item.accountNumber}>
            <TableCell className="font-medium">{item.accountNumber}</TableCell>
            <TableCell>{item.bankName}</TableCell>
            <TableCell>{item.balance}</TableCell>
            <TableCell>{item.available ? "Padding" : "Paid"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default History;

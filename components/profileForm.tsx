"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // Include default styles for the date picker
import { cn } from "@/lib/utils"; // Assuming you have a utility for className merging

// Define the schema for validation
const profileSchema = z.object({
  gameType: z.string().min(1, "Game type is required"),
  imageNum: z.number().min(0, "Image number must be a positive integer"),
  startDate: z.date(),
  endDate: z.date().refine((date) => date > new Date(), {
    message: "End date must be in the future",
  }),
  gameNumber: z.number().min(1, "Game number must be at least 1"),
  gamePrice: z.number().min(0, "Game price must be a positive number"),
  gameDescription: z.string().optional(),
});

type ProfileFormInputs = z.infer<typeof profileSchema>;

const ProfileForm: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProfileFormInputs>({
    resolver: zodResolver(profileSchema),
  });

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const onSubmit = async (data: ProfileFormInputs) => {
    try {
      // Set the selected dates into the form data
      const formData = { ...data, startDate, endDate };

      const response = await fetch('/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create profile');
      }

      // Handle success (e.g., redirect, show message)
      console.log('Profile created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-ethBlack-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white">Create Lottery Game Profile</h2>

      <div>
        <Label htmlFor="gameType" className="text-lg">Game Type</Label>
        <Input id="gameType" placeholder="Enter game type" {...register("gameType")}  />
        
        {errors.gameType && <p className="text-red-500 mt-1">{errors.gameType.message}</p>}
      </div>

      <div>
        <Label htmlFor="imageNum" className="text-lg">Image Number</Label>
        <Input type="number" id="imageNum" placeholder="Enter image number" {...register("imageNum")} />
        {errors.imageNum && <p className="text-red-500 mt-1">{errors.imageNum.message}</p>}
      </div>

      <div>
        <Label className="text-lg">Start Date</Label>
        <DayPicker 
          mode="single"
          selected={startDate}
          onSelect={setStartDate}
          footer={startDate && <p className="mt-1 text-white">Selected: {startDate.toLocaleDateString()}</p>}
          className="rounded-lg border-2 border-ethYellow-500" // Custom styles
        />
        {errors.startDate && <p className="text-red-500 mt-1">{errors.startDate.message}</p>}
      </div>

      <div>
        <Label className="text-lg">End Date</Label>
        <DayPicker 
          mode="single"
          selected={endDate}
          onSelect={setEndDate}
          footer={endDate && <p className="mt-1 text-white">Selected: {endDate.toLocaleDateString()}</p>}
          className="rounded-lg border-2 border-ethYellow-500" // Custom styles
        />
        {errors.endDate && <p className="text-red-500 mt-1">{errors.endDate.message}</p>}
      </div>

      <div>
        <Label htmlFor="gameNumber" className="text-lg">Game Number</Label>
        <Input type="number" id="gameNumber" placeholder="Enter game number" {...register("gameNumber")} />
        {errors.gameNumber && <p className="text-red-500 mt-1">{errors.gameNumber.message}</p>}
      </div>

      <div>
        <Label htmlFor="gamePrice" className="text-lg">Game Price</Label>
        <Input type="number" id="gamePrice" placeholder="Enter game price" {...register("gamePrice")} />
        {errors.gamePrice && <p className="text-red-500 mt-1">{errors.gamePrice.message}</p>}
      </div>

      <div>
        <Label htmlFor="gameDescription" className="text-lg">Game Description</Label>
        <Textarea id="gameDescription" placeholder="Enter a brief description" {...register("gameDescription")} />
        {errors.gameDescription && <p className="text-red-500 mt-1">{errors.gameDescription.message}</p>}
      </div>

      <Button type="submit" className="bg-ethYellow-500 hover:bg-ethYellow-400 transition duration-200">Create Profile</Button>
    </form>
  );
};

export default ProfileForm;

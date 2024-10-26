import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"



const profileSchema = z.object({
  gameType: z.string().min(1, "Game type is required"),
  imageNum: z.number().min(0, "Image number must be a positive integer"),
  startDate: z.date().refine((date) => date >= new Date(), {
    message: "Start date must be today or in the future",
  }),
  endDate: z.date().refine((date) => date > new Date(), {
    message: "End date must be in the future",
  }),
  gameNumber: z.number().min(1, "Game number must be at least 1"),
  gamePrice: z.number().min(0, "Game price must be a positive number"),
  gameDescription: z.string().optional(),
});

type ProfileFormInputs = z.infer<typeof profileSchema>;

const ProfileForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormInputs>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data: ProfileFormInputs) => {
    try {
      const response = await fetch('/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="gameType">Game Type</Label>
        <Input id="gameType" {...register("gameType")} />
        {errors.gameType && <p className="text-red-500">{errors.gameType.message}</p>}
      </div>
      <div>
        <Label htmlFor="imageNum">Image Number</Label>
        <Input type="number" id="imageNum" {...register("imageNum")} />
        {errors.imageNum && <p className="text-red-500">{errors.imageNum.message}</p>}
      </div>
      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input type="date" id="startDate" {...register("startDate")} />
        {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
      </div>
      <div>
        <Label htmlFor="endDate">End Date</Label>
        <Input type="date" id="endDate" {...register("endDate")} />
        {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
      </div>
      <div>
        <Label htmlFor="gameNumber">Game Number</Label>
        <Input type="number" id="gameNumber" {...register("gameNumber")} />
        {errors.gameNumber && <p className="text-red-500">{errors.gameNumber.message}</p>}
      </div>
      <div>
        <Label htmlFor="gamePrice">Game Price</Label>
        <Input type="number" id="gamePrice" {...register("gamePrice")} />
        {errors.gamePrice && <p className="text-red-500">{errors.gamePrice.message}</p>}
      </div>
      <div>
        <Label htmlFor="gameDescription">Game Description</Label>
        <Textarea id="gameDescription" {...register("gameDescription")} />
        {errors.gameDescription && <p className="text-red-500">{errors.gameDescription.message}</p>}
      </div>
      <Button type="submit">Create Profile</Button>
    </form>
  );
};

export default ProfileForm;

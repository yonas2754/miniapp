"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cn } from "@/lib/utils"; // for className merging
import { Backend_URL } from "@/lib/Constants";

// Zod schema for profile creation form
const ProfileSchema = z.object({
  gameType: z.string().min(1, "Game type is required"),
  imageNum: z.number().min(0, "Image number must be a positive integer"),
  startDate: z.date({ required_error: "A start date and time is required." }),
  endDate: z.date({ required_error: "An end date and time is required." }),
  gameNumber: z.number().min(1, "Game number must be at least 1"),
  gamePrice: z.number().min(0, "Game price must be a positive number"),
  gameDescription: z.string().optional(),
});

type ProfileFormInputs = z.infer<typeof ProfileSchema>;

export default function ProfileForm() {
  const queryClient = useQueryClient();

  const form = useForm<ProfileFormInputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      gameType: "",
      imageNum: 0,
      startDate: new Date(),
      endDate: undefined,
      gameNumber: 0,
      gamePrice: 0,
      gameDescription: "",
    },
  });

  // Mutation for handling form submission
  const mutation = useMutation({
    mutationFn: async (data: ProfileFormInputs) => {
      const response = await fetch(`${Backend_URL}/profiles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      console.log("Profile created successfully:");
    },
    onError: (error) => {
      console.error("Error creating profile:", error);
    },
  });

  const onSubmit = (data: ProfileFormInputs) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {mutation.data?.message && (
        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
          {mutation.data.message}
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Game Type Field */}
          <FormField
            control={form.control}
            name="gameType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Type</FormLabel>
                <FormControl>
                  <Input placeholder="Enter game type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Number Field */}
          <FormField
            control={form.control}
            name="imageNum"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter image number"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? parseFloat(e.target.value) : ""
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Start Date Picker with Time */}
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date & Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {/* Time input */}
                <Input
                  type="time"
                  onChange={(e) => {
                    const time = e.target.value.split(":");
                    const newDate = new Date(field.value);
                    newDate.setHours(parseInt(time[0]), parseInt(time[1]));
                    field.onChange(newDate);
                  }}
                  className="mt-2"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Date Picker with Time */}
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date & Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {/* Time input */}
                <Input
                  type="time"
                  onChange={(e) => {
                    const time = e.target.value.split(":");
                    const newDate = new Date(field.value);
                    newDate.setHours(parseInt(time[0]), parseInt(time[1]));
                    field.onChange(newDate);
                  }}
                  className="mt-2"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Game Number Field */}
          <FormField
            control={form.control}
            name="gameNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter game number"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? parseFloat(e.target.value) : ""
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Game Price Field */}
          <FormField
            control={form.control}
            name="gamePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter game price"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? parseFloat(e.target.value) : ""
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Game Description Field */}
          <FormField
            control={form.control}
            name="gameDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter a brief game description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Create Profile
          </Button>
        </form>
      </Form>
    </div>
  );
}

"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { GuestbookSchema } from "@/schemas/guestbook";
import { memo } from "react";
import { Control } from "react-hook-form";

export const MessageField = memo(
  ({ control }: { control: Control<GuestbookSchema> }) => (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>메시지</FormLabel>
          <FormControl>
            <Textarea placeholder="메시지를 입력하세요..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ),
);

MessageField.displayName = "MessageField";

import { memo } from "react";
import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GuestbookSchema } from "@/schemas/guestbook";

export const PasswordField = memo(
  ({ control }: { control: Control<GuestbookSchema> }) => (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>비밀번호</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요..."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ),
);

PasswordField.displayName = "PasswordField";

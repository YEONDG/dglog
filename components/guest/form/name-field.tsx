'use client';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { GuestbookSchema } from '@/schemas/guestbook';
import { memo } from 'react';
import { Control } from 'react-hook-form';

export const NameField = memo(({ control }: { control: Control<GuestbookSchema> }) => (
  <FormField
    control={control}
    name='name'
    render={({ field }) => (
      <FormItem>
        <FormLabel>이름</FormLabel>
        <FormControl>
          <Input placeholder='이름을 입력하세요...' {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
));

NameField.displayName = 'NameField';

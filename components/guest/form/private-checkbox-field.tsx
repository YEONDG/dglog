'use client';

import { Control } from 'react-hook-form';
import { GuestbookSchema } from '@/schemas/guestbook';
import { FormField, FormItem, FormControl, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { LockIcon } from 'lucide-react';

interface PrivateCheckboxProps {
  control: Control<GuestbookSchema>;
}

export const PrivateCheckbox = ({ control }: PrivateCheckboxProps) => {
  return (
    <FormField
      control={control}
      name='isPrivate'
      render={({ field }) => (
        <FormItem className='flex flex-row items-center space-x-2 space-y-0'>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} id='isPrivate' />
          </FormControl>
          <FormLabel htmlFor='isPrivate' className='text-sm font-medium flex items-center gap-1.5 cursor-pointer'>
            <LockIcon size={14} />
            비밀글로 작성하기
          </FormLabel>
        </FormItem>
      )}
    />
  );
};

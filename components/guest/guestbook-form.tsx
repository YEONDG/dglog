'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { guestbookSchema, GuestbookSchema } from '@/schemas/guestbook';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SubmitButton } from '@/components/guest/submit-btn';

export const GuestBookForm = ({ addFormAction }: { addFormAction: (formData: FormData) => Promise<void> }) => {
  const form = useForm<GuestbookSchema>({
    resolver: zodResolver(guestbookSchema),
    defaultValues: {
      name: '',
      password: '',
      message: '',
    },
  });

  const onSubmit = async (data: GuestbookSchema) => {
    const formData = new FormData();
    formData.set('name', data.name);
    formData.set('password', data.password);
    formData.set('message', data.message);

    await addFormAction(formData);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='mb-6 space-y-4'>
        <FormField
          control={form.control}
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
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type='password' placeholder='비밀번호를 입력하세요...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>메시지</FormLabel>
              <FormControl>
                <Textarea placeholder='메시지를 입력하세요...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
};

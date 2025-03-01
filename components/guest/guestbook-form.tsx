'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { guestbookSchema, GuestbookSchema } from '@/schemas/guestbook';
import { Form } from '@/components/ui/form';
import { SubmitButton } from '@/components/guest/submit-btn';
import { NameField } from './form/name-field';
import { PasswordField } from './form/password-field';
import { MessageField } from './form/message-field';

export const GuestBookForm = ({ addFormAction }: { addFormAction: (formData: FormData) => Promise<void> }) => {
  const form = useForm<GuestbookSchema>({
    resolver: zodResolver(guestbookSchema),
    defaultValues: {
      name: '',
      password: '',
      message: '',
    },
  });
  const isSubmitting = form.formState.isSubmitting;
  const control = form.control;

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
      <form onSubmit={form.handleSubmit(onSubmit)} className='mb-6 space-y-2'>
        <NameField control={control} />
        <PasswordField control={control} />
        <MessageField control={control} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

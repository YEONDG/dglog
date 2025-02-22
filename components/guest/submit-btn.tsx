import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className={cn(
        'w-full mt-3 p-2 text-white rounded-md transition-colors focus:outline-none',
        pending ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
      )}
      disabled={pending}
    >
      {pending ? '등록 중...' : '등록'}
    </button>
  );
};

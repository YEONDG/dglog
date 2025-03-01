import { cn } from '@/lib/utils';

export const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <button
      type='submit'
      className={cn(
        'w-full mt-3 p-2 text-white rounded-md transition-colors focus:outline-none',
        isSubmitting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
      )}
      disabled={isSubmitting}
    >
      {isSubmitting ? '등록 중...' : '등록'}
    </button>
  );
};

import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='w-full mt-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
      disabled={pending}
    >
      {pending ? '등록 중...' : '등록'}
    </button>
  );
};

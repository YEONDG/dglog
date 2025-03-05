export function PostsLoadingSkeleton() {
  return (
    <div className='space-y-4'>
      {[...Array(5)].map((_, i) => (
        <div key={i} className='animate-pulse'>
          <div className='h-16 bg-gray-200 rounded w-full dark:bg-gray-700'></div>
        </div>
      ))}
    </div>
  );
}

export function TagsLoadingSkeleton() {
  return (
    <div className='animate-pulse space-y-2'>
      <div className='h-6 bg-gray-200 rounded w-1/4'></div>
      <div className='flex flex-wrap gap-2 mt-4'>
        {[...Array(8)].map((_, i) => (
          <div key={i} className='h-6 bg-gray-200 rounded w-16'></div>
        ))}
      </div>
    </div>
  );
}

export function PostLoadingSkeleton() {
  return (
    <div className='animate-pulse space-y-4'>
      <div className='h-8 bg-gray-200 rounded w-3/4'></div>
      <div className='h-4 bg-gray-200 rounded w-1/4'></div>
      <div className='space-y-3'>
        {[...Array(10)].map((_, i) => (
          <div key={i} className='h-4 bg-gray-200 rounded'></div>
        ))}
      </div>
    </div>
  );
}

export function CommentsSkeleton() {
  return (
    <div className='animate-pulse space-y-4 mt-8'>
      <div className='h-6 bg-gray-200 rounded w-1/4'></div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded w-1/4'></div>
          <div className='h-3 bg-gray-200 rounded w-3/4'></div>
        </div>
      ))}
    </div>
  );
}

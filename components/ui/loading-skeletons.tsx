export function PostsLoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-16 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      ))}
    </div>
  );
}

export function TagsLoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      <div className="h-6 w-1/4 rounded bg-gray-200"></div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-6 w-16 rounded bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
}

export function PostLoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-3/4 rounded bg-gray-200"></div>
      <div className="h-4 w-1/4 rounded bg-gray-200"></div>
      <div className="space-y-3">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-4 rounded bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
}

export function CommentsSkeleton() {
  return (
    <div className="mt-8 animate-pulse space-y-4">
      <div className="h-6 w-1/4 rounded bg-gray-200"></div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 w-1/4 rounded bg-gray-200"></div>
          <div className="h-3 w-3/4 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}

export default function AgentSkeleton() {
  return (
    <div className="border-b border-gray-600 py-4 flex items-center justify-between pr-0 md:pr-5 animate-pulse">
      <div className="flex items-center gap-3">
        {/* Avatar skeleton */}
        <div className="w-10 h-10 bg-gray-600 rounded-full" />

        <div className="space-y-2">
          {/* Name skeleton */}
          <div className="h-4 bg-gray-600 rounded w-32" />
          {/* Role skeleton */}
          <div className="h-4 bg-gray-600 rounded w-24" />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        {/* Action buttons skeleton */}
        <div className="h-6 w-6 bg-gray-600 rounded" />
        <div className="h-6 w-6 bg-gray-600 rounded" />
        <div className="h-6 w-6 bg-gray-600 rounded" />
        {/* Edit button skeleton */}
        <div className="h-4 w-12 bg-gray-600 rounded" />
      </div>
    </div>
  );
}

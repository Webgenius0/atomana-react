export default function AccessInstructionSkeleton() {
  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div>
          <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse my-5" />
          <div>
            <div className="h-8 w-48 bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-64 bg-gray-700 rounded animate-pulse mt-2" />
          </div>
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse" />
      </div>

      <div className="mt-5">
        <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="space-y-2 border-b border-secondPrimary py-4"
            >
              <div className="h-5 w-24 bg-gray-700 rounded animate-pulse" />
              <div className="h-5 w-36 bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[25px]">
        <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="space-y-2 border-b border-secondPrimary py-4"
            >
              <div className="h-5 w-32 bg-gray-700 rounded animate-pulse" />
              <div className="h-5 w-48 bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[25px]">
        <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="space-y-2 border-b border-secondPrimary py-4"
            >
              <div className="h-5 w-28 bg-gray-700 rounded animate-pulse" />
              <div className="h-5 w-40 bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[25px]">
        <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12">
          <div className="space-y-2 border-b border-secondPrimary py-4">
            <div className="h-5 w-32 bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-48 bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4">
          <div className="space-y-2 py-4">
            <div className="h-5 w-20 bg-gray-700 rounded animate-pulse" />
            <div className="h-20 w-full bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
}

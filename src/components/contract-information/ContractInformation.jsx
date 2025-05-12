export default function ContractInformationSkeleton() {
  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-gray-300/20 rounded-full animate-pulse my-5" />
          <div className="h-8 w-48 bg-gray-300/20 rounded animate-pulse" />
        </div>
        <div className="w-10 h-10 bg-gray-300/20 rounded-full animate-pulse" />
      </div>

      <div className="mt-5">
        <div className="h-8 w-48 bg-gray-300/20 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="space-y-[2px] border-b border-secondPrimary py-4"
            >
              <div className="h-5 w-32 bg-gray-300/20 rounded animate-pulse" />
              <div className="h-5 w-48 bg-gray-300/20 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="h-8 w-48 bg-gray-300/20 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="space-y-[2px] border-b border-secondPrimary py-4"
            >
              <div className="h-5 w-32 bg-gray-300/20 rounded animate-pulse" />
              <div className="h-5 w-48 bg-gray-300/20 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="h-8 w-48 bg-gray-300/20 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-[2px] py-4">
            <div className="h-5 w-32 bg-gray-300/20 rounded animate-pulse" />
            <div className="h-20 w-full bg-gray-300/20 rounded animate-pulse mt-2" />
          </div>
        </div>
      </div>
    </>
  );
}

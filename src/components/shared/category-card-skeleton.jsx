import React from 'react'

function CategoryCardSkeleton() {
  const skeletonItems = Array(8).fill(null);

  return (
    <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="rounded-2xl bg-[#242424] py-4 px-6 animate-pulse"
        >
          {/* card header skeleton */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-[21px] w-24 rounded-lg bg-[#333333]" />
            <div className="w-[30px] h-[30px] rounded-full bg-[#333333]" />
          </div>

          {/* card title skeleton */}
          <div className="h-5 w-3/4 bg-[#333333] rounded" />
        </div>
      ))}
    </div>
  );
};

export default CategoryCardSkeleton
const LeaderboardSkeleton = () => {
  const skeletonItems = Array(6).fill(null);

  return (
    <>
      {skeletonItems.map((_, index) => (
        <div key={index} className="w-full animate-pulse">
          <div className="flex items-center justify-between mb-2.5 gap-x-2 flex-wrap">
            <div className="h-5 bg-gray-700 rounded w-32"></div>
            <div className="h-5 bg-gray-700 rounded w-40"></div>
          </div>
          <div className="h-2 bg-gray-700 rounded w-full"></div>
        </div>
      ))}
    </>
  );
};

export default LeaderboardSkeleton;

import AgentLeaderModal from '@/components/AgentLeaderModal';
import Dropdown from '@/components/Dropdown';
import ProgressBar from '@/components/ProgressBar';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useGetLeaderboardData } from '@/hooks/leaderboard.hook';
import { Link } from 'react-router-dom';

function AgentLeaderBoard() {
  const filterOptions = [
    { value: 'monthly', label: 'This Month' },
    { value: 'quarterly', label: 'This Quarter' },
    { value: 'yearly', label: 'This Year' },
  ];
  const sortingOptions = [
    { value: 'highest-avg-sales', label: 'Sort By: Highest Average Sales' },
    { value: 'highest-sold-volume', label: 'Sort By: Highest Sold Volume' },
  ];

  const {
    leaderboardData,
    isLoading,
    filters,
    handleSorting,
    handleFiltering,
  } = useGetLeaderboardData();

  return (
    <div className="my-container">
      <div className="flex items-center justify-between pt-6 md:pt-8 lg:pt-12 pb-4 md:pb-5 lg:pb-8 mb-4">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link to="/">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Agent Leaderboard</h2>
        </div>
        <div className="p-2 border border-white rounded-full cursor-pointer">
          <ThreeDotsSvg />
        </div>
      </div>
      <div className="bg-[#242424] text-[#FFF] flex flex-col gap-[8px] p-5 sm:p-4 ">
        {/* sub container header */}
        <div className="flex justify-between gap-1 gap-y-3 flex-wrap">
          <h1 className="section-title">Top 25</h1>
          <div className="flex gap-2">
            <Dropdown options={sortingOptions} onSelect={handleSorting} />
            <Dropdown options={filterOptions} onSelect={handleFiltering} />
          </div>
        </div>
        {/* sub container table */}
        <div className="relative grid md:grid-cols-1 gap-y-4 md:gap-y-6 gap-12 w-full mt-5">
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : (
            leaderboardData?.map((agent, index) => {
              return (
                <div
                  key={index}
                  className="group relative flex items-center gap-4 sm:gap-[25px] px-0 sm:px-4 md:px-6"
                >
                  <div className="italic">{index + 1}</div>
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2.5 gap-x-2 flex-wrap">
                      <p className="text-sm leading-5 tracking-[0.25px] text-[#ffffff99]">
                        {agent?.name}
                      </p>
                      <p className="text-sm leading-5 tracking-[0.25px] text-[#ffffff99]">
                        ${agent?.amount} ({agent?.sales} sales)
                      </p>
                    </div>
                    <ProgressBar
                      currentValue={agent?.sales}
                      goalValue={agent?.salesGoal}
                    />
                  </div>

                  {/* Adjusted Modal */}
                  <div className="md:max-w-[60%] w-full absolute top-[110%] left-0 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                    <AgentLeaderModal
                      name={agent?.name}
                      rank={index + 1}
                      id={agent.user_id}
                      filters={filters}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentLeaderBoard;

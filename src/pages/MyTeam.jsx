import ChartCard from '@/components/ChartCard';
import DataCard from '@/components/DataCard';
import Dropdown from '@/components/Dropdown';
import LeaderboardSkeleton from '@/components/LeaderboardSkeleton';
import ProgressBar from '@/components/ProgressBar';
import {
  useGetCurrentSalesVolume,
  useGetExpenses,
  useGetNetProfit,
  useGetUnitsSold,
} from '@/hooks/charts.hook';
import { useGetLeaderboardData } from '@/hooks/leaderboard.hook';
import { useGetSystemsData } from '@/hooks/useGetSystemsData';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const MyTeam = () => {
  const data = useGetSystemsData();

  const ourMission = [
    {
      title: 'To Create Lifelong Relationships and Raving Fans',
      subTitle: '',
    },
    {
      title: 'Excellence',
      subTitle: 'Consistent execution, Do things the right way consistently',
    },
    {
      title: 'Relentless',
      subTitle: 'Persist without exception',
    },
    {
      title: 'Adaptive',
      subTitle: 'Today’s market isn’t yesterday’s market',
    },
    {
      title: 'Collaborate',
      subTitle: 'Get to solutions together ',
    },
    {
      title: 'Extreme Ownership',
      subTitle: 'We own our problems and work towards solutions',
    },
  ];

  const filterOptions = [
    { value: 'monthly', label: 'This Month' },
    { value: 'quarterly', label: 'This Quarter' },
    { value: 'yearly', label: 'This Year' },
  ];

  const sortingOptions = [
    { value: 'highest-avg-sales', label: 'Sort By: Highest Average Sales' },
    { value: 'highest-sold-volume', label: 'Sort By: Highest Sold Volume' },
  ];

  const agentRef = useRef();
  const dropdownRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const handlePageRedirect = (e) => {
      // Check if click is inside agentRef but outside dropdownRef
      if (
        agentRef.current &&
        agentRef.current.contains(e.target) &&
        (!dropdownRef.current || !dropdownRef.current.contains(e.target))
      ) {
        navigate('/agent-leaderboard');
      }
    };

    document.addEventListener('mousedown', handlePageRedirect);

    return () => {
      document.removeEventListener('mousedown', handlePageRedirect);
    };
  }, [navigate]);

  const { currentSalesData, setTimeRange: setSalesTimeRange } =
    useGetCurrentSalesVolume();
  const { unitsSoldData, setTimeRange: setUnitsTimeRange } = useGetUnitsSold();
  const { expensesData, setTimeRange: setExpenseTimeRange } = useGetExpenses();
  const { netProfitData, setTimeRange: setProfitTimeRange } = useGetNetProfit();

  const { leaderboardData, isLoading, handleSorting, handleFiltering } =
    useGetLeaderboardData();

  return (
    <>
      <div className="my-container">
        <div>
          <div className="mt-5 mb-5">
            <h1 className="section-title">MyData</h1>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <ChartCard
              {...currentSalesData}
              options={filterOptions}
              onSelect={setSalesTimeRange}
            />
            <ChartCard
              {...unitsSoldData}
              options={filterOptions}
              onSelect={setUnitsTimeRange}
            />
            <ChartCard
              {...expensesData}
              options={filterOptions}
              onSelect={setExpenseTimeRange}
            />
            <ChartCard
              {...netProfitData}
              options={filterOptions}
              onSelect={setProfitTimeRange}
            />
          </div>
          <div
            ref={agentRef}
            className="bg-[#242424] mt-5 px-5 py-6 rounded cursor-pointer"
          >
            <div className="flex justify-between gap-1 gap-y-3 flex-wrap">
              <h1 className="section-title">Agent Leaderboard</h1>
              <div ref={dropdownRef} className="flex gap-2">
                <Dropdown options={sortingOptions} onSelect={handleSorting} />
                <Dropdown options={filterOptions} onSelect={handleFiltering} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-y-4 md:gap-y-6 gap-12 w-full mt-5">
              {isLoading ? (
                <LeaderboardSkeleton />
              ) : leaderboardData?.length === 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-sm text-[#ffffff99] font-medium">
                    No data available
                  </p>
                </div>
              ) : (
                leaderboardData?.map((agent, index) => (
                  <div key={index} className="w-full">
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
                ))
              )}
            </div>
          </div>
          <div className="mt-6">
            <h1 className="section-title mb-4">MyEssentials</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
              {data?.slice(0, 5)?.map((item) => (
                <DataCard key={item?.id} data={item} />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="section-title">Our Mission</h2>
            <div className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 bg-[#242424] rounded">
              {ourMission?.map((mission, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <h2 className="section-title text-center">
                    {mission?.title}
                  </h2>
                  <p className="text-xs text-center text-light font-medium tracking-[-0.12px]">
                    {mission?.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTeam;

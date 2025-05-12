import DataCard from '@/components/DataCard';
import DropdownTwo from '@/components/DropdownTwo';
import Pagination from '@/components/Pagination';
import ProgressCard from '@/components/ProgressCard';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import ClockSvg from '@/components/svgs/ClockSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import { useGetSystemsData } from '@/hooks/useGetSystemsData';
import { useState } from 'react';

const Activities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      title: 'Calls Today',
      currentValue: 21,
      goalValue: 15,
      goalType: 'Daily',
    },
    {
      title: 'Calls This Week',
      currentValue: 58,
      goalValue: 60,
      goalType: 'Weekly',
    },
    {
      title: 'Calls This Month',
      currentValue: 179,
      goalValue: 250,
      goalType: 'Monthly',
    },
    {
      title: 'Calls This Year',
      currentValue: 432,
      goalValue: 1250,
      goalType: 'Yearly',
    },
  ];

  const { data: allData } = useGetSystemsData('open houses');

  const completedData = allData?.filter(
    (item) => item?.status.toLowerCase() == 'completed'
  );

  const scheduledData = allData?.filter(
    (item) => item?.status.toLowerCase() == 'scheduled'
  );

  const options = [
    { value: 'month', label: 'This Month' },
    { value: 'quater', label: 'Quater' },
    { value: 'year', label: 'Yearly' },
  ];

  const handleSelect = (option) => {
    console.table({ option });
  };

  return (
    <div>
      <div className="flex items-center gap-x-2 gap-y-3 flex-wrap justify-between my-4 md:my-5 lg:my-6">
        <h2 className="section-title">Thursday, September 12</h2>

        <div className="flex items-center gap-2.5 gap-y-3 flex-wrap">
          <div className="flex items-center gap-5">
            <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full border border-light flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.0181 1.04105C6.461 1.37098 6.55258 1.99749 6.22265 2.44039L2.82607 7L6.22265 11.5596C6.55258 12.0025 6.461 12.629 6.0181 12.9589C5.5752 13.2889 4.94869 13.1973 4.61876 12.7544L0.777154 7.59739C0.513084 7.2429 0.513084 6.7571 0.777154 6.40261L4.61876 1.24561C4.94869 0.802702 5.5752 0.711121 6.0181 1.04105Z"
                  fill="white"
                  stroke="#151515"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full border border-light flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.98177 1.04105C1.42467 0.711121 2.05118 0.802703 2.38111 1.24561L6.2227 6.40261C6.48676 6.7571 6.48676 7.2429 6.2227 7.59739L2.38111 12.7544C2.05118 13.1973 1.42467 13.2889 0.98177 12.9589C0.538866 12.629 0.447283 12.0025 0.777214 11.5596L4.17378 7L0.777214 2.44039C0.447283 1.99749 0.538866 1.37098 0.98177 1.04105Z"
                  fill="white"
                  stroke="#151515"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2.5">
            <div className="w-[100px] py-1 flex items-center justify-center rounded-[10px] border border-light bg-dark text-sm leading-[21px] tracking-[-0.14px] text-light">
              Today
            </div>
            <DropdownTwo options={options} onSelect={handleSelect} />
            <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
              <PlusSvg />
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 gap-y-4 py-[25px] bg-[#1E1E1E]">
        {data?.map((item, idx) => (
          <ProgressCard key={idx} data={item} />
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <div>
          {completedData?.map((item) => (
            <DataCard key={item?.id} data={item}>
              <div className="space-y-2 mt-2">
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Attendees:{' '}
                  <span className="text-light">{item.attendees}</span>
                </p>
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Status:
                  <span className="text-light">{item.status}</span>
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-y-3 items-center justify-between gap-2">
                <p className="flex items-center gap-1 text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px] py-1 px-2 rounded-full bg-secondPrimary">
                  <span className="flex items-center gap-1">
                    <CalenderSvg />
                    {item?.date}
                  </span>
                  •<span className="flex items-center gap-1">{item?.time}</span>
                </p>

                <p className="flex items-center gap-1 text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px] py-1 px-2 rounded-full bg-secondPrimary">
                  <span className="flex items-center gap-1">
                    <ClockSvg />
                    {item?.duration}
                  </span>
                </p>
              </div>
            </DataCard>
          ))}
        </div>
        <div>
          {scheduledData?.map((item) => (
            <DataCard key={item?.id} data={item}>
              <div className="space-y-2 mt-2">
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Invited: <span className="text-light">{item.invited}</span>
                </p>
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Last Activity:{' '}
                  <span className="text-light">{item.status}</span>
                </p>
              </div>

              <div className="mt-9 flex items-center justify-between gap-2">
                <p className="flex items-center gap-1 text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px] py-1 px-2 rounded-full bg-secondPrimary">
                  <span className="flex items-center gap-1">
                    <CalenderSvg />
                    {item?.date}
                  </span>
                  •<span className="flex items-center gap-1">{item?.time}</span>
                </p>
              </div>
            </DataCard>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={45}
        itemsPerPage={12}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Activities;

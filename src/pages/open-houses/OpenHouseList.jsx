import OpenHouseTable from '@/components/open-house-list';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
// import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
// import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import { useDeleteOpenHouse } from '@/hooks/open-house.hook';
import { cn } from '@/lib/utils';
import { Trash2Icon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const OpenHouseList = () => {
  //   const tabs = [
  //     { label: 'Forms', path: '/my-systems/team' },
  //     {
  //       label: 'Charts',
  //       path: '/my-systems/team',
  //     },
  //   ];

  const location = useLocation();

  const {
    mutate: deleteExpense,
    isPending,
    rowSelection,
    setRowSelection,
  } = useDeleteOpenHouse();

  const selectedRows = Object.entries(rowSelection)
    .filter(([, value]) => value)
    .map(([key]) => key);

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
          <Link to={`${location.state?.from || '/my-systems/team'}`}>
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Open House Requests</h2>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            to="/my-systems/open-house/open-house-form"
            state={{ from: location.pathname }}
            className="flex items-center gap-2.5 text-sm leading-6 tracking-[-0.14px] text-light hover:opacity-60 duration-300 ml-auto "
          >
            <p className="sm:block hidden">Add Open House Request</p>
            <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
              <PlusSvg />
            </span>
          </Link>

          {selectedRows.length > 0 && (
            <button
              onClick={() => {
                deleteExpense(selectedRows);
              }}
              disabled={isPending}
              className={cn(
                'w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95 hover:opacity-60',
                {
                  'opacity-60': isPending,
                }
              )}
            >
              <Trash2Icon className="text-light size-4" />
            </button>
          )}

          {/* <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button> */}
        </div>
      </div>

      {/* <div className="mb-5 sm:mb-6">
        <TabStepper tabs={tabs} />
      </div> */}

      <OpenHouseTable
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </>
  );
};

export default OpenHouseList;

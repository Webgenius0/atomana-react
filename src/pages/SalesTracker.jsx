import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import SalesTrackerTable from '@/components/tables/SalesTrackerTable';
import { useDeleteSalesTrack } from '@/hooks/expense.hook';
import { cn } from '@/lib/utils';
import { Trash2Icon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SalesTracker = () => {
  //   const tabs = [
  //     { label: 'Forms', path: '/forms' },
  //     { label: 'Charts', path: '/charts' },
  //   ];

  const location = useLocation();

  const { mutate, isPending, rowSelection, setRowSelection } =
    useDeleteSalesTrack();

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
          <h2 className="section-title">Sales Tracker</h2>
        </div>

        <div className="flex items-center gap-2.5">
          {selectedRows.length > 0 && (
            <button
              onClick={() => {
                mutate(selectedRows);
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

          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button>
        </div>
      </div>

      {/* <div className="mb-5 sm:mb-6">
        <TabStepper tabs={tabs} />
      </div> */}

      <SalesTrackerTable
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </>
  );
};

export default SalesTracker;

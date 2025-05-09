import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import SalesTrackerTable from '@/components/tables/SalesTrackerTable';
import { Link, useLocation } from 'react-router-dom';

const SalesTracker = () => {
  //   const tabs = [
  //     { label: 'Forms', path: '/forms' },
  //     { label: 'Charts', path: '/charts' },
  //   ];

  const location = useLocation();

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

      <SalesTrackerTable />
    </>
  );
};

export default SalesTracker;

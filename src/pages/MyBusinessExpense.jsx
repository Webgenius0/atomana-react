import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import MyBusinessExpenseTable from '@/components/tables/MyBusinessExpenseTable';
import TabStepper from '@/components/TabStepper';
import { Link, useLocation } from 'react-router-dom';

const MyBusinessExpense = () => {
  const tabs = [
    { label: 'Forms', path: '/my-systems/finances/my-business-expenses' },
    {
      label: 'Charts',
      path: '/my-systems/finances/my-business-expenses/charts',
    },
  ];
  const location = useLocation();

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
          <Link to={`${location.state?.from || '/my-systems/finances'}`}>
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">MyBusiness Expenses</h2>
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

      <div className="mb-5 sm:mb-6">
        <TabStepper tabs={tabs} />
      </div>

      <MyBusinessExpenseTable />
    </>
  );
};

export default MyBusinessExpense;

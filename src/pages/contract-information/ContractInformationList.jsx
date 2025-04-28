import ContractInformationTable from '@/components/contract-information-list';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import { Link, useLocation } from 'react-router-dom';

const ContractInformationList = () => {
  //   const tabs = [
  //     { label: 'Forms', path: '/my-systems/team' },
  //     {
  //       label: 'Charts',
  //       path: '/my-systems/team',
  //     },
  //   ];

  const location = useLocation();

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
          <Link to={`${location.state?.from || '/my-systems/team'}`}>
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Contract Information</h2>
        </div>

        <div className="flex items-center gap-2.5">
          {/* <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button> */}
          <Link
            to="/my-systems/new-contract/new-contract-information-form"
            state={{ from: location.pathname }}
            className="flex items-center gap-2.5 text-sm leading-6 tracking-[-0.14px] text-light hover:opacity-60 duration-300 ml-auto "
          >
            <p className="sm:block hidden">New Contract Information</p>
            <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
              <PlusSvg />
            </span>
          </Link>
        </div>
      </div>

      {/* <div className="mb-5 sm:mb-6">
        <TabStepper tabs={tabs} />
      </div> */}

      <ContractInformationTable />
    </>
  );
};

export default ContractInformationList;

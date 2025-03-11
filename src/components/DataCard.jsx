import { useLocation, useNavigate } from 'react-router-dom';
import ThreeDotsSvg from './svgs/ThreeDotsSvg';

const DataCard = ({ data }) => {
  const { type, title } = data;
  const navigate = useNavigate();
  const location = useLocation();

  // navigate when card is clicked into category
  const handleCardClick = (title) => {
    if (title === 'Our Mission') {
      navigate('/my-systems/team/our-mission');
    } else if (title === 'Open House Request Form') {
      navigate(`/my-systems/open-house/open-house-form`, {
        state: { from: location.pathname },
      });
    }
    // else if (title === 'HOA Community Docs') {
    //   navigate(`/my-systems/team/hoa`);
    // }
    else if (title === 'Access Instruction') {
      navigate(`/my-systems/team/access`);
    } else if (title === 'Sales Tracker') {
      navigate(`/my-systems/team/sales-tracker`);
    } else if (title === 'My Listing Expenses') {
      navigate(`/my-systems/finances/my-listing`, {
        state: { from: location.pathname },
      });
    } else if (title === 'My P&L') {
      navigate(`/my-systems/finances/pl`);
    } else if (title === 'My Business Expenses') {
      navigate(`/my-systems/finances/my-business-expenses`, {
        state: { from: location.pathname },
      });
    } else if (title === 'My Agent Earnings') {
      navigate(`/my-systems/finances/my-agent-earnings`);
    } else if (title === 'Vendor List') {
      navigate(`/my-systems/vendor-list`);
    } else if (title === 'Bright Home Inspections') {
      navigate(`/my-systems/vendor-list/description`);
    } else if (title === 'New Listing Information Form') {
      navigate(`/my-systems/new-listing/new-listing-information-form`, {
        state: { from: location.pathname },
      });
    }
  };

  return (
    <div
      // data card cursor pointer setup
      onClick={() => handleCardClick(title)}
      role={
        title == 'Our Mission' ||
        title == 'Open House Request Form' ||
        // title === 'HOA Community Docs' ||
        title === 'Vendor List' ||
        title == 'New Listing Information Form' ||
        title == 'Access Instruction' ||
        title == 'My Listing Expenses' ||
        title == 'My Business Expenses' ||
        title == 'My Agent Earnings' ||
        title == 'My P&L' ||
        title == 'Bright Home Inspections'
          ? 'button'
          : 'presentation'
      }
      className="rounded-2xl bg-[#242424] py-4 px-6 hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out"
    >
      {/* card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
          {type}
        </div>
        <button className=" flex w-[30px] h-[30px] justify-center items-center gap-1 rounded-full border border-[#4d4d4d] bg-[#242424] shadow-[0px_0px_0px_1px] shadow-[#000] cursor-pointer duration-300 active:scale-95">
          <ThreeDotsSvg />
        </button>
      </div>

      {/* card-title */}
      <h3 className="text-light lg:text-lg md:text-base text-sm font-semibold leading-[21px] tracking-[-0.2px]">
        {title}
      </h3>
    </div>
  );
};

export default DataCard;

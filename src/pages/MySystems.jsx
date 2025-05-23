import BallotSvg from '@/components/svgs/BallotSvg';
import DollarSvg from '@/components/svgs/DollarSvg';
import HomeWorkSvg from '@/components/svgs/HomeWorkSvg';
import PeopleSvg from '@/components/svgs/PeopleSvg';
import SensorDoorSvg from '@/components/svgs/SensorDoorSvg';
import TabCard from '@/components/TabCard';
import { useGetSystemsData } from '@/hooks/useGetSystemsData';

const MySystems = () => {
  const openHouseData = useGetSystemsData('open houses');
  const financeData = useGetSystemsData('expenses');
  const newLisitingData = useGetSystemsData('new listing');
  const newContractData = useGetSystemsData('new contract');
  const teamData = useGetSystemsData('team');

  const systemTabs = [
    {
      icon: SensorDoorSvg,
      category: 'Open Houses',
      totalCategories: openHouseData.length,
      totalCategoryName: 'Total Items',
      path: '/my-systems/open-house',
    },
    {
      icon: DollarSvg,
      category: 'Finances',
      totalCategories: financeData.length,
      totalCategoryName: 'Total Vendors',
      path: '/my-systems/finances',
    },
    {
      icon: HomeWorkSvg,
      category: 'New Listing',
      totalCategories: newLisitingData.length,
      totalCategoryName: 'Total Vendors',
      path: '/my-systems/new-listing',
    },
    {
      icon: BallotSvg,
      category: 'New Contract',
      totalCategories: newContractData.length,
      totalCategoryName: 'Total Vendors',
      path: '/my-systems/new-contract',
    },
    {
      icon: PeopleSvg,
      category: 'Team',
      totalCategories: teamData.length,
      totalCategoryName: 'Total Items',
      path: '/my-systems/team',
    },
  ];

  return (
    <div className="mx-auto">
      <div className="mt-5 mb-5">
        <h1 className="section-title">Systems</h1>
      </div>
      <div className="text-white grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-x-3 lg:gap-y-4 gap-y-3 my-4">
        {systemTabs?.map((tab, idx) => {
          const IconComponent = tab.icon;
          return <TabCard key={idx} tab={tab} IconComponent={IconComponent} />;
        })}
      </div>
    </div>
  );
};

export default MySystems;

import DataCard from '@/components/DataCard';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import { useGetSystemsData } from '@/hooks/useGetSystemsData';
import { Link } from 'react-router-dom';

const Finances = () => {
  const data = useGetSystemsData('expenses');

  return (
    <>
      <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
        <Link to="/my-systems/">
          <ArrowLeftSvg />
        </Link>
        <h2 className="section-title">Finances</h2>
      </div>

      <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
        {data?.map((item) => (
          <DataCard key={item?.id} data={item}>
            <div className="flex items-center justify-between mt-6">
              <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                Status: <span className="text-light">{item.status}</span>
              </p>
              <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                Last Activity:{' '}
                <span className="text-light">{item.lastActivity}</span>
              </p>
            </div>
          </DataCard>
        ))}
      </div>
    </>
  );
};

export default Finances;

import DataCard from '@/components/DataCard';
import VlHeader from '@/components/VlHeader';
import { useGetVendorListData } from '@/hooks/useVendorListData';

const VlRentalManagement = () => {
    const data = useGetVendorListData('rental management');

    return (
      <>
      <VlHeader/>
      <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
        {data?.map((item) => (
          <DataCard key={item?.id} data={item}>
            <div className="flex items-center justify-between mt-6">
              <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                Status: <span className="text-light">{item.status}</span>
              </p>
              <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                Last Activity:{" "}
                <span className="text-light">{item.lastActivity}</span>
              </p>
            </div>
          </DataCard>
        ))}
      </div>
      </>
    );
}

export default VlRentalManagement
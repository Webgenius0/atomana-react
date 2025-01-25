import DataCard from '@/components/DataCard';
import { useGetVendorListData } from '@/hooks/useVendorListData';
import React from 'react'

const VlRentalManagement = () => {
    const { data } = useGetVendorListData('rental management');

    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
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
    );
}

export default VlRentalManagement
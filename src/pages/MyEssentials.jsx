import DataCard from "@/components/DataCard";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";
import React from "react";

const MyEssentials = () => {
  const { data } = useGetSystemsData();

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-4 md:pb-5 lg:pb-8">
        <h1 className="section-title mb-4">MyEssentials</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 md:mt-5">
          {data?.map((item) => (
            <DataCard key={item?.id} data={item}>
              <div className="flex items-center gap-x-1 gap-y-[2px] flex-wrap justify-between mt-6">
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
      </div>
    </div>
  );
};

export default MyEssentials;

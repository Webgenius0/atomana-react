import DataCard from "@/components/DataCard";
import Pagination from "@/components/Pagination";
import ProgressCard from "@/components/ProgressCard";
import CalenderSvg from "@/components/svgs/CalenderSvg";
import ClockSvg from "@/components/svgs/ClockSvg";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";
import { useState } from "react";

const Activities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      title: "Calls Today",
      currentValue: 21,
      goalValue: 15,
      goalType: "Daily",
    },
    {
      title: "Calls This Week",
      currentValue: 58,
      goalValue: 60,
      goalType: "Weekly",
    },
    {
      title: "Calls This Month",
      currentValue: 179,
      goalValue: 250,
      goalType: "Monthly",
    },
    {
      title: "Calls This Year",
      currentValue: 432,
      goalValue: 1250,
      goalType: "Yearly",
    },
  ];

  const {
    data: allData,
  } = useGetSystemsData("open houses");

  const completedData = allData?.filter(
    (item) => item?.status.toLowerCase() == "completed"
  );

  const scheduledData = allData?.filter(
    (item) => item?.status.toLowerCase() == "scheduled"
  );

  return (
    <div>
      <div className="grid grid-cols-4 gap-1 py-[25px] bg-[#1E1E1E]">
        {data?.map((item, idx) => (
          <ProgressCard key={idx} data={item} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          {completedData?.map((item) => (
            <DataCard key={item?.id} data={item}>
              <div className="space-y-2 mt-2">
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Attendees:{" "}
                  <span className="text-light">{item.attendees}</span>
                </p>
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Last Activity:{" "}
                  <span className="text-light">{item.status}</span>
                </p>
              </div>

              <div className="mt-9 flex items-center justify-between gap-2">
                <p className="flex items-center gap-1 text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px] py-1 px-2 rounded-full bg-secondPrimary">
                  <span className="flex items-center gap-1">
                    <CalenderSvg />
                    {item?.date}
                  </span>
                  •<span className="flex items-center gap-1">{item?.time}</span>
                </p>

                <p className="flex items-center gap-1 text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px] py-1 px-2 rounded-full bg-secondPrimary">
                  <span className="flex items-center gap-1">
                    <ClockSvg />
                    {item?.duration}
                  </span>
                </p>
              </div>
            </DataCard>
          ))}
        </div>
        <div>
          {scheduledData?.map((item) => (
            <DataCard key={item?.id} data={item}>
              <div className="space-y-2 mt-2">
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Invited: <span className="text-light">{item.invited}</span>
                </p>
                <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                  Last Activity:{" "}
                  <span className="text-light">{item.status}</span>
                </p>
              </div>

              <div className="mt-9 flex items-center justify-between gap-2">
                <p className="flex items-center gap-1 text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px] py-1 px-2 rounded-full bg-secondPrimary">
                  <span className="flex items-center gap-1">
                    <CalenderSvg />
                    {item?.date}
                  </span>
                  •<span className="flex items-center gap-1">{item?.time}</span>
                </p>
              </div>
            </DataCard>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={45}
        itemsPerPage={12}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Activities;

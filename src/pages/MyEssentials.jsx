import DataCard from "@/components/DataCard";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";
import personimg from "@/assets/images/user.png";
import { FaCalendarAlt } from "react-icons/fa";

const MyEssentials = () => {
  const { data } = useGetSystemsData();

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-4 md:pb-5 lg:pb-8">
        <h1 className="section-title mb-4">MyEssentials</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 md:mt-5">
          {data?.map((item) => (
            <DataCard key={item?.id} data={item}>
              <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 mt-2">
                <div className="flex items-center justify-between">
                  <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                    Status: <span className="text-light">{item?.status}</span>
                  </p>
                  <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
                    Last Activity:{" "}
                    <span className="text-light">{item?.lastActivity}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={personimg}
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div className="text-xs text-light ">John Hernandez </div>
                    </div>
                  </div>

                  <p className="flex justify-center items-center gap-2  text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
                    <span>
                      <FaCalendarAlt />
                    </span>
                    2024 Q1
                  </p>
                </div>
              </div>
            </DataCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEssentials;

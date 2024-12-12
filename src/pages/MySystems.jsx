import DataCard from "@/components/DataCard";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";

const MySystems = () => {
  const { data, isLoading, isError, error } = useGetSystemsData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

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
};

export default MySystems;

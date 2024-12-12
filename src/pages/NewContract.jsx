import DataCard from "@/components/DataCard";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";

const NewContract = () => {
  const { data, isLoading, isError, error } = useGetSystemsData("new contract");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
      {data?.map((item) => (
        <DataCard key={item?.id} data={item} />
      ))}
    </div>
  );
};

export default NewContract;

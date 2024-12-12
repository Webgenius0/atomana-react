import CourseCard from "@/components/CourseCard";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";

const MyClassroom = () => {
  const { data, isLoading, isError, error } = useGetSystemsData("team");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-white text-xl">MyEssentials</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
          {data?.map((item) => (
            <CourseCard key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyClassroom;

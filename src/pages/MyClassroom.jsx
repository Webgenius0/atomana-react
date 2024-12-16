import ContinueLearningCard from "@/components/ContinueLearningCard";
import CourseCard from "@/components/CourseCard";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";

const MyClassroom = () => {
  const { data } = useGetSystemsData("team");
  
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-white text-xl mt-5 mb-5">New Courses</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
          {data?.map((item) => (
            <CourseCard key={item?.id} data={item} />
          ))}
        </div>

        <div>
          <h1 className="text-white text-xl mt-5 mb-5">Continue Learning</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
            {data?.map((item) => (
              <ContinueLearningCard key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClassroom;

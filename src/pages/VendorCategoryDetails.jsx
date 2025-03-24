import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "@/hooks/useAxios";

function VendorCategoryDetails() {
  const { categorySlug } = useParams();
  const axiosPrivate = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["vendorCategory", categorySlug],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/vendor-category/single/${categorySlug}`
      );
      return response.data.data;
    },
  });

  if (isLoading) return <p className="text-white">Loading...</p>;

  return (
    <div className="text-white mx-auto">
      {/* <h2 className="text-2xl font-bold">{data.name}</h2>
      <img src={data.icon} alt={data.name} className="w-16 h-16 my-4" /> */}
      <h3 className="text-lg mt-2">Vendors:</h3>
      <div className="text-white grid lg:grid-cols-4 md:grid-cols-3 min-[426px]:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-x-3 lg:gap-y-4 gap-y-3 my-4">
        {data.vendors.map((vendor) => (
          <Link key={vendor.id} to={`/my-systems/vendor-list/${vendor.slug}`}>
            <div className="cursor-pointer p-4 bg-[#242424] rounded-2xl hover:bg-[#343434] transition">
              <h1 className="py-2 text-lg">{vendor.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default VendorCategoryDetails;

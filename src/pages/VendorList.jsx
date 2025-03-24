import { Link } from "react-router-dom";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import TabCard from "@/components/TabCard";
import { useGetVendorcategory } from "@/hooks/vendor.hook";

function VendorList() {
  const { categories, isLoading } = useGetVendorcategory();

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="mx-auto">
      {/* Back Button & Header */}
      <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit mb-5 sm:my-5 mr-auto sm:ml-0">
        <Link to="/my-systems/team/">
          <ArrowLeftSvg />
        </Link>
        <h2 className="section-title">Vendor List</h2>
      </div>

      {/* Category Cards */}
      <div className="text-white grid lg:grid-cols-4 md:grid-cols-3 min-[426px]:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-x-3 lg:gap-y-4 gap-y-3 my-4">
        {categories?.map((category) => (
          <TabCard
            key={category.id}
            tab={{
              icon: category.icon,
              category: category.name,
              totalCategories: category.vendors_count,
              totalCategoryName: "Total Vendors",
              path: `/my-systems/vendor-list/${category.slug}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default VendorList;

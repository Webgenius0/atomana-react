import SearchIconSvg from "@/components/svgs/SearchIconSvg";
import SubTabs from "@/components/SubTabs";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import { Link, Outlet, useLocation } from "react-router-dom";

const MySystemsLayout = () => {
  const systemTabs = [
    {
      label: "All",
      link: "/my-systems/all",
    },
    {
      label: "Activities",
      link: "/my-systems/activities",
    },
    {
      label: "Open Houses",
      link: "/my-systems/open-house",
    },
    {
      label: "Finances",
      link: "/my-systems/finances",
    },
    {
      label: "New Listing",
      link: "/my-systems/new-listing",
    },
    {
      label: "New Contract",
      link: "/my-systems/new-contract",
    },
    {
      label: "Team",
      link: "/my-systems/team",
    },
  ];

  const vendorListTabs = [
    {
      label: "All",
      link: "/my-systems/vendor-list/all",
    },
    {
      label: "Utilities",
      link: "/my-systems/vendor-list/utilities",
    },
    {
      label: "Pest Control",
      link: "/my-systems/vendor-list/pest-control",
    },
    {
      label: "Insurance",
      link: "/my-systems/vendor-list/insurance",
    },
    {
      label: "Rental Management",
      link: "/my-systems/vendor-list/rental-management",
    },
  ];

  const location = useLocation().pathname;

  return (
    <section className="pt-0 sm:pt-3 md:pt-6">
      <div className="my-container">
        <div
          className={
            location === "/my-systems/team/our-mission" ||
              location === "/my-systems/open-house/open-house-form" ||
              location === "/my-systems/open-house/open-house-form-details" ||
              location === "/my-systems/finances/pl" ||
              location === "/my-systems/team/hoa" ||
              location === "/my-systems/team/access" ||
              location === "/my-systems/finances/my-listing" ||
              location === "/my-systems/finances/my-agent-expenses" ||
              location === "/my-systems/finances/my-business-expenses"||
               location === "/my-systems/vendor-list/description"
              ? "hidden"
              : "block"
          }
        >


          {
            location === "/my-systems/vendor-list/all" ||
              location === "/my-systems/vendor-list/utilities" ||
              location === "/my-systems/vendor-list/pest-control" ||
              location === "/my-systems/vendor-list/insurance" ||
              location === "/my-systems/vendor-list/rental-management" ||
              location === "/my-systems/vendor-list/description"
              ? (<>  <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
                <div className="flex items-center gap-4 justify-between">
                  <Link
                    to="/my-systems/team"
                    className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
                  >
                    <ArrowLeftSvg />
                    <h2 className="section-title">Vendor List</h2>
                  </Link>

                  <div className="flex items-center gap-2.5">
                    <div className="relative w-full max-w-xs">
                      <input
                        type="text"
                        className="border rounded-full bg-transparent pl-10 pr-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search "
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <SearchIconSvg />
                      </div>
                    </div>
                  </div>
                </div>
              </div></>)
              : ""
          }


          <h2 className="section-title">{
            location === "/my-systems/vendor-list/all" ||
              location === "/my-systems/vendor-list/utilities" ||
              location === "/my-systems/vendor-list/pest-control" ||
              location === "/my-systems/vendor-list/insurance" ||
              location === "/my-systems/vendor-list/rental-management"
              ? " "
              : "Systems"
          }</h2>

          <SubTabs
            tabLinks={
              location === "/my-systems/vendor-list/all" ||
                location === "/my-systems/vendor-list/utilities" ||
                location === "/my-systems/vendor-list/pest-control" ||
                location === "/my-systems/vendor-list/insurance" ||
                location === "/my-systems/vendor-list/rental-management" ||
                location === "/my-systems/vendor-list/description"
                ? vendorListTabs
                : systemTabs
            }
          />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default MySystemsLayout;

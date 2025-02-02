import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import Table from "@/components/table/Table";
import TabStepper from "@/components/TabStepper";
import { Link, useLocation } from "react-router-dom";

const MyListingExpense = () => {
  const tabs = [
    { label: "Forms", path: "/forms" },
    { label: "Charts", path: "/charts" },
  ];
  const location = useLocation();
  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <Link
          to={`${location.state?.from || "/my-systems/finances"}`}
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
        >
          <ArrowLeftSvg />
          <h2 className="section-title">MyListing Expenses</h2>
        </Link>

        <div className="flex items-center gap-2.5">
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button>
        </div>
      </div>

      <div className="mb-5 sm:mb-6">
        <TabStepper tabs={tabs} />
      </div>

      <Table />
    </>
  );
};

export default MyListingExpense;




import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import Table from "@/components/table/Table";
import TabStepper from "@/components/TabStepper";
import React from "react";
import { Link } from "react-router-dom";

const MyBusinessExpense = () => {
  const tabs = [
    { label: "Forms", path: "/forms" },  
    { label: "Charts", path: "/charts" }, 
  ];

  return (
    <div>

      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
      <div className="flex items-center gap-4 justify-between">
        <Link
          to="/my-systems/finances"
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
        >
          <ArrowLeftSvg />
          <h2 className="section-title">MyBusiness Expenses</h2> 
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
      </div>

      <div className="my-4 sm:my-5 md:my-6">
          <TabStepper tabs={tabs} />
        </div>






      <Table />
    </div>
  );
};

export default MyBusinessExpense;

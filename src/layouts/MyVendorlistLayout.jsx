import SubTabs from "@/components/SubTabs";
import TabBtn from "@/components/TabBtn";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const MyVendorlistLayout = () => { 
  const systemTabs = [
    {
      label: "All",
      link: "/my-systems/all",
    },
    {
      label: "Utilities",
      link: "/my-systems/activities",  
    },
    {
      label: "Pest Control",
      link: "/my-systems/open-house",
    },
    {
      label: "Insurance",
      link: "/my-systems/finances",
    },
    {
      label: "Rental Management",
      link: "/my-systems/new-listing", 
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
            location === "/my-systems/finances/pl" ||
            location === "/my-systems/team/hoa" || 
            location === "/my-systems/team/access"
              ? "hidden"
              : "block"
          }
        >
          <h2 className="section-title">Vendor List</h2> 
          <SubTabs tabLinks={systemTabs} />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default MyVendorlistLayout;

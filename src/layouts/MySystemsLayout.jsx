import SubTabs from "@/components/SubTabs";
import TabBtn from "@/components/TabBtn";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const MySystemsLayout = () => {
  const systemTabs = [
    {
      label: "All",
      link: "/my-systems",
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

  const location = useLocation().pathname;

  return (
    <section className="pt-0 sm:pt-3 md:pt-6">
      <div className="my-container">
        <div
          className={
            location === "/my-systems/team/our-mission" ||
            location === "/my-systems/open-house/open-house-form"
              ? "hidden"
              : "block"
          }
        >
          <h2 className="section-title">Systems</h2>
          <SubTabs tabLinks={systemTabs} />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default MySystemsLayout;

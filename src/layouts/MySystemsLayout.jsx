import SubTabs from "@/components/SubTabs";
import TabBtn from "@/components/TabBtn";
import React from "react";
import { Outlet } from "react-router-dom";

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

  return (
    <section className="pt-6">
      <div className="my-container">
        <h2 className="section-title">
          Systems
        </h2>
        <SubTabs tabLinks={systemTabs} />
        <Outlet />
      </div>
    </section>
  );
};

export default MySystemsLayout;

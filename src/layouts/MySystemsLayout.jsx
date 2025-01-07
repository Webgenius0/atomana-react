import SubTabs from "@/components/SubTabs";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

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
            location === "/my-systems/finances/my-business-expenses"
              ? "hidden"
              : "block"
          }
        >
          <h2 className="section-title">Systems</h2>
          <SubTabs
            tabLinks={
              location === "/my-systems/vendor-list/all" ||
              location === "/my-systems/vendor-list/utilities" ||
              location === "/my-systems/vendor-list/pest-control" ||
              location === "/my-systems/vendor-list/insurance" ||
              location === "/my-systems/vendor-list/rental-management"
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

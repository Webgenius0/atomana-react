import PageTitle from "@/components/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import MySystemsLayout from "@/layouts/MySystemsLayout";
import MyAI from "@/pages/MyAI";
import MyClassroom from "@/pages/MyClassroom";
import MyPR from "@/pages/MyPR";
import MySystems from "@/pages/MySystems";
import MyTeam from "@/pages/MyTeam";
import { createBrowserRouter } from "react-router-dom";
import Activities from "@/pages/Activities";
import OpenHouses from "@/pages/OpenHouses";
import Finances from "@/pages/Finances";
import NewListing from "@/pages/NewListing";
import NewContract from "@/pages/NewContract";
import Team from "@/pages/Team";
import Profile from "@/pages/Profile";
import AccountInformation from "@/pages/AccountInformation";
import BusinessInformation from "@/pages/BusinessInformation";
import ManageTeam from "@/pages/ManageTeam";
import AddTeamMember from "@/pages/AddTeamMember";
import EditTeamMember from "@/pages/EditTeamMember";
import MemberProfile from "@/pages/MemberProfile";
import CourseDetails from "@/pages/CourseDetails";
import OurMission from "@/pages/OurMission";
import OpenHouseForm from "@/pages/OpenHouseForm";
import MyEssentials from "@/pages/MyEssentials";
import ErrorPage from "@/pages/ErrorPage";
import AccessInstraction from "@/pages/AccessInstraction";
import HoaDocument from "@/pages/HoaDocument";
import Mypl from "@/pages/Mypl";
import MyListingExpense from "@/pages/MyListingExpense";

import OpenHouseFormDetails from "@/pages/OpenHouseFormDetails";
import MyAgentExpense from "@/pages/MyAgentExpense";
import MyBusinessExpense from "@/pages/MyBusinessExpense";
import VlAll from "@/pages/VlAll";
import VlUtilities from "@/pages/VlUtilities";
import VlPestControl from "@/pages/VlPestControl";
import VlRentalManagement from "@/pages/VlRentalManagement";
import VlInsurance from "@/pages/VlInsurance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PageTitle title="My Team">
            <MyTeam />
          </PageTitle>
        ),
      },
      {
        path: "/my-systems",
        element: <MySystemsLayout />,
        children: [
          {
            index: true,
            element: (
              <PageTitle title="My Systems">
                <MySystems />
              </PageTitle>
            ),
          },
          {
            path: "all",
            element: (
              <PageTitle title="My Systems">
                <MySystems />
              </PageTitle>
            ),
          },
          {
            path: "activities",
            element: (
              <PageTitle title="Activities">
                <Activities />
              </PageTitle>
            ),
          },
          {
            path: "open-house",
            children: [
              {
                index: true,
                element: (
                  <PageTitle title="Open House">
                    <OpenHouses />
                  </PageTitle>
                ),
              },
              {
                path: "open-house-form",
                element: (
                  <PageTitle title="Open House Form">
                    <OpenHouseForm />
                  </PageTitle>
                ),
              },
              {
                path: "open-house-form-details",
                element: (
                  <PageTitle title="Details">
                    <OpenHouseFormDetails />
                  </PageTitle>
                ),
              },
            ],
          },
          {
            path: "finances",
            children: [
              {
                index: true,
                element: (
                  <PageTitle title="Finances">
                    <Finances />
                  </PageTitle>
                ),
              },
              {
                path: "my-listing",
                element: (
                  <PageTitle title="My Listing Expenses">
                    <MyListingExpense />
                  </PageTitle>
                ),
              },
              {
                path: "my-business-expenses",
                element: (
                  <PageTitle title="My Business Expenses">
                    <MyBusinessExpense />
                  </PageTitle>
                ),
              },
              {
                path: "my-agent-expenses",
                element: (
                  <PageTitle title="PMyAgent Expenses">
                    <MyAgentExpense />
                  </PageTitle>
                ),
              },
              {
                path: "pl",
                element: (
                  <PageTitle title="My P&L">
                    <Mypl />
                  </PageTitle>
                ),
              },
            ],
          },
          {
            path: "new-listing",
            element: (
              <PageTitle title="New Listing">
                <NewListing />
              </PageTitle>
            ),
          },
          {
            path: "new-contract",
            element: (
              <PageTitle title="New Contract">
                <NewContract />
              </PageTitle>
            ),
          },
          {
            path: "team",
            children: [
              {
                index: true,
                element: (
                  <PageTitle title="Team">
                    <Team />
                  </PageTitle>
                ),
              },
              {
                path: "our-mission",
                element: (
                  <PageTitle title="Our Mission">
                    <OurMission />
                  </PageTitle>
                ),
              },
              {
                path: "hoa",
                element: (
                  <PageTitle title="Hoa Community Documents">
                    <HoaDocument />
                  </PageTitle>
                ),
              },
              {
                path: "access",
                element: (
                  <PageTitle title="Access Instruction">
                    <AccessInstraction />
                  </PageTitle>
                ),
              },
            ],
          },
          {
            path: "vendor-list/all",
            element: (
              <PageTitle title="Vendor List all">
                <VlAll />
              </PageTitle>
            ),
          },
          {
            path: "vendor-list/utilities",
            element: (
              <PageTitle title="Vendor List Utilities">
                <VlUtilities />
              </PageTitle>
            ),
          },
          {
            path: "vendor-list/pest-control",
            element: (
              <PageTitle title="Vendor List Utilities">
                <VlPestControl />
              </PageTitle>
            ),
          },
          {
            path: "vendor-list/rental-management", 
            element: (
              <PageTitle title="Vendor List Utilities">
                <VlRentalManagement />
              </PageTitle>
            ),
          },
          {
            path: "vendor-list/insurance", 
            element: (
              <PageTitle title="Vendor List Utilities">
                <VlInsurance />
              </PageTitle>
            ),
          },
         
        ],
      },
      {
        path: "/my-ai",
        element: (
          <PageTitle title="My AI">
            <MyAI />
          </PageTitle>
        ),
      },
      {
        path: "/my-classroom",
        element: (
          <PageTitle title="My Classroom">
            <MyClassroom />
          </PageTitle>
        ),
      },
      {
        path: "/course-details",
        element: (
          <PageTitle title="Course Details">
            <CourseDetails />
          </PageTitle>
        ),
      },
      {
        path: "/my-pr",
        element: (
          <PageTitle title="My PR">
            <MyPR />
          </PageTitle>
        ),
      },
      {
        path: "/profile",
        children: [
          {
            index: true,
            element: (
              <PageTitle title="Profile">
                <Profile />
              </PageTitle>
            ),
          },
          {
            path: "account-information",
            element: (
              <PageTitle title="Account Information">
                <AccountInformation />
              </PageTitle>
            ),
          },
          {
            path: "business-information",
            element: (
              <PageTitle title="Business Information">
                <BusinessInformation />
              </PageTitle>
            ),
          },
          {
            path: "manage-team",
            element: (
              <PageTitle title="Manage Team And Permission">
                <ManageTeam />
              </PageTitle>
            ),
          },
          {
            path: "add-team-member",
            element: (
              <PageTitle title="Add A Team Member">
                <AddTeamMember />
              </PageTitle>
            ),
          },
          {
            path: "edit-team-member",
            element: (
              <PageTitle title="Edit Team Member">
                <EditTeamMember />
              </PageTitle>
            ),
          },
          {
            path: "member-profile",
            element: (
              <PageTitle title="Member Profile">
                <MemberProfile />
              </PageTitle>
            ),
          },
        ],
      },
      {
        path: "/my-essentials",
        element: (
          <PageTitle title="My Essentials">
            <MyEssentials />
          </PageTitle>
        ),
      },
    ],
  },
]);

export default router;

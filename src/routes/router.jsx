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
            ],
          },
          {
            path: "finances",
            element: (
              <PageTitle title="Finances">
                <Finances />
              </PageTitle>
            ),
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
            ],
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

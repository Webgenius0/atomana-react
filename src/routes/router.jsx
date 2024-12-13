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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
            element: (
              <PageTitle title="Open House">
                <OpenHouses />
              </PageTitle>
            ),
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
            element: (
              <PageTitle title="Team">
                <Team />
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
        path: "/my-pr",
        element: (
          <PageTitle title="My PR">
            <MyPR />
          </PageTitle>
        ),
      },
      {
        path: "/profile",
        element: (
          <PageTitle title="Profile">
            <Profile />
          </PageTitle>
        ),
      },
      {
        path: "/account-information",
        element: (
          <PageTitle title="Account Information">
            <AccountInformation />
          </PageTitle>
        ),
      },
    ],
  },
]);

export default router;

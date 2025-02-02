import PageTitle from "@/components/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import MySystemsLayout from "@/layouts/MySystemsLayout";
import MyAI from "@/pages/MyAI";
import MyClassroom from "@/pages/MyClassroom";
import MyPR from "@/pages/MyPR";
import MySystems from "@/pages/MySystems";
import MyTeam from "@/pages/MyTeam";
import { createBrowserRouter } from "react-router-dom";
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
import VlUtilities from "@/pages/VlUtilities";
import VlPestControl from "@/pages/VlPestControl";
import VlRentalManagement from "@/pages/VlRentalManagement";
import VlInsurance from "@/pages/VlInsurance";
import VlBrightHomeInspection from "@/pages/VlBrightHomeInspection";
import AgentLeaderBoard from "@/pages/AgentLeaderBoard";
import Login from "@/pages/Login";
import VerifyOTP from "@/pages/VerifyOTP";
import SignUp from "@/pages/SignUp";
import ForgetPassword from "@/pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import VendorList from "@/pages/VendorList";
import VendorListLayout from "@/layouts/VendorListLayout";
import AddVendor from "@/pages/AddVendor";
import NewListingInformationForm from "@/pages/NewListingInformationForm";
import Courses from "@/pages/Courses";
import BlogCourseDetails from "@/pages/BlogCourseDetails";
import VideoCourseDetails from "@/pages/VideoCourseDetails";
import AddLessons from "@/pages/AddLessons";
import CreateCourse from "@/pages/CreateCourse";
import UpdateLesson from "@/pages/UpdateLesson";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
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
        element: (
          <PageTitle title="My Systems">
            <MySystemsLayout />
          </PageTitle>
        ),
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
            path: "open-house",
            element: (
              <PageTitle title="Open House">
                <OpenHouses />
              </PageTitle>
            )
          },
          {
            path: "open-house/open-house-form",
            element: (
              <PageTitle title="Open House Form">
                <OpenHouseForm />
              </PageTitle>
            ),
          },
          {
            path: "open-house/open-house-form-details",
            element: (
              <PageTitle title="Details">
                <OpenHouseFormDetails />
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
            path: "finances/my-listing",
            element: (
              <PageTitle title="My Listing Expenses">
                <MyListingExpense />
              </PageTitle>
            ),
          },
          {
            path: "finances/my-business-expenses",
            element: (
              <PageTitle title="My Business Expenses">
                <MyBusinessExpense />
              </PageTitle>
            ),
          },
          {
            path: "finances/my-agent-expenses",
            element: (
              <PageTitle title="My Agent Expenses">
                <MyAgentExpense />
              </PageTitle>
            ),
          },              
          {
            path: "finances/pl",
            element: (
              <PageTitle title="My P&L">
                <Mypl />
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
            path: "new-listing/new-listing-information-form",
            element: (
              <PageTitle title="New Listing Information Form">
                <NewListingInformationForm />
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
          {
            path: "team/our-mission",
            element: (
              <PageTitle title="Our Mission">
                <OurMission />
              </PageTitle>
            ),
          },
          {
            path: "team/hoa",
            element: (
              <PageTitle title="Hoa Community Documents">
                <HoaDocument />
              </PageTitle>
            ),
          },
          {
            path: "team/access",
            element: (
              <PageTitle title="Access Instruction">
                <AccessInstraction />
              </PageTitle>
            ),
          },
          {
            path: "vendor-list",
            element: (
              <PageTitle title="Vendor List">
                <VendorListLayout />
              </PageTitle>
            ),
            children: [
              {
                index: true,
                element: (
                  <PageTitle title="Vendor List">
                    <VendorList />
                  </PageTitle>
                ),
              },
              {
                path: "utilities",
                element: (
                  <PageTitle title="Vendor List Utilities">
                    <VlUtilities />
                  </PageTitle>
                ),
              },
              {
                path: "pest-control",
                element: (
                  <PageTitle title="Vendor List Utilities">
                    <VlPestControl />
                  </PageTitle>
                ),
              },
              {
                path: "rental-management",
                element: (
                  <PageTitle title="Vendor List Utilities">
                    <VlRentalManagement />
                  </PageTitle>
                ),
              },
              {
                path: "insurance",
                element: (
                  <PageTitle title="Vendor List Utilities">
                    <VlInsurance />
                  </PageTitle>
                ),
              },
              {
                path: "add-vendor",
                element: (
                  <PageTitle title="Add Vendor">
                    <AddVendor/>
                  </PageTitle>
                ),
              },
              {
                path: "description",
                element: (
                  <PageTitle title="Bright Home Inspections">
                    <VlBrightHomeInspection />
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
        path: "/my-classroom/courses",
        element: (
          <PageTitle title="All Courses">
            <Courses />
          </PageTitle>
        ),
      },
      {
        path: "/my-classroom/blog/:id",
        element: (
          <PageTitle title="Blog">
            < BlogCourseDetails/>
          </PageTitle>
        ),
      },
      {
        // path: "/my-classroom/:id",
        path: "/my-classroom/video/:id",
        element: (
          <PageTitle title="Video">
            < VideoCourseDetails/>
          </PageTitle>
        ),
      },
      {
        path: "/my-classroom/create-course",
        element: (
          <PageTitle title="Course Details">
            <CreateCourse/>
          </PageTitle>
        ),
      },
      {
        path: "/my-classroom/create-course/add-lessons",
        element: (
          <PageTitle title="Add Lessons">
            <AddLessons/>
          </PageTitle>
        )
      },
      {
        path: "/my-classroom/create-course/edit-lesson/:id",
        element: (
          <PageTitle title="Update Lesson">
            <UpdateLesson/>
          </PageTitle>
        )
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
      {
        path: "/agent-leaderboard",
        element: (
          <PageTitle title="Agent Leaderboard">
            <AgentLeaderBoard />
          </PageTitle>
        ),
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);

export default router;

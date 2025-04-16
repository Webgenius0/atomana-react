import PageTitle from '@/components/PageTitle';
import MainLayout from '@/layouts/MainLayout';
import MySystemsLayout from '@/layouts/MySystemsLayout';
import VendorListLayout from '@/layouts/VendorListLayout';
import AccessInstructions from '@/pages/access-instructions/AccessInstructions';
import AddAccessInstruction from '@/pages/access-instructions/AddAccessInstruction';
import ViewAccessInstruction from '@/pages/access-instructions/ViewAccessInstruction';
import AddLessons from '@/pages/AddLessons';
import AddVendor from '@/pages/AddVendor';
import AgentLeaderBoard from '@/pages/AgentLeaderBoard';
import BlogCourseDetails from '@/pages/BlogCourseDetails';
import Courses from '@/pages/Courses';
import CreateCourse from '@/pages/CreateCourse';
import AddPassword from '@/pages/docs/AddPassword';
import CreateNote from '@/pages/docs/CreateNote';
import DocsLayout from '@/pages/docs/DocsLayout';
import EditNote from '@/pages/docs/EditNote';
import EditPassword from '@/pages/docs/EditPassword';
import PasswordListHome from '@/pages/docs/PasswordListHome';
import SharedNotesHome from '@/pages/docs/SharedNotesHome';
import ViewSingleNote from '@/pages/docs/ViewSingleNote';
import ViewSinglePassword from '@/pages/docs/ViewSinglePassword';
import ErrorPage from '@/pages/ErrorPage';
import Finances from '@/pages/Finances';
import ForgetPassword from '@/pages/ForgetPassword';
import ListingInformationList from '@/pages/listing-information/ListingInformationList';
import ViewListingInformation from '@/pages/listing-information/ViewListingInformation';
import Login from '@/pages/Login';
import MyAgentEarnings from '@/pages/MyAgentEarnings';
import MyAI from '@/pages/MyAI';
import MyBusinessExpense from '@/pages/MyBusinessExpense';
import MyClassroom from '@/pages/MyClassroom';
import MyEssentials from '@/pages/MyEssentials';
import MyListingExpense from '@/pages/MyListingExpense';
import Mypl from '@/pages/Mypl';
import MyPR from '@/pages/MyPR';
import MySystems from '@/pages/MySystems';
import MyTeam from '@/pages/MyTeam';
import NewContract from '@/pages/NewContract';
import NewListing from '@/pages/NewListing';
import NewListingInformationForm from '@/pages/NewListingInformationForm';
import OpenHouseFeedbackForm from '@/pages/open-houses/OpenHouseFeedbackForm';
import OpenHouseList from '@/pages/open-houses/OpenHouseList';
import OpenHouseRequestForm from '@/pages/open-houses/OpenHouseRequestForm';
import OpenHouses from '@/pages/open-houses/OpenHouses';
import ViewOpenHouse from '@/pages/open-houses/ViewOpenHouse';
import AccountInformation from '@/pages/profile/AccountInformation';
import AddTeamMember from '@/pages/profile/AddTeamMember';
import BusinessInformation from '@/pages/profile/BusinessInformation';
import EditTeamMember from '@/pages/profile/EditTeamMember';
import ManageTeam from '@/pages/profile/ManageTeam';
import MemberProfile from '@/pages/profile/MemberProfile';
import Profile from '@/pages/profile/Profile';
import ResetPassword from '@/pages/ResetPassword';
import SalesTracker from '@/pages/SalesTracker';
import SignUp from '@/pages/SignUp';
import Team from '@/pages/Team';
import UpdateLesson from '@/pages/UpdateLesson';
import VendorCategories from '@/pages/VendorCategories';
import VendorCategoryDetails from '@/pages/VendorCategoryDetails';
import VendorDetails from '@/pages/VendorDetails';
import VendorList from '@/pages/VendorList';
import VerifyForgetPasswordOTP from '@/pages/VerifyForgetPasswordOTP';
import VerifyOTP from '@/pages/VerifyOTP';
import VideoCourseDetails from '@/pages/VideoCourseDetails';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
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
        path: '/my-systems',
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
            path: 'open-house',
            element: (
              <PageTitle title="Open House">
                <OpenHouses />
              </PageTitle>
            ),
          },
          {
            path: 'open-house/open-house-list',
            element: (
              <PageTitle title="Open House List">
                <OpenHouseList />
              </PageTitle>
            ),
          },
          {
            path: 'open-house/open-house-form',
            element: (
              <PageTitle title="Open House Form">
                <OpenHouseRequestForm />
              </PageTitle>
            ),
          },
          {
            path: 'open-house/open-house-feedback-form',
            element: (
              <PageTitle title="Open House Feedback Form">
                <OpenHouseFeedbackForm />
              </PageTitle>
            ),
          },
          {
            path: 'open-house/:id',
            element: (
              <PageTitle title="Details">
                <ViewOpenHouse />
              </PageTitle>
            ),
          },
          {
            path: 'finances',
            element: (
              <PageTitle title="Finances">
                <Finances />
              </PageTitle>
            ),
          },
          {
            path: 'finances/my-listing',
            element: (
              <PageTitle title="My Listing Expenses">
                <MyListingExpense />
              </PageTitle>
            ),
          },
          {
            path: 'finances/my-business-expenses',
            element: (
              <PageTitle title="My Business Expenses">
                <MyBusinessExpense />
              </PageTitle>
            ),
          },
          {
            path: 'finances/my-agent-earnings',
            element: (
              <PageTitle title="My Agent Earnings">
                <MyAgentEarnings />
              </PageTitle>
            ),
          },
          {
            path: 'finances/pl',
            element: (
              <PageTitle title="My P&L">
                <Mypl />
              </PageTitle>
            ),
          },
          {
            path: 'new-listing',
            element: (
              <PageTitle title="New Listing">
                <NewListing />
              </PageTitle>
            ),
          },
          {
            path: 'new-listing/listing-information',
            element: (
              <PageTitle title="New Listing Information">
                <ListingInformationList />
              </PageTitle>
            ),
          },
          {
            path: 'new-listing/:id',
            element: (
              <PageTitle title="New Listing">
                <ViewListingInformation />
              </PageTitle>
            ),
          },
          {
            path: 'new-listing/new-listing-information-form',
            element: (
              <PageTitle title="New Listing Information Form">
                <NewListingInformationForm />
              </PageTitle>
            ),
          },
          {
            path: 'new-contract',
            element: (
              <PageTitle title="New Contract">
                <NewContract />
              </PageTitle>
            ),
          },
          {
            path: 'team',
            element: (
              <PageTitle title="Team">
                <Team />
              </PageTitle>
            ),
          },
          //   {
          //     path: 'team/our-mission',
          //     element: (
          //       <PageTitle title="Our Mission">
          //         <OurMission />
          //       </PageTitle>
          //     ),
          //   },
          //   {
          //     path: 'team/hoa',
          //     element: (
          //       <PageTitle title="Hoa Community Documents">
          //         <HoaDocument />
          //       </PageTitle>
          //     ),
          //   },
          {
            path: 'team/access-instructions',
            element: (
              <PageTitle title="Access Instructions">
                <AccessInstructions />
              </PageTitle>
            ),
          },
          {
            path: 'team/access-instructions/add',
            element: (
              <PageTitle title="Add Access Instruction">
                <AddAccessInstruction />
              </PageTitle>
            ),
          },
          {
            path: 'team/access-instructions/:id',
            element: (
              <PageTitle title="View Access Instruction">
                <ViewAccessInstruction />
              </PageTitle>
            ),
          },
          {
            path: 'team/sales-tracker',
            element: (
              <PageTitle title="Sales Tracker">
                <SalesTracker />
              </PageTitle>
            ),
          },
          {
            path: 'vendor-list',
            element: (
              <PageTitle title="Vendor List">
                <VendorListLayout />
              </PageTitle>
            ),
            children: [
              {
                index: true,
                element: (
                  <PageTitle title="Vendor List Categories">
                    <VendorCategories />
                  </PageTitle>
                ),
              },
              {
                path: ':slug',
                element: (
                  <PageTitle title="Vendor List">
                    <VendorList />
                  </PageTitle>
                ),
              },
              {
                path: 'add-vendor',
                element: (
                  <PageTitle title="Add Vendor">
                    <AddVendor />
                  </PageTitle>
                ),
              },
              {
                path: ':categorySlug/:vendorSlug',
                element: (
                  <PageTitle title="Vendor Details">
                    <VendorDetails />
                  </PageTitle>
                ),
              },
              {
                path: ':categorySlug',
                element: (
                  <PageTitle title="Vendor Category Details">
                    <VendorCategoryDetails />
                  </PageTitle>
                ),
              },
            ],
          },
        ],
      },
      {
        path: '/my-ai',
        element: (
          <PageTitle title="My AI">
            <MyAI />
          </PageTitle>
        ),
      },
      {
        path: '/my-systems/team/docs/',
        element: <DocsLayout />,
        children: [
          {
            path: 'shared-notes',
            element: (
              <PageTitle title="Shared Notes">
                <SharedNotesHome />
              </PageTitle>
            ),
          },
          {
            path: 'shared-notes/:slug',
            element: (
              <PageTitle title="Shared Notes">
                <ViewSingleNote />
              </PageTitle>
            ),
          },
          {
            path: 'shared-notes/create-note',
            element: (
              <PageTitle title="Create Note">
                <CreateNote />
              </PageTitle>
            ),
          },
          {
            path: 'shared-notes/edit-note/:slug',
            element: (
              <PageTitle title="Edit Note">
                <EditNote />
              </PageTitle>
            ),
          },
          {
            path: 'password-list',
            element: (
              <PageTitle title="Password List">
                <PasswordListHome />
              </PageTitle>
            ),
          },
          {
            path: 'password-list/:slug',
            element: (
              <PageTitle title="Password List">
                <ViewSinglePassword />
              </PageTitle>
            ),
          },
          {
            path: 'password-list/add-password',
            element: (
              <PageTitle title="Add Password">
                <AddPassword />
              </PageTitle>
            ),
          },
          {
            path: 'password-list/edit-password/:slug',
            element: (
              <PageTitle title="Edit Password">
                <EditPassword />
              </PageTitle>
            ),
          },
        ],
      },
      {
        path: '/my-classroom',
        element: (
          <PageTitle title="My Classroom">
            <MyClassroom />
          </PageTitle>
        ),
      },
      {
        path: '/my-classroom/courses',
        element: (
          <PageTitle title="All Courses">
            <Courses />
          </PageTitle>
        ),
      },
      {
        path: '/my-classroom/blog/:id',
        element: (
          <PageTitle title="Blog">
            <BlogCourseDetails />
          </PageTitle>
        ),
      },
      {
        // path: "/my-classroom/:id",
        path: '/my-classroom/video/:id',
        element: (
          <PageTitle title="Video">
            <VideoCourseDetails />
          </PageTitle>
        ),
      },
      {
        path: '/my-classroom/create-course',
        element: (
          <PageTitle title="Course Details">
            <CreateCourse />
          </PageTitle>
        ),
      },
      {
        path: '/my-classroom/create-course/add-lessons',
        element: (
          <PageTitle title="Add Lessons">
            <AddLessons />
          </PageTitle>
        ),
      },
      {
        path: '/my-classroom/create-course/edit-lesson/:id',
        element: (
          <PageTitle title="Update Lesson">
            <UpdateLesson />
          </PageTitle>
        ),
      },
      {
        path: '/my-pr',
        element: (
          <PageTitle title="My PR">
            <MyPR />
          </PageTitle>
        ),
      },
      {
        path: '/profile',
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
            path: 'account-information',
            element: (
              <PageTitle title="Account Information">
                <AccountInformation />
              </PageTitle>
            ),
          },
          {
            path: 'business-information',
            element: (
              <PageTitle title="Business Information">
                <BusinessInformation />
              </PageTitle>
            ),
          },
          {
            path: 'manage-team',
            element: (
              <PageTitle title="Manage Team And Permission">
                <ManageTeam />
              </PageTitle>
            ),
          },
          {
            path: 'add-team-member',
            element: (
              <PageTitle title="Add A Team Member">
                <AddTeamMember />
              </PageTitle>
            ),
          },
          {
            path: 'edit-team-member/:slug',
            element: (
              <PageTitle title="Edit Team Member">
                <EditTeamMember />
              </PageTitle>
            ),
          },
          {
            path: 'member-profile',
            element: (
              <PageTitle title="Member Profile">
                <MemberProfile />
              </PageTitle>
            ),
          },
        ],
      },
      {
        path: '/my-essentials',
        element: (
          <PageTitle title="My Essentials">
            <MyEssentials />
          </PageTitle>
        ),
      },
      {
        path: '/agent-leaderboard',
        element: (
          <PageTitle title="Agent Leaderboard">
            <AgentLeaderBoard />
          </PageTitle>
        ),
      },
    ],
  },
  {
    path: '/sign-in',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/verify-otp',
    element: <VerifyOTP />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/forget-password/verify-otp',
    element: <VerifyForgetPasswordOTP />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
]);

export default router;

import PageTitle from "@/components/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import MyAI from "@/pages/MyAI";
import MyClassroom from "@/pages/MyClassroom";
import MyPR from "@/pages/MyPR";
import MySystems from "@/pages/MySystems";
import MyTeam from "@/pages/MyTeam";
import { createBrowserRouter } from "react-router-dom";

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
        element: (
          <PageTitle title="My Systems">
            <MySystems />
          </PageTitle>
        ),
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
    ],
  },
]);

export default router;

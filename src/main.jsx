import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.jsx";
import "@/assets/styles.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { LessonDataProvider } from "./context/LessonDataProvider";
import { NewCourseDataProvider } from "./context/NewCourseDataProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <NewCourseDataProvider>
            <LessonDataProvider>
              <RouterProvider router={router} />
              <Toaster />
            </LessonDataProvider>
          </NewCourseDataProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);

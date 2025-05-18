import '@/assets/styles.css';
import router from '@/routes/router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { LessonDataProvider } from './context/LessonDataProvider';
import { NewCourseDataProvider } from './context/NewCourseDataProvider';

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    const handleWheel = (event) => {
      if (
        document.activeElement.type === 'number' &&
        document.activeElement === event.target
      ) {
        document.activeElement.blur(); // remove focus to prevent scroll change
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
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
  );
}

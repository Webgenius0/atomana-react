import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#151515] text-white px-4 sm:px-6 lg:px-8">
      {/* 404 Error Code */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#009696] mb-4 sm:mb-6">
        404
      </h1>

      {/* Error Message */}
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#024040] text-center mb-2 sm:mb-4">
        Oops! Page Not Found
      </h2>

      <p className="text-base sm:text-lg text-[#333] text-center max-w-md mb-6">
        The page you are looking for doesn’t exist or has been moved. Let’s get
        you back on track!
      </p>

      {/* Go Back Home Button */}
      <Link
        to="/"
        className="px-4 sm:px-5 py-2 sm:py-3 rounded-md text-white bg-[#009696] hover:bg-[#024040] transition duration-300 ease-in-out text-sm sm:text-base"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

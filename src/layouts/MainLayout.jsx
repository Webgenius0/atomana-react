import Header from "@/components/shared/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <div className="pb-[84px] md:pb-0">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

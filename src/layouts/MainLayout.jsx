import Header from "@/components/shared/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <div className="pb-[84px] md:pb-0">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

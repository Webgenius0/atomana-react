import { Outlet, useLocation } from "react-router-dom";

const MySystemsLayout = () => {
  const location = useLocation().pathname;

  return (
    <section className="pt-0 sm:pt-3 md:pt-6">
      <div className="my-container">
        <Outlet />
      </div>
    </section>
  );
};

export default MySystemsLayout;

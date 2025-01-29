import { Outlet } from "react-router-dom";

const MySystemsLayout = () => {

  return (
    <section className="pt-0 sm:pt-3">
      <div className="my-container">
        <Outlet />
      </div>
    </section>
  );
};

export default MySystemsLayout;

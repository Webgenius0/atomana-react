import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const TabBtn = forwardRef(({ children, to, ...props }, ref) => {
  return (
    <NavLink
      ref={ref}
      className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
});

TabBtn.displayName = "Tab Button";

export default TabBtn;

import cn from "@/lib/utils/cn";
import { forwardRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const TabBtn = forwardRef(({ children, className, to, ...props }, ref) => {
  const { pathname } = useLocation();

  const isActiveLocation =
    pathname === "/my-systems" || pathname === "/my-systems/all";

  return (
    <NavLink
      ref={ref}
      className={({ isActive }) =>
        cn(
          "py-[2.5px] px-2.5 text-center font-medium leading-[21px] tracking-[-0.12px] bg-inherit border-none cursor-pointer duration-300 ease-linear text-xs rounded-full active:scale-95 text-secondary hover:bg-light hover:text-dark whitespace-nowrap",
          isActive && "font-bold text-dark bg-light",
          isActiveLocation &&
            to === "/my-systems/all" &&
            "font-bold text-dark bg-light",
          className
        )
      }
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
});

TabBtn.displayName = "Tab Button";

export default TabBtn;

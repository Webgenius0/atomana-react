import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...props) => {
  return twMerge(clsx(props));
};

export default cn;

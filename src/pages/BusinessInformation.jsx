import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import React from "react";
import { Link } from "react-router-dom";

const BusinessInformation = () => {
  return (
    <div className="my-container pt-12 pb-3">
      <Link
        to="/profile"
        className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
      >
        <ArrowLeftSvg />
        <h2 className="section-title">Business Information </h2>
      </Link>

      <div className="mt-[25px]">
        <div className="space-y-[2px] border-b border-secondPrimary py-4">
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
            Business name
          </p>
          <p className="text-sm font-medium leading-5 text-light">
            Spears Group
          </p>
        </div>

        <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
          <div className="space-y-[2px]">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Business address
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              341 Horton Ave <br />
              San Francisco, CA 94118
            </p>
          </div>

          <button className="text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase">
            EDIT
          </button>
        </div>
        <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
          <div className="space-y-[2px]">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Business phone number
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              208-913-4467
            </p>
          </div>

          <button className="text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase">
            MANAGE
          </button>
        </div>
        <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
          <div className="space-y-[2px]">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Phone number
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              208-913-4467
            </p>
          </div>

          <button className="text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase">
            MANAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;

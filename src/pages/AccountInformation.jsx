import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import FacebookSvg from "@/components/svgs/FacebookSvg";
import InstaSvg from "@/components/svgs/InstaSvg";
import XSvg from "@/components/svgs/XSvg";
import React from "react";
import { Link } from "react-router-dom";

const AccountInformation = () => {
  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link
            to="/profile"
          >
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Account Information</h2>
        </div>
        <div className="mt-[25px]">
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Full name
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              Elena Laol
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Role</p>
            <p className="text-sm font-medium leading-5 text-light">Admin</p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              License Number
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              329792802
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              ECAR ID
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              329792802
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Status
            </p>
            <p className="text-sm font-medium leading-5 text-light">Active </p>
          </div>

          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Home address
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                341 Horton Ave <br />
                San Francisco, CA 94118
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              EDIT
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Personal email address
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                elena.laol@gmail.com
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              MANAGE
            </Link>
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

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              MANAGE
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Birthday
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                11/21/1985
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              MANAGE
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Spears Group anniversary Home address
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                06/22/2019
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              EDIT
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc] mb-1">
                Social media
              </p>
              <div className="flex items-center gap-5">
                <InstaSvg />
                <XSvg />
                <FacebookSvg />
              </div>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              EDIT
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                About Me
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              EDIT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;

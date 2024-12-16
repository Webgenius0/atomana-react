import React from "react";
import profileAvatar from "@/assets/images/profile.png";
import { Link } from "react-router-dom";
import ArrowGreaterSvg from "@/components/svgs/ArrowGreaterSvg";

const Profile = () => {
  return (
    <div className="my-container">
      <div className="space-y-[25px] py-[25px]">
        <div className="flex flex-col items-center gap-2 mb-6">
          <img
            src={profileAvatar}
            className="w-14 h-14 md:h-16 md:w-16 lg:w-[75px] lg:h-[75px] flex-shrink-0 rounded-full"
            alt="profile avatar"
          />

          <p className="text-light text-center text-xl font-medium leading-[21px] tracking-[-0.2px]">
            Elena Laol
          </p>
        </div>

        <div className="flex flex-col gap-[25px]">
          <div>
            <h2 className="section-title mb-5">Personal</h2>
            <Link
              to="/profile/account-information"
              className="flex items-center justify-between gap-4 border-b border-secondPrimary py-4 duration-300 hover:opacity-60"
            >
              <span className="text-sm font-medium leading-5 text-light">
                Account Information
              </span>
              <ArrowGreaterSvg />
            </Link>
            <Link className="flex items-center justify-between gap-4 border-b border-secondPrimary py-4 duration-300 hover:opacity-60">
              <span className="text-sm font-medium leading-5 text-light">
                Password and Security
              </span>
              <ArrowGreaterSvg />
            </Link>
          </div>
          <div>
            <h2 className="section-title mb-5">Business</h2>
            <Link
              to="/profile/business-information"
              className="flex items-center justify-between gap-4 border-b border-secondPrimary py-4 duration-300 hover:opacity-60"
            >
              <span className="text-sm font-medium leading-5 text-light">
                Business Information
              </span>
              <ArrowGreaterSvg />
            </Link>
            <Link
              to="/profile/manage-team"
              className="flex items-center justify-between gap-4 border-b border-secondPrimary py-4 duration-300 hover:opacity-60"
            >
              <span className="text-sm font-medium leading-5 text-light">
                Manage Team and Permissions
              </span>
              <ArrowGreaterSvg />
            </Link>
          </div>
          <div>
            <h2 className="section-title mb-5">Financial</h2>
            <Link className="flex items-center justify-between gap-4 border-b border-secondPrimary py-4 duration-300 hover:opacity-60">
              <span className="text-sm font-medium leading-5 text-light">
                Manage Payment Methods
              </span>
              <ArrowGreaterSvg />
            </Link>
            <Link className="flex items-center justify-between gap-4 border-b border-secondPrimary py-4 duration-300 hover:opacity-60">
              <span className="text-sm font-medium leading-5 text-light">
                Invoices
              </span>
              <ArrowGreaterSvg />
            </Link>
          </div>
          <div>
            <h2 className="section-title mb-5">Resources</h2>
            <Link className="flex items-center justify-between gap-4 border-b border-secondPrimary py-4 duration-300 hover:opacity-60">
              <span className="text-sm font-medium leading-5 text-light">
                Support
              </span>
              <ArrowGreaterSvg />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

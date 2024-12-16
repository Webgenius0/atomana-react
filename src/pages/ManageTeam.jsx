import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PlusSvg from "@/components/svgs/PlusSvg";
import SearchGraySvg from "@/components/svgs/SearchGraySvg";
import React from "react";
import { Link } from "react-router-dom";
import memberImg from "@/assets/images/user.png";
import PhoneSvg from "@/components/svgs/PhoneSvg";
import MessageSvg from "@/components/svgs/MessageSvg";
import MailSvg from "@/components/svgs/MailSvg";

const ManageTeam = () => {
  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center justify-between gap-x-1 gap-y-3 flex-wrap">
          <Link
            to="/profile"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
          >
            <ArrowLeftSvg />
            <h2 className="section-title">Manage Team & Permissions </h2>
          </Link>

          <Link
            to="/profile/add-team-member"
            className="flex items-center gap-2.5 text-sm leading-6 tracking-[-0.14px] text-light hover:opacity-60 duration-300 ml-auto "
          >
            Add team member
            <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
              <PlusSvg />
            </span>
          </Link>
        </div>
        <label className="flex items-center gap-2.5 px-4 rounded-full border border-secondPrimary bg-gradient-to-r from-secondPrimary to-[#1a1a1a] mt-5 max-w-[670px] w-full">
          <SearchGraySvg />
          <input
            type="text"
            placeholder="Search by user"
            className="placeholder:text-secondary text-light text-xs font-medium leading-[21px] tracking-[-0.12px] bg-inherit py-2.5 focus:none outline-none w-full"
          />
        </label>

        <div className="mt-4 md:mt-[25px]">
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-0 md:pr-5">
            <div className="flex items-center gap-1">
              <img
                src={memberImg}
                alt="member image"
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-[2px]">
                <p className="text-light text-sm sm:text-[15px] md:text-base font-medium leading-[18px] tracking-[-0.16px]">
                  Lindsey Sargo
                </p>
                <p className="text-sm font-medium leading-5 text-light">
                  Agent
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <PhoneSvg />
              <MessageSvg />
              <MailSvg />
              <Link
                to="/profile/edit-team-member"
                className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
              >
                EDIT
              </Link>
            </div>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-0 md:pr-5">
            <div className="flex items-center gap-1">
              <img
                src={memberImg}
                alt="member image"
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-[2px]">
                <p className="text-light text-sm sm:text-[15px] md:text-base font-medium leading-[18px] tracking-[-0.16px]">
                  Lindsey Sargo
                </p>
                <p className="text-sm font-medium leading-5 text-light">
                  Agent
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <PhoneSvg />
              <MessageSvg />
              <MailSvg />
              <Link
                to="/profile/edit-team-member"
                className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
              >
                EDIT
              </Link>
            </div>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-0 md:pr-5">
            <div className="flex items-center gap-1">
              <img
                src={memberImg}
                alt="member image"
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-[2px]">
                <p className="text-light text-sm sm:text-[15px] md:text-base font-medium leading-[18px] tracking-[-0.16px]">
                  Lindsey Sargo
                </p>
                <p className="text-sm font-medium leading-5 text-light">
                  Agent
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <PhoneSvg />
              <MessageSvg />
              <MailSvg />
              <Link
                to="/edit-team-member"
                className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
              >
                EDIT
              </Link>
            </div>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-0 md:pr-5">
            <div className="flex items-center gap-1">
              <img
                src={memberImg}
                alt="member image"
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-[2px]">
                <p className="text-light text-sm sm:text-[15px] md:text-base font-medium leading-[18px] tracking-[-0.16px]">
                  Lindsey Sargo
                </p>
                <p className="text-sm font-medium leading-5 text-light">
                  Agent
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <PhoneSvg />
              <MessageSvg />
              <MailSvg />
              <Link
                to="/profile/edit-team-member"
                className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
              >
                EDIT
              </Link>
            </div>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-0 md:pr-5">
            <div className="flex items-center gap-1">
              <img
                src={memberImg}
                alt="member image"
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-[2px]">
                <p className="text-light text-sm sm:text-[15px] md:text-base font-medium leading-[18px] tracking-[-0.16px]">
                  Lindsey Sargo
                </p>
                <p className="text-sm font-medium leading-5 text-light">
                  Agent
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <PhoneSvg />
              <MessageSvg />
              <MailSvg />
              <Link
                to="/profile/edit-team-member"
                className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
              >
                EDIT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTeam;

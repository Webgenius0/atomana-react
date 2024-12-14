import React from "react";
import { Link } from "react-router-dom";
import PhoneSvg from "@/components/svgs/PhoneSvg";
import MessageSvg from "@/components/svgs/MessageSvg";
import MailSvg from "@/components/svgs/MailSvg";
import FileSvg from "@/components/svgs/FileSvg";
import profileAvatar from "@/assets/images/member.png";

const MemberProfile = () => {
  return (
    <div className="my-container space-y-[25px] py-[25px]">
      <div className="flex flex-col items-center gap-2 mb-6">
        <img
          src={profileAvatar}
          className="w-[75px] h-[75px] flex-shrink-0 rounded-full"
          alt="profile avatar"
        />

        <p className="text-light text-center text-xl font-medium leading-[21px] tracking-[-0.2px]">
          Jamal Ahmed
        </p>
        <p className="text-light text-center text-[13px] leading-[21px] tracking-[-0.13px]">
          Sales Lead
        </p>
        <div className="flex items-center gap-5">
          <PhoneSvg />
          <MessageSvg />
          <MailSvg />
          <Link
            to="/profile/edit-team-member"
            className="text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
          >
            EDIT
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="space-y-[2px] border-b border-secondPrimary py-4">
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Role</p>
          <p className="text-sm font-medium leading-5 text-light">Viewer</p>
        </div>
        <div className="space-y-[2px] border-b border-secondPrimary py-4">
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
            Address
          </p>
          <p className="text-sm font-medium leading-5 text-light">
            341 Horton Ave <br />
            San Francisco, CA 94118
          </p>
        </div>
        <div className="space-y-[2px] border-b border-secondPrimary py-4">
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
            Email address
          </p>
          <p className="text-sm font-medium leading-5 text-light">
            j.ahmed@homegrown.com
          </p>
        </div>
        <div className="space-y-[2px] border-b border-secondPrimary py-4">
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
            Phone number
          </p>
          <p className="text-sm font-medium leading-5 text-light">
            673-278-9091
          </p>
        </div>
        <div className="space-y-[2px] border-b border-secondPrimary py-4">
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
            DOB <span className="text-xs font-normal">(optional)</span>
          </p>
          <p className="text-sm font-medium leading-5 text-light">04/10/1984</p>
        </div>
        <div className="space-y-[2px] border-b border-secondPrimary py-4">
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
            Employment agreement
          </p>
          <p className="text-sm font-medium leading-5 text-light flex items-center gap-1">
            <FileSvg />
            Jamal_Ahmed_Employee_Contract.pdf
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;

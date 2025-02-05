import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PlusSvg from "@/components/svgs/PlusSvg";
import SearchGraySvg from "@/components/svgs/SearchGraySvg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import memberImg from "@/assets/images/user.png";
import PhoneSvg from "@/components/svgs/PhoneSvg";
import MessageSvg from "@/components/svgs/MessageSvg";
import MailSvg from "@/components/svgs/MailSvg";

const ManageTeam = () => {
  const teamMembers = [
    { id: 1, name: "Lindsey Sargo", role: "Agent" },
    { id: 2, name: "Antony Sargo", role: "Agent" },
    { id: 3, name: "John Sargo", role: "Agent" },
    { id: 4, name: "Lenon Sargo", role: "Agent" },
    { id: 5, name: "Lindsey Sargo", role: "Agent" },
  ];

  const [members, setMembers] = useState(teamMembers);
  const [searchMember, setSearchMember] = useState("");

  const handleSearch = (e) => {
    setSearchMember(e.target.value);
  };

  // Filter the team members based on whether the name includes each part of the search term
  const filteredNames = members.filter((member) => {
    const searchTerms = searchMember.toLowerCase().split(" ");  
    return searchTerms.every(term => 
      member.name.toLowerCase().includes(term)  
    );
  });

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center justify-between gap-x-1 gap-y-3 flex-wrap">
          <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
              <Link
              to="/profile"
            >
              <ArrowLeftSvg />
            </Link>
              <h2 className="section-title">Manage Team & Permissions </h2>
          </div>
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
          <SearchGraySvg/>
          <input
            type="text"
            placeholder="Search by user"
            className="placeholder:text-secondary text-light text-xs font-medium leading-[21px] tracking-[-0.12px] bg-inherit py-2.5 focus:none outline-none w-full"
            value={searchMember}
            onChange={handleSearch}
          />
        </label>

        <div className="mt-4 md:mt-[25px]">
          {filteredNames.length === 0 ? (
            <p className="text-light text-sm">No members found</p>
          ) : (
            filteredNames.map((member) => (
              <div
                key={member.id}
                className="border-b border-secondPrimary py-4 flex items-center justify-between pr-0 md:pr-5"
              >
                <div className="flex items-center gap-1">
                  <img
                    src={memberImg}
                    alt="member image"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="space-y-[2px]">
                    <p className="text-light text-sm sm:text-[15px] md:text-base font-medium leading-[18px] tracking-[-0.16px]">
                      {member.name}
                    </p>
                    <p className="text-sm font-medium leading-5 text-light">
                      {member.role}
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageTeam;

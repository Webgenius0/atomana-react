import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import React from "react";
import { Link } from "react-router-dom";

const OurMission = () => {
  const mission = [
    {
      title: "Excellence",
      desc: "Consistent execution, Do things the right way consistently",
    },
    {
      title: "Relentless",
      desc: "Persist without exception",
    },
    {
      title: "Adaptive",
      desc: "Today’s market isn’t yesterday’s market",
    },
    {
      title: "Collaborate",
      desc: "Get to solutions together",
    },
    {
      title: "Extreme Ownership",
      desc: "We own our problems and work towards solutions",
    },
  ];

  return (
    <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
      <div className="flex items-center gap-4 justify-between">
        <Link
          to="/my-systems/team"
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
        >
          <ArrowLeftSvg />
          <h2 className="section-title">Our Mission</h2>
        </Link>

        <div className="flex items-center gap-2.5">
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button>
        </div>
      </div>

      <div>
        <h2 className="section-title my-5 md:my-8 lg:my-[50px]">
          To Create Lifelong Relationships and Raving Fans
        </h2>

        <div className="flex flex-col gap-5 md:gap-8 lg:gap-[50px]">
          {mission?.map((mission, id) => (
            <div key={id} className="space-y-2">
              <h2 className="section-title">{mission?.title}</h2>
              <p className="text-xs text-[#e0e0e0] font-medium tracking-[-0.12px]">
                {mission?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;

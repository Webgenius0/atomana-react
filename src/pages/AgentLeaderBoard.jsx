import DownIcon from '@/components/svgs/DownIcon'
import RightArrow from '@/components/svgs/RightArrow'
import ThreeDot from '@/components/svgs/ThreeDot'
import Dropdown from '@/components/Dropdown';
import ProgressBar from '@/components/ProgressBar';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import AgentLeaderModal from '@/components/AgentLeaderModal';

function AgentLeaderBoard() {
    const options = [
        { value: "month", label: "This Month" },
        { value: "quater", label: "Quater" },
        { value: "year", label: "Yearly" },
      ];
      const heightoptions = [
        { value: "highestsales", label: "sort By: Highest sales" },
        { value: "quater", label: "Quater" },
        { value: "year", label: "Yearly" },
      ];
      const agenLeaderBoardData = [
        {
          name: "James L.",
          amount: "264,054",
          sales: 12,
          salesGoal: 25,
        },
        {
          name: "Sasha B.",
          amount: "251,839",
          sales: 10,
          salesGoal: 25,
        },
        {
          name: "Russel M.",
          amount: "204,576",
          sales: 10,
          salesGoal: 30,
        },
        {
          name: "Kim H.",
          amount: "202,843",
          sales: 9,
          salesGoal: 40,
        },
        {
          name: "Ralph D.",
          amount: "200,003",
          sales: 9,
          salesGoal: 42,
        },
        {
          name: "Irwin K.",
          amount: "199,398",
          sales: 8,
          salesGoal: 40,
        },
        {
          name: "Sasha M.",
          amount: "199,192",
          sales: 8,
          salesGoal: 40,
        },
        {
          name: "Sasha N.",
          amount: "198,278",
          sales: 1,
          salesGoal: 5,
        },
        {
            name: "Ralph D.",
            amount: "200,003",
            sales: 9,
            salesGoal: 42,
          },
          {
            name: "Irwin K.",
            amount: "199,398",
            sales: 8,
            salesGoal: 40,
          },
          {
            name: "Sasha M.",
            amount: "199,192",
            sales: 7,
            salesGoal: 30,
          },
          {
            name: "Sasha N.",
            amount: "198,278",
            sales: 1,
            salesGoal: 5,
          },
      ];
      const handleSelect = (option) => {
        console.log("Selected option:", option);
      };
  return (
    <div className="my-container">
        <div className='flex items-center justify-between pt-6 md:pt-8 lg:pt-12 pb-4 md:pb-5 lg:pb-8 mb-4'>
            <div className="flex gap-4 items-center">
                <Link
                    to="/"
                    className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
                    >
                    <ArrowLeftSvg />
                    <h2 className="section-title">Agent Leaderboard</h2>
                </Link>
            </div>
            <div className='p-2 border border-white rounded-full cursor-pointer'>
                <ThreeDot/>
            </div>
        </div>
        <div className='bg-[#242424] text-[#FFF] flex flex-col gap-[8px] p-5 sm:p-4 '>
            {/* sub container header */}
            <div className="flex justify-between gap-1 gap-y-3 flex-wrap">
              <h1 className="section-title">Top 25</h1>
              <div className="flex gap-2">
                <Dropdown options={heightoptions} onSelect={handleSelect} /> {/*  px-0.5 py-0.25  */}
                <Dropdown options={options} onSelect={handleSelect} />
              </div>
            </div>
            {/* sub container table */}
            <div className="grid md:grid-cols-1 gap-y-4 md:gap-y-6 gap-12 w-full mt-5 z-20">
                {agenLeaderBoardData?.map((agent, index) => {
                    // Step 1: Track hover state for each item
                    const [isHovered, setIsHovered] = useState(false);

                    // Step 2: Event handlers for mouse enter and leave
                    const handleClickData = () => setIsHovered(true);
                    const handleCancel = () => setIsHovered(false);

                    return (
                    <div
                        key={index}
                        className="relative flex items-center gap-4 sm:gap-[25px] px-0 sm:px-4 md:px-6"
                        
                    >
                        <div className="italic">{index + 1}</div>
                        <div className="w-full">
                        <div className="flex items-center justify-between mb-2.5 gap-x-2 flex-wrap">
                            <p className="text-sm leading-5 tracking-[0.25px] text-[#ffffff99]">
                            {agent?.name}
                            </p>
                            <p className="text-sm leading-5 tracking-[0.25px] text-[#ffffff99]">
                            ${agent?.amount} ({agent?.sales} sales)
                            </p>
                        </div>
                        <ProgressBar
                            currentValue={agent?.sales}
                            goalValue={agent?.salesGoal}
                        />
                        {/* Step 3: Conditionally render the modal when clicked */}
                        {isHovered && (
                            <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                            <AgentLeaderModal agentData={agenLeaderBoardData} onClose={handleClickData}/>
                            </div>
                        )}
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default AgentLeaderBoard
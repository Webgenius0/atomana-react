




import SearchIconSvg from "@/components/svgs/SearchIconSvg";
import Dropdown from "@/components/Dropdown";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import Table from "@/components/table/Table";
import TabStepper from "@/components/TabStepper";
import React from "react";
import { Link } from "react-router-dom";

const MyAgentExpense = () => {
    const heightoptions = [
        { value: "highestsales", label: "Time Range: YTD 2024" },
        { value: "quater", label: "Quater" },
        { value: "year", label: "Yearly" },
    ];

    const handleSelect = (option) => {
        console.log("Selected option:", option);
    };

    return (
        <div>

            <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
                <div className="flex items-center gap-4 justify-between">
                    <Link
                        to="/my-systems/finances"
                        className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
                    >
                        <ArrowLeftSvg />
                        <h2 className="section-title">MyAgentExpense Expenses</h2>
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
            </div>

            <div className="my-4 sm:my-5 md:my-6">
                <div className="flex justify-between items-center">
                    {/* Search Input */}
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            className="border rounded-full bg-transparent pl-10 pr-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search reviews"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <SearchIconSvg />
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className="ml-4">
                        <Dropdown options={heightoptions} onSelect={handleSelect} />
                    </div>
                </div>
            </div>








            <Table />
        </div>
    );
};

export default MyAgentExpense;

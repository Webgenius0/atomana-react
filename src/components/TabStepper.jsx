import { useState } from "react";
import { Link } from "react-router-dom";

const TabStepper = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].path);

  return (
    <>
      <div className="flex items-start gap-5">
        {tabs?.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            onClick={() => setActiveTab(tab.path)}
            className={`py-1 sm:py-2 font-Inria text-lg md:text-xl ${
              activeTab === tab.path
                ? "text-light border-b-2 border-light font-semibold"
                : "text-[#ffffffb3] hover:text-light hover:border-b-2 hover:border-light border-transparent duration-100"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default TabStepper;

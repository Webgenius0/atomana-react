import { useState } from "react";
import { Link } from "react-router-dom";

const TabStepper = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(tabs[0].path); 

  return (
    <div>
     
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <Link
          key={tab.path}
            to={tab.path}
            onClick={() => setActiveTab(tab.path)}
            className={`py-2 px-4 ${
              activeTab === tab.path
                ? "text-white border-b-2 border-white font-semibold"
                : "text-gray-400 hover:text-gray-400 hover:border-b-2 border-transparent"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabStepper;

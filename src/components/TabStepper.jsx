
import { useNavigate, useLocation } from "react-router-dom";

const TabStepper = ({ tabs }) => {
    //that's show the selected tab in  the url 
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => navigate(tab.path)}
          className={`py-2 px-4 text-gray-600 ${
            location.pathname === tab.path
              ? "border-b-2 border-blue-500 font-semibold"
              : "hover:text-gray-800 hover:border-b-2"
          } `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabStepper;

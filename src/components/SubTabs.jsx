import React from "react";
import TabBtn from "./TabBtn";

const SubTabs = ({ tabLinks }) => {
  return (
    <div className="my-4 flex items-center justify-start gap-1 overflow-x-auto scrollbar-none">
      {tabLinks?.map((tab, idx) => (
        <TabBtn key={idx} to={tab?.link}>
          {tab?.label}
        </TabBtn>
      ))}
    </div>
  );
};

export default SubTabs;

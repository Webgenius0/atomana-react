import React from 'react';
import { Link } from 'react-router-dom';

function TabCard({ tab }) {
  return (
    <Link to={tab?.path}>
      <div className="cursor-pointer lg:p-6 p-4 max-[420px]:p-6 bg-[#242424] rounded-2xl">
        {/* Render SVG or Image */}
        <p className="py-2">
          {typeof tab.icon === 'function' ? (
            React.createElement(tab.icon) // Proper way to render a component
          ) : (
            <img src={tab.icon} alt={tab.category} className="w-16 h-16" />
          )}
        </p>

        {/* Category Name */}
        <h1 className="py-2 lg:text-2xl md:text-xl text-base uppercase">
          {tab.category}
        </h1>

        {/* Total Vendors */}
        <p className="text-light/60 lg:text-lg md:text-base text-sm">
          {'Total Items'}: {tab.totalCategories}
        </p>
      </div>
    </Link>
  );
}

export default TabCard;

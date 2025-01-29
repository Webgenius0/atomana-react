import React from 'react'
import { Link } from 'react-router-dom'

function TabCard({ tab, IconComponent }) {

  return (
    <Link to={tab?.path}>
      <div className='cursor-pointer lg:p-6 p-4 max-[420px]:p-6 bg-[#242424] rounded-2xl'>
        <p className='py-2'>{IconComponent && <IconComponent />}</p>
        <h1 className='py-2 lg:text-lg md:text-base text-sm'>{tab.category}</h1>
        <p className='py-2 lg:text-lg md:text-base text-sm'> {tab.totalCategoryName}: {tab.totalCategories}</p>
      </div>
    </Link>
  )
}

export default TabCard
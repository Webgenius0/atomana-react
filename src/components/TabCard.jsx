import React from 'react'
import { Link } from 'react-router-dom'

function TabCard({ tab, IconComponent }) {

  return (
    <Link to={tab?.path}>
      <div className='cursor-pointer lg:p-6 sm:p-4 p-2 bg-[#242424] rounded-md'>
        <p className='py-2'>{IconComponent && <IconComponent />}</p>
        <h1 className='py-2'>{tab.category}</h1>
        <p className='py-2'> {tab.totalCategoryName}: {tab.totalCategories}</p>
      </div>
    </Link>
  )
}

export default TabCard
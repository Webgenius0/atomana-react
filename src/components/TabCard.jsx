import React from 'react'

function TabCard({systemTabs}) {
    console.log("Received systemTabs:", systemTabs);
  return (
    <div className='text-white grid grid-cols-4 gap-2 '>
        {systemTabs.map((tab, i)=>(
            <div key={i} className='lg:p-6 sm:p-4 p-2 bg-[#242424] rounded-md'>
                <p>{tab.icon}</p>
                <h1>{tab.title}</h1>
                <p>{tab.items}</p>
            </div>
        
        ))
       }     
        
    </div>
  )
}

export default TabCard
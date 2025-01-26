// import React from 'react'
// import Hash from './svgs/Hash'
// import DollarSvg from './svgs/DollarSvg'
// import CalenderSvg from './svgs/CalenderSvg'
// import PendingSales from './svgs/PendingSales'
// import ProfileSvg from './svgs/ProfileSvg'
// import AverageListSvg from './svgs/AverageListSvg'

// function AgentLeaderModal() {
//     // const modalIcon = [
//     //     <Hash/>,
//     //     <DollarSvg/>,
//     //     <CalenderSvg/>,
//     //     <PendingSales/>,
//     //     <ProfileSvg/>,
//     //     <AverageListSvg/>
//     // ]
//     const modalList = {
//         {
//             icon : <Hash/>,
//             iconName : 'Rank',
//         },
//         {
//             icon : <AverageListSvg/>,
//             iconName : 'Average Sales Price',
//         },

//     }
//     const modalData = {
//         // {
//         //     name : John. L,
//         //     rank: 1,

//         // },
//     }
//   return (
//     <div className='bg-[#4A4A4A] p-6 rounded-xl text-white z-80'>
//         <div className='flex flex-col gap-y-4'>
//             <h1 className='text-4xl font-semibold leading-normal tracking-[-0.36px]'>James L.</h1>
//             <div className='grid grid-cols-2 gap-2'>
//                 <div className='flex items-center gap-2 flex-1'>
//                 {modalIcon.map((item, index) => (
//     < key={index}>
//       {item.icon}
//       <p className='bg-[#CCCCCC] text-white'>{item.iconName}</p>
//     </>
//                 </div>
//                 <div className='bg-[#CCCCCC] text-white p-3 flex items-center justify-center flex-1 rounded-xl'>
//                     <p>1</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AgentLeaderModal
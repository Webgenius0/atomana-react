import React, { useState } from 'react'
import Hash from './svgs/Hash'
import DollarSvg from './svgs/DollarSvg'
// import CalenderSvg from './svgs/CalenderSvg'
import PendingSales from './svgs/PendingSales'
import ProfileSvg from './svgs/ProfileSvg'
import AverageListSvg from './svgs/AverageListSvg'
import calenderSvg from '../assets/images/calender.svg'

function AgentLeaderModal({name}) {
    const [isClicked, setIsClicked] = useState(false)
    const handleClicked = () =>{
        setIsClicked(!isClicked);
    }
  return (
    <div className={`md:min-w-[700px] md:max-w-[750px] w-[90%] mx-auto sm:mx-0 bg-[#4A4A4A] p-6 rounded-xl text-white z-40 ${isClicked === true ? 'opacity-0' : 'opacity-100'}`} onClick={handleClicked}>
        <div className='w-full flex flex-col gap-y-4'>
            <div className='flex justify-between'>
               <h1 className='text-4xl font-semibold leading-normal tracking-[-0.36px]'>{name}</h1> 
               <div className={`px-3 py-2 flex items-center justify-center h-max border border-white border-opacity-40 rounded-full lg:hidden`}>
                    <p className='text-sm'>X</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <Hash/>
                    <p className='text-[#CCCCCC]'>Rank</p>
                </div>
                <div className='bg-[#CCCCCC] text-white p-3 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p>1</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <DollarSvg/>
                    <p className='text-[#CCCCCC]'>Average sales price</p>
                </div>
                <div className='bg-[#CCCCCC] text-white p-3 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$1,200,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    {/* <CalenderSvg/> */}
                    <img src={calenderSvg} alt="" />
                    <p className='text-[#CCCCCC]'>Volume sold to date</p>
                </div>
                <div className='bg-[#CCCCCC] text-white p-3 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$24,000,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <PendingSales/>
                    <p className='text-[#CCCCCC]'>Pending slaes to volume</p>
                </div>
                <div className='bg-[#CCCCCC] text-white p-3 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$4,500,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <ProfileSvg/>
                    <p className='text-[#CCCCCC]'>Agent active listing volume</p>
                </div>
                <div className='bg-[#CCCCCC] text-white p-3 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$3,000,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <AverageListSvg/>
                    <p className='text-[#CCCCCC]'>Average list price</p>
                </div>
                <div className='bg-[#CCCCCC] text-white p-3 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$1,350,000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentLeaderModal
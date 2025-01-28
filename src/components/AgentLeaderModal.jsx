import { useState } from 'react'
import Hash from './svgs/Hash'
import DollarSvg from './svgs/DollarSvg'
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
    <div className={`md:min-w-[700px] md:max-w-[750px] w-[100%] mx-auto sm:mx-0 bg-[#4A4A4A] md:p-6 sm:p-4 p-2 rounded-xl text-white z-40 ${isClicked === true ? 'opacity-0' : 'opacity-100'}`} onClick={handleClicked}>
        <div className='w-full flex flex-col sm:gap-y-4 gap-y-2'>
            <div className='flex justify-between'>
               <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl text-lg font-semibold leading-normal tracking-[-0.36px]'>{name}</h1> 
               <div className={`px-2 py-1 flex items-center justify-center h-max border border-white border-opacity-40 rounded-full lg:hidden`}>
                    <p className='sm:text-sm text-xs'>X</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <Hash/>
                    <p className='text-[#CCCCCC] sm:text-sm text-xs'>Rank</p>
                </div>
                <div className='bg-[#CCCCCC] text-white sm:p-3 p-2 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>1</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <DollarSvg/>
                    <p className='text-[#CCCCCC] sm:text-sm text-xs'>Average sales price</p>
                </div>
                <div className='bg-[#CCCCCC] text-white sm:p-3 p-2 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$1,200,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <img src={calenderSvg} alt="" />
                    <p className='text-[#CCCCCC] sm:text-sm text-xs'>Volume sold to date</p>
                </div>
                <div className='bg-[#CCCCCC] text-white sm:p-3 p-2 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$24,000,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:gap-2 gap-1'>
                <div className='flex items-center sm:gap-2 gap-1 flex-1'>
                    <PendingSales/>
                    <p className='text-[#CCCCCC] sm:text-sm text-xs'>Pending slaes to volume</p>
                </div>
                <div className='bg-[#CCCCCC] text-white sm:p-3 p-2 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$4,500,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <ProfileSvg/>
                    <p className='text-[#CCCCCC] sm:text-sm text-xs'>Agent active listing volume</p>
                </div>
                <div className='bg-[#CCCCCC] text-white sm:p-3 p-2 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$3,000,000</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex items-center gap-2 flex-1'>
                    <AverageListSvg/>
                    <p className='text-[#CCCCCC] sm:text-sm text-xs'>Average list price</p>
                </div>
                <div className='bg-[#CCCCCC] text-white sm:p-3 p-2 flex items-center justify-center flex-1 rounded-[100px]'>
                    <p className='font-Inter text-xs font-medium leading-[18px] tracking-[-0.12px]'>$1,350,000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentLeaderModal
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg'
import PlusSvg from '@/components/svgs/PlusSvg'
import React from 'react'
import { Link } from 'react-router-dom'

function AddLessons() {
    return (
        <div className="my-container flex flex-col justify-between h-[80vh]">
            <div>
                <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
                    <Link
                        to={`${location.state?.from || "/my-classroom/create-course"}`}
                        className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
                    >
                        <ArrowLeftSvg />
                        <div>
                            <h1 className="section-title">
                                Add Lessons
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="max-w-[684px] w-full mx-auto">
                    <div className='flex flex-col gap-8'>
                        <input type="text" placeholder='title' className='text-white/50 font-Inria text-xl italic font-bold leading-3xl tracking-[-0.2px] capitalize outline-none bg-[#151515] pl-12' />
                        <div className='flex items-center gap-4 cursor-pointer'>
                            <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
                                <PlusSvg />
                            </span>
                            <textarea placeholder='|' className='text-white placeholder:text-white py-2 font-Inria text-base font-normal leading-xl  tracking-[-0.2px] capitalize outline-none bg-[#151515] w-full min-h-[40px]' rows="1" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between sm:flex-row flex-col sm:space-y-0 space-y-4">
                <input
                    className="request-btn approve cursor-pointer px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-80 duration-300"
                    type="submit"
                    value="Add"
                />
                <button className="request-btn text-light bg-[#151515] px-6 py-3 rounded-lg hover:opacity-80 duration-300">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default AddLessons
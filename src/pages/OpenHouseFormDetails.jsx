import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg'
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg'
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg'
import React from 'react'
import { Link } from 'react-router-dom'

const OpenHouseFormDetails = () => {
  return (
    <>
        <div className="flex items-center gap-4 justify-between">
          <Link
            to="/my-systems/open-house"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
          >
            <ArrowLeftSvg />
            <h2 className="section-title">Open House Form</h2>
          </Link>

          <div className="flex items-center gap-2.5">
            <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
              <PersonPlusSvg />
            </button>
            <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
              <ThreeDotsSvg />
            </button>
          </div>
        </div>


        <div className="mt-4">
         <div className='flex flex-col gap-[50px]'>
         <div>
            <h2 className="section-title">1. Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 ">
              {/* Address */}


              {/* Property Type */}
              <div className="space-y-[2px]  border-secondPrimary py-4">
                <div className='mb-4'>
                  <p className="font-bold leading-5 text-sm text-[#808080]">
                    Property Address
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc] ">
                    1234 Maple Street, San Francisco, CA 94117
                  </p>
                </div>
                <div>
                  <p className="font-bold leading-5 text-sm text-[#808080] ">
                    Listing Agent Name
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                    Sally Ko
                  </p>
                </div>
              </div>
              <div className="space-y-[2px]  border-secondPrimary py-4">
                <div className='mb-4'>
                  <p className="font-bold leading-5 text-sm text-[#808080]">
                    MLS Number (Optional)
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc] ">
                    1727812
                  </p>
                </div>
                <div>
                  <p className="font-bold leading-5 text-sm text-[#808080] ">
                    Property Type
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                    Single-Family Home
                  </p>
                </div>
              </div>


            </div>
          </div>
          <div>
            <h2 className="section-title">2. Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 ">
              {/* Address */}


              {/* Property Type */}
              <div className="space-y-[2px]  border-secondPrimary py-4">
                <div className='mb-4'>
                  <p className="font-bold leading-5 text-sm text-[#808080]">
                    Property Address
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc] ">
                    1234 Maple Street, San Francisco, CA 94117
                  </p>
                </div>
                <div>
                  <p className="font-bold leading-5 text-sm text-[#808080] ">
                    Listing Agent Name
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                    Sally Ko
                  </p>
                </div>
              </div>
              <div className="space-y-[2px]  border-secondPrimary py-4">
                <div className='mb-4'>
                  <p className="font-bold leading-5 text-sm text-[#808080]">
                    MLS Number (Optional)
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc] ">
                    1727812
                  </p>
                </div>
                <div>
                  <p className="font-bold leading-5 text-sm text-[#808080] ">
                    Property Type
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                    Single-Family Home
                  </p>
                </div>
              </div>


            </div>
          </div>

          <div>
            <h2 className="section-title">3. Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 ">
              {/* Address */}


              {/* Property Type */}
              <div className="space-y-[2px]  border-secondPrimary py-4">
                <div className='mb-4'>
                  <p className="font-bold leading-5 text-sm text-[#808080]">
                    Property Address
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc] ">
                    1234 Maple Street, San Francisco, CA 94117
                  </p>
                </div>
                <div>
                  <p className="font-bold leading-5 text-sm text-[#808080] ">
                    Listing Agent Name
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                    Sally Ko
                  </p>
                </div>
              </div>
              <div className="space-y-[2px]  border-secondPrimary py-4">
                <div className='mb-4'>
                  <p className="font-bold leading-5 text-sm text-[#808080]">
                    MLS Number (Optional)
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc] ">
                    1727812
                  </p>
                </div>
                <div>
                  <p className="font-bold leading-5 text-sm text-[#808080] ">
                    Property Type
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                    Single-Family Home
                  </p>
                </div>
              </div>


            </div>
          </div>

         </div>
        </div>

    </>
  )
}

export default OpenHouseFormDetails
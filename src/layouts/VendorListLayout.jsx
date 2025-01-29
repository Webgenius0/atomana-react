import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg'
import PlusSvg from '@/components/svgs/PlusSvg'
import SearchGraySvg from '@/components/svgs/SearchGraySvg'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function VendorListLayout() {
  return (
    <section className="pt-0 sm:pt-3">
      <div className="my-container">
        <div className='flex sm:flex-row flex-col items-center justify-between my-5 sm:my-0'>
          <Link
            to="/my-systems/"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit mb-5 sm:my-5 mr-auto sm:ml-0"
          >
            <ArrowLeftSvg />
            <h2 className="section-title">Vendor List</h2>
          </Link>
          <div className='flex items-center gap-3 md:gap-8'>
            <label className="basis-1/2 flex items-center gap-2.5 px-4 rounded-full border border-secondPrimary bg-gradient-to-r from-secondPrimary to-[#1a1a1a] sm:min-w-[272px] min-w-[200px] w-full">
              <SearchGraySvg />
              <input
                type="text"
                placeholder="Search by user"
                className="placeholder:text-secondary text-light text-xs font-medium leading-[21px] tracking-[-0.12px] bg-inherit py-2.5 focus:none outline-none w-full"
              />
            </label>
            <Link
              to="/my-systems/vendor-list"
              className="basis-1/2 flex items-center gap-2.5 text-sm leading-6 tracking-[-0.14px] text-light hover:opacity-60 duration-300 ml-auto "
            >
              <p className='sm:block hidden'>Add Vendor</p>
              <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
                <PlusSvg />
              </span>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  )
}

export default VendorListLayout
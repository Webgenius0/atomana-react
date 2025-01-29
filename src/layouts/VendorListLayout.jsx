import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg'
import PlusSvg from '@/components/svgs/PlusSvg'
import SearchGraySvg from '@/components/svgs/SearchGraySvg'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function VendorListLayout() {
  return (
    <section className="pt-0 sm:pt-3">
      <>
        <Outlet />
      </>
    </section>
  )
}

export default VendorListLayout
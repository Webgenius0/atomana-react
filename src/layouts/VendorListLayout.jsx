import React from 'react'
import { Outlet } from 'react-router-dom'

function VendorListLayout() {
  return (
    <section className="pt-0 sm:pt-3 md:pt-6">
      <div className="my-container">
        <Outlet />
      </div>
    </section>
  )
}

export default VendorListLayout
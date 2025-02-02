import { Outlet } from 'react-router-dom'

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
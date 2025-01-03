import React from 'react'

const HoaDocument = () => {
    return (
        <>

            <div className="my-container">
                <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
                    <div className="mt-[25px]">
                        <h2 className="section-title">Access Instructions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4"> 
                            {/* Address */}
                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4"> 
                                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">HOA Name</p>
                                <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                                    Maple Grove Community Association
                                </p>
                            </div>

                            {/* Property Type */}
                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4">
                                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">HOA Office Address</p>
                                <p className="text-sm font-normal leading-5 text-[#ffffffcc]">789 Maple Grove Lane, Suite 100, San Francisco, CA 94117</p>
                            </div>




                        </div>
                    </div>
                    <div className="mt-[10px]">
                       
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-12 md:mt-4"> 
                            {/* Address */}
                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4">
                                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">HOA Contact</p>
                                <p className="text-sm font-normal leading-5 text-[#086565]">
                                    Jane Thompson, Manager
                                </p>
                            </div>

                            {/* Contact Email */}
                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4">
                                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Contact Email</p>
                                <p className="text-sm font-normal leading-5 text-[#086565]">hoa@maplegrovecommunity.org</p>
                            </div>

                            {/* Contact Email */}
                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4">
                                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Contact Number</p>
                                <p className="text-sm font-normal leading-5 text-[#086565]">(415) 555-9876</p>
                            </div>

                        </div>
                    </div>

                    <div className="mt-[25px]">
                        <h2 className="section-title">Key HOA Documents</h2>
                        <div className=" max-w-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-2 md:gap-12 md:mt-4"> 

                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4"> 
                                <div className="flex items-center justify-between">
                                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                                        Covenants, Conditions & Restrictions
                                    </p>
                                    <a
                                        href="/path-to-ccr.pdf"
                                        download
                                        className="text-[#086565] hover:text-[#086565] transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                                    cc&r.pdf
                                </p>
                            </div>



                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4"> 
                                <div className="flex items-center justify-between">
                                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                                        Community Rules and Regulations
                                    </p>
                                    <a
                                        href="/path-to-ccr.pdf"
                                        download
                                        className="text-[#086565] hover:text-[#086565] transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                                    stlrr-192193032-2024.pdf
                                </p>
                            </div>
                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4"> 
                                <div className="flex items-center justify-between">
                                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                                        HOA Budget and Financial Statements
                                    </p>
                                    <a
                                        href="/path-to-ccr.pdf"
                                        download
                                        className="text-[#086565] hover:text-[#086565] transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                                    stlrr-284328484-2024.pdf
                                </p>
                            </div>
                            <div className="space-y-[2px] border-b border-secondPrimary py-2 md:py-4"> 
                                <div className="flex items-center justify-between">
                                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                                        Architectural Guidelines
                                    </p>
                                    <a
                                        href="/path-to-ccr.pdf"
                                        download
                                        className="text-[#086565] hover:text-[#086565] transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                                    stlrr-428438900-2024.pdf 
                                </p>
                            </div>




                        </div>
                    </div>

                    <div className="mt-[25px]">
                        <h2 className="section-title">Community Amenities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2 md:gap-12 md:mt-4">
                            {/* Available Amenities */}
                            <div className="space-y-4 py-2 md:py-4">
                                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Available Amenities</p>
                                <ul className="list-disc list-inside text-sm font-normal leading-5 text-[#ffffffcc] space-y-2"> 
                                    <li>Community Pool (Access Code: #5678)</li> 
                                    <li>Fitness Center</li> 
                                    <li>Clubhouse (Reservations Required)</li> 
                                </ul>  
                            </div>

                            {/* Hours */} 
                            <div className="space-y-4 py-2 md:py-4">
                                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Hours</p>
                                <ul className="list-disc list-inside text-sm font-normal leading-5 text-[#ffffffcc] space-y-2">
                                    <li>8 AM - 8 PM</li>
                                    <li>8 AM - 10 PM</li>
                                    <li>8 AM - 8 PM</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default HoaDocument
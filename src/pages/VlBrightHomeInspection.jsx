
import SearchIconSvg from "@/components/svgs/SearchIconSvg";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import { Link } from "react-router-dom";
import person from "../assets/images/person.png"


const VlBrightHomeInspection = () => {
    return (
        <>

            <div className="pt-6 md:pt-4 lg:pt-4 pb-3">
                <div className="flex items-center gap-4 justify-between">
                    <Link
                        to="/my-systems/vendor-list/utilities/"
                        className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
                    >
                        <ArrowLeftSvg />
                        <h2 className="section-title">Bright Home Inspections</h2>
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



                <div className="mt-5 md:mt-8 lg:mt-[50px]">
                    <h2 className="section-title">About</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 md:mt-4">
                        {/* website */}
                        <div className="space-y-[2px] border-b border-secondPrimary py-4">
                            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                                Website
                            </p>
                            <p className="text-sm font-normal leading-5 text-[#009696]">
                                www.brighthomeinspections.com
                            </p>
                        </div>

                        {/* Email Address*/}
                        <div className="space-y-[2px] border-b border-secondPrimary py-4">
                            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                                Email address
                            </p>
                            <p className="text-sm font-normal leading-5 text-[#009696]">
                                info@brighthomeinspections.com
                            </p>
                        </div>

                        {/* POhone Number */}
                        <div className="space-y-[2px] border-b border-secondPrimary py-4">
                            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                                Phone number
                            </p>
                            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                                208-913-4467
                            </p>
                        </div>


                    </div>
                </div>
                <div className="mt-5 md:mt-8 lg:mt-[20px]">
                    <h2 className="section-title">About the Vendor</h2>
                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Bright Home Inspections has been serving the real estate industry for over 15 years, providing thorough, professional, and reliable home inspections across the Bay Area. Known for their detailed reports and quick turnaround times, Bright Home Inspections specializes in pre-purchase, pre-listing, and new construction inspections. Their team of certified inspectors ensures every property is evaluated with precision, helping agents and clients make informed decisions.</p>

                </div>
                <div className="mt-[25px]">
                    <h2 className="font-bold leading-5 text-sm text-[#ffffffcc]">Additional Notes</h2>


                    <div className="space-y-[2px]  py-4">


                        <ul className="list-disc list-inside text-sm font-normal leading-5 text-[#ffffffcc]  ">
                            <li className="indent-3">

                                Certified and experienced home inspectors.
                            </li>
                            <li className="indent-3">

                                Same-day detailed inspection reports with photos.
                            </li>
                            <li className="indent-3">

                                Services include foundation, roofing, HVAC, plumbing, electrical systems, and more.
                            </li>
                            <li className="indent-3">

                                Competitive pricing with flexible scheduling.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="mt-5 md:mt-8 lg:mt-[30px]">


                    <div className="flex justify-between items-center gap-4">
                        <div>
                            <div className="flex gap-2 ">
                                <div>1</div>
                                <div className="section-title">4.99 (138 Agent Reviews)</div>

                            </div></div>
                        <div>  <div className="flex items-center gap-2.5">
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    className="border rounded-full bg-transparent pl-10 pr-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Search "
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    <SearchIconSvg />
                                </div>
                            </div>
                            <div>
                                <input class="request-btn approve cursor-pointer" type="submit" value="Add a Review" />
                            </div>
                        </div> </div>
                    </div>


                    <div className="space-y-[2px] border-b border-secondPrimary py-4">
                        <div>
                            <div className="flex justify-start items-center gap-2 mb-2">
                                <div> <img src={person} alt="" /></div>
                                <div>
                                    <h1 className="overflow-hidden text-gray-300 truncate font-inter text-[12px] font-semibold leading-normal tracking-[-0.12px]">John Hallard</h1>
                                    <p className="overflow-hidden text-[rgba(204,204,204,0.75)] truncate font-inter text-[12px] font-normal leading-normal tracking-[-0.12px]">December 2024</p>
                                </div>
                            </div>
                            <h2 className="text-white font-inter text-[14px] font-normal leading-[20px]">Quick turnaround for my client last week. Inspector John was very professional and thorough.</h2>
                        </div>

                    </div>
                    <div className="space-y-[2px] border-b border-secondPrimary py-4">
                        <div>
                            <div className="flex justify-start items-center gap-2 mb-2">
                                <div> <img src={person} alt="" /></div>
                                <div>
                                    <h1 className="overflow-hidden text-gray-300 truncate font-inter text-[12px] font-semibold leading-normal tracking-[-0.12px]">Sarah Lopez</h1>
                                    <p className="overflow-hidden text-[rgba(204,204,204,0.75)] truncate font-inter text-[12px] font-normal leading-normal tracking-[-0.12px]">December 2024</p>
                                </div>
                            </div>
                            <h2 className="text-white font-inter text-[14px] font-normal leading-[20px]">Bright Home Inspections exceeded my expectations! The inspector arrived on time, was incredibly thorough, and provided a detailed report with photos by the end of the day. My clients felt confident moving forward with their purchase. Highly recommend their services!</h2>
                        </div>

                    </div>
                    <div className="space-y-[2px] border-b border-secondPrimary py-4">
                        <div>
                            <div className="flex justify-start items-center gap-2 mb-2">
                                <div> <img src={person} alt="" /></div>
                                <div>
                                    <h1 className="overflow-hidden text-gray-300 truncate font-inter text-[12px] font-semibold leading-normal tracking-[-0.12px]">John Hallard</h1>
                                    <p className="overflow-hidden text-[rgba(204,204,204,0.75)] truncate font-inter text-[12px] font-normal leading-normal tracking-[-0.12px]">December 2024</p>
                                </div>
                            </div>
                            <h2 className="text-white font-inter text-[14px] font-normal leading-[20px]">Very professional and easy to work with. The team was responsive and flexible when we needed a last-minute inspection. The report was clear and easy to understand, although it arrived a little later than expected. Overall, great experience!</h2>
                        </div>

                    </div>
                </div>
            </div>




        </>
    );
};

export default VlBrightHomeInspection; 

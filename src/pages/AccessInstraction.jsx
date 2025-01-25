import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import React from "react";
import { Link } from "react-router-dom";

const AccessInstraction = () => {
  return (
    <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
      <div className="flex items-center gap-4 justify-between">
        <Link
          to="/my-systems/team"
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
        >
          <ArrowLeftSvg />
          <div>
            <h2 className="section-title">Access Instructions</h2>
            <p className="text-sm text-[#009696] leading-[21px] tracking-[-0.14px]">
              11234 Maple Street, San Francisco, CA 94117
            </p>
          </div>
        </Link>

        <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
          <ThreeDotsSvg />
        </button>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-[50px]">
        <h2 className="section-title">Property Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-4">
          {/* Address */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Address
            </p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              1234 Maple Street, San Francisco, CA 94117
            </p>
          </div>

          {/* Property Type */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Property Type
            </p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              Apartment
            </p>
          </div>

          {/* Price */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Price
            </p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              $1,200,000
            </p>
          </div>

          {/* Size */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Size</p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              1,500 sq ft
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <h2 className="section-title">Access Instructions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 md:mt-4">
          {/* Address */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Key Access Code
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]"> 
              1234 Maple Street, San Francisco, CA 94117
            </p>
          </div>

          {/* Property Type */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Lockbox Location
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              Lockbox is located on the front door handle.
            </p>
          </div>

          {/* Price */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Key Pickup Instructions (if applicable):
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              Keys can also be picked up from the listing office at 456 Realty
              Lane, Suite 101, between 9 AM - 5 PM.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <h2 className="section-title">Gated Community Instructions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 md:mt-4">
          {/* Address */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Gate Codee
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              1234 Maple Street, San Francisco, CA 94117
            </p>
          </div>

          {/* Property Type */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Gate Access Location
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              Main gate entrance on Oakwood Drive. Use the keypad located on the
              left side of the gate.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <h2 className="section-title">Parking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 md:mt-4">
          {/* Address */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Visitor Parking
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              Designated visitor parking spots are available to the right of the
              main entrance.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <h2 className="section-title">Additional Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 md:mt-4">
          {/* Address */}
          <div className="space-y-[2px]  py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Notes
            </p>

            <ul className="list-disc list-inside text-sm font-normal leading-5 text-[#ffffffcc]  ">
              <li className="indent-3">
                {" "}
                Designated visitor parking spots are available to the right of
                the main entrance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessInstraction;

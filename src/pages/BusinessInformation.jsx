import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import { Link } from "react-router-dom";

const BusinessInformation = () => {
  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link
            to="/profile"
          >
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Business Information </h2>
        </div>

        <div className="mt-[25px]">
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Business name
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              Spears Group
            </p>
          </div>

          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Business address
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                341 Horton Ave <br />
                San Francisco, CA 94118
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              EDIT
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Business phone number
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                208-913-4467
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              MANAGE
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Phone number
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                208-913-4467
              </p>
            </div>

            <Link
              to=""
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              MANAGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;

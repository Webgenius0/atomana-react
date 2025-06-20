import AccessInstructionSkeleton from "@/components/access-instruction/AccessInstructionSkeleton";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import { useGetSingleListingInformation } from "@/hooks/new-listing-information";

import { formatCurrency } from "@/lib/utils/formatCurrency";
import DOMPurify from "dompurify";
import { Link, useParams } from "react-router-dom";

const ViewListingInformation = () => {
  const { id } = useParams();
  const { listingInformation, isLoading } = useGetSingleListingInformation(id);

  if (isLoading) {
    return <AccessInstructionSkeleton />;
  }

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div>
          <Link
            to="/my-systems/new-listing/listing-information"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
          >
            <ArrowLeftSvg />
          </Link>
          <div>
            <h2 className="section-title">Listing Information</h2>
            <p className="text-sm text-[#009696] leading-[21px] tracking-[-0.14px]">
              {listingInformation?.address || "N/A"}
            </p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
          <ThreeDotsSvg />
        </button>
      </div>

      {/* Property Details */}
      <div className="mt-5">
        <h2 className="section-title">Property Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          {/* Address field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Address</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.address || "N/A"}
            </p>
          </div>

          {/* Price field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Price</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.price
                ? formatCurrency(listingInformation.price)
                : "N/A"}
            </p>
          </div>

          {/* Expiration Date field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Expiration Date
            </p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.expiration_date || "N/A"}
            </p>
          </div>

          {/* Commission Rate field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Commission Rate
            </p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.commission_rate
                ? `${listingInformation.commission_rate}%`
                : "N/A"}
            </p>
          </div>

          {/* Commission Split field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Commission Split
            </p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.commission_split
                ? `${listingInformation.commission_split}`
                : "N/A"}
            </p>
          </div>

          {/* Co List Percentage field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Co List Percentage
            </p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.co_list_percentage
                ? `${listingInformation.co_list_percentage}%`
                : "N/A"}
            </p>
          </div>

          {/* Agent field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4 col-span-full lg:col-span-1">
            <p className="font-bold text-sm text-[#ffffffcc]">Agent</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.agent
                ? `${listingInformation.agent.first_name} ${listingInformation.agent.last_name}`
                : "N/A"}
            </p>
          </div>

          {/* Beds field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Beds</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.beds ?? "N/A"}
            </p>
          </div>

          {/* Full Baths field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Full Baths</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.full_baths ?? "N/A"}
            </p>
          </div>

          {/* Half Baths field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Half Baths</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.half_baths ?? "N/A"}
            </p>
          </div>

          {/* Size field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Size</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.size
                ? `${Number(listingInformation?.size)
                    ?.toFixed(0)
                    .padStart(2, "0")} SQFT`
                : "N/A"}
            </p>
          </div>

          {/* External Link field */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">External Link</p>
            <p className="text-sm text-[#009696] break-all">
              {listingInformation?.link ? (
                <a
                  href={listingInformation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009696] underline"
                >
                  {listingInformation.link}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      {listingInformation?.note && (
        <div className="mt-6">
          <h2 className="section-title">Additional Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(listingInformation.note),
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ViewListingInformation;

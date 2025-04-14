import AccessInstructionSkeleton from "@/components/access-instruction/AccessInstructionSkeleton";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import { useGetViewListingInformation } from "@/hooks/useGetViewListingInformation";

import { formatCurrency } from "@/lib/utils/formatCurrency";
import DOMPurify from "dompurify";
import { Link, useParams } from "react-router-dom";

const ViewListingInformation = () => {
  const { id } = useParams();

  const { accessInstruction, isLoading } = useGetViewListingInformation(id);
  console.log(accessInstruction);

  const notes = accessInstruction?.notes
    ? DOMPurify.sanitize(accessInstruction?.notes)
    : "";

  if (isLoading) {
    return <AccessInstructionSkeleton />;
  }

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div>
          <Link
            to="/my-systems/team/access-instructions"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
          >
            <ArrowLeftSvg />
          </Link>
          <div>
            <h2 className="section-title">Listing Information</h2>
            <p className="text-sm text-[#009696] leading-[21px] tracking-[-0.14px]">
              {accessInstruction?.address || "N/A"}
            </p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
          <ThreeDotsSvg />
        </button>
      </div>

      <div className="mt-5">
        <h2 className="section-title">Property Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">SKU</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.sku || "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Email</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.email || "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Address</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.address || "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Price</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.price
                ? formatCurrency(accessInstruction.price)
                : "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Expiration Date
            </p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.expiration_date || "N/A"}
            </p>
          </div>
          {/* <p className="text-sm text-[#009696]">
  {accessInstruction?.commission_rate
    ? `${accessInstruction.commission_rate}%`
    : "N/A"}
</p>

<p className="text-sm text-[#009696]">
  {accessInstruction?.co_list_percentage
    ? `${accessInstruction.co_list_percentage}%`
    : "N/A"}
</p> */}

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Commission Rate
            </p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.commission_rate
                ? `${accessInstruction.commission_rate}%`
                : "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Co List Percentage
            </p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.co_list_percentage
                ? `${accessInstruction.co_list_percentage}%`
                : "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Property Source ID
            </p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.property_source_id || "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Is Development?
            </p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.is_development ? "Yes" : "No"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Add to Website</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.add_to_website ? "Yes" : "No"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4 col-span-full">
            <p className="font-bold text-sm text-[#ffffffcc]">Agent</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.agent
                ? `${accessInstruction.agent.first_name} ${accessInstruction.agent.last_name}`
                : "N/A"}
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Beds</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.beds ?? "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Full Baths</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.full_baths ?? "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Half Baths</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.half_baths ?? "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Size</p>
            <p className="text-sm text-[#009696]">
              {accessInstruction?.size ?? "N/A"}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4 col-span-full">
            <p className="font-bold text-sm text-[#ffffffcc]">External Link</p>
            <p className="text-sm text-[#009696] break-all">
              {accessInstruction?.link ? (
                <a
                  href={accessInstruction.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009696] underline"
                >
                  {accessInstruction.link}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
        </div>
      </div>

      {accessInstruction?.note && (
        <div className="mt-6">
          <h2 className="section-title">Additional Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-[2px] py-4">
              <p className="font-bold text-sm text-[#ffffffcc]">Note</p>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(accessInstruction.note),
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewListingInformation;

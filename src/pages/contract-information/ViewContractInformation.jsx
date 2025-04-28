import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useGetViewListingInformation } from '@/hooks/useGetViewListingInformation';

import { formatCurrency } from '@/lib/utils/formatCurrency';
import DOMPurify from 'dompurify';
import { Link, useParams } from 'react-router-dom';

const ViewContractInformation = () => {
  const { id } = useParams();

  const { listingInformation, isLoading } = useGetViewListingInformation(id);

  //   if (isLoading) {
  //     return <AccessInstructionSkeleton />;
  //   }

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex gap-2 items-center">
          <Link
            to="/my-systems/new-listing/listing-information"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
          >
            <ArrowLeftSvg />
          </Link>

          <h2 className="section-title">Contract Information</h2>
        </div>
        <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
          <ThreeDotsSvg />
        </button>
      </div>

      <div className="mt-5">
        <h2 className="section-title">Contract Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Address</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.address || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Closing Date</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.closing_date || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Price</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.price
                ? formatCurrency(listingInformation.price)
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Date Under Contract
            </p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.date_under_contract || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Commission Percentage
            </p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.commission_rate
                ? `${listingInformation.commission_rate}%`
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Agent</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.agent
                ? `${listingInformation.agent.first_name} ${listingInformation.agent.last_name}`
                : 'N/A'}
            </p>
          </div>
        </div>

        <h2 className="section-title mt-10">Contract Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Name</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.beds ?? 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Company</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.full_baths ?? 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Email</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.half_baths ?? 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Phone</p>
            <p className="text-sm text-[#009696]">
              {listingInformation?.size ?? 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {listingInformation?.note && (
        <div className="mt-6">
          <h2 className="section-title">Additional Comments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-[2px] py-4">
              <p className="font-bold text-sm text-[#ffffffcc]">Note</p>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(listingInformation.note),
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewContractInformation;

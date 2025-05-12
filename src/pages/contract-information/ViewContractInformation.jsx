import ContractInformationSkeleton from '@/components/contract-information/ContractInformation';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useGetViewContractInformation } from '@/hooks/new-contract-information';

import { formatCurrency } from '@/lib/utils/formatCurrency';
import { format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';

const ViewContractInformation = () => {
  const { id } = useParams();

  const { contractInformation, isLoading } = useGetViewContractInformation(id);

  if (isLoading) {
    return <ContractInformationSkeleton />;
  }

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex gap-2 items-center">
          <Link
            to="/my-systems/new-contract/contract-information"
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
              {contractInformation?.address || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Closing Date</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.closing_data || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Price</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.price
                ? formatCurrency(contractInformation.price)
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Contract Date</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.contract_data
                ? format(contractInformation?.contract_data, 'MM/dd/yyyy')
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Date Listed</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.date_listed || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Commission Percentage
            </p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.commision_percentage
                ? `${contractInformation.commision_percentage}%`
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Agent</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.agent
                ? `${contractInformation.agent.first_name} ${contractInformation.agent.last_name}`
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Represent</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.represent || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Co-Listing</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.is_co_listing ? 'Yes' : 'No'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Co-Agent Percentage
            </p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.co_agent_percentage
                ? `${contractInformation.co_agent_percentage}%`
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Referral Percentage
            </p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.referral_percentage
                ? `${contractInformation.referral_percentage}%`
                : 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">
              Property Source
            </p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.property_sources?.name || 'N/A'}
            </p>
          </div>
        </div>

        <h2 className="section-title mt-10">Contact Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Name</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.name || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Company</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.company || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Email</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.email || 'N/A'}
            </p>
          </div>

          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold text-sm text-[#ffffffcc]">Phone</p>
            <p className="text-sm text-[#009696]">
              {contractInformation?.phone || 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {contractInformation?.comment && (
        <div className="mt-6">
          <h2 className="section-title">Additional Comments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-[2px] py-4">
              <p className="font-bold text-sm text-[#ffffffcc]">Comment</p>
              <div className="text-light/60">{contractInformation.comment}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewContractInformation;

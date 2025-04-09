import AccessInstructionSkeleton from '@/components/access-instruction/AccessInstructionSkeleton';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useGetSingleAccessInstruction } from '@/hooks/access-instructions.hook';
import { formatCurrency } from '@/lib/utils/formatCurrency';
import DOMPurify from 'dompurify';
import { Link, useParams } from 'react-router-dom';

const ViewAccessInstruction = () => {
  const { id } = useParams();

  const { accessInstruction, isLoading } = useGetSingleAccessInstruction(id);

  const notes = accessInstruction?.notes
    ? DOMPurify.sanitize(accessInstruction?.notes)
    : '';

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
            <h2 className="section-title">Access Instructions</h2>
            <p className="text-sm text-[#009696] leading-[21px] tracking-[-0.14px]">
              {accessInstruction?.address}
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
          {/* Address */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Address
            </p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              {accessInstruction?.address}
            </p>
          </div>

          {/* Property Type */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Property Type
            </p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              {accessInstruction?.property_type}
            </p>
          </div>

          {/* Price */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Price
            </p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              {formatCurrency(accessInstruction?.price)}
            </p>
          </div>

          {/* Size */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Size</p>
            <p className="text-sm font-normal leading-5 text-[#009696]">
              {accessInstruction?.size} sq ft
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <h2 className="section-title">Access Instructions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 md:mt-4">
          {/* Key Access Code */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Key Access Code
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              {accessInstruction?.key_access_code}
            </p>
          </div>

          {/* Lockbox Location */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Lockbox Location
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              {accessInstruction?.lockbox_location}
            </p>
          </div>

          {/* Key Pickup Instructions */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Key Pickup Instructions (if applicable):
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              {accessInstruction?.key_pickup_instructions}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <h2 className="section-title">Gated Community Instructions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 md:mt-4">
          {/* Gate Code */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Gate Code
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              {accessInstruction?.gate_code}
            </p>
          </div>

          {/* Gate Access Location */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Gate Access Location
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              {accessInstruction?.gate_access_location}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <h2 className="section-title">Parking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-12 md:mt-4">
          {/* Visitor Parking */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Visitor Parking
            </p>
            <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
              {accessInstruction?.visitor_parking}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <h2 className="section-title">Additional Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 md:mt-4">
          {/* Notes */}
          <div className="space-y-[2px]  py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Notes
            </p>

            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: notes }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAccessInstruction;

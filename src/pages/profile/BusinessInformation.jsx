import EditBusinessAddress from '@/components/profile/business-information/EditBusinessAddress';
import EditBusinessName from '@/components/profile/business-information/EditBusinessName';
import EditBusinessPhone from '@/components/profile/business-information/EditBusinessPhone';
import EditPhone from '@/components/profile/business-information/EditPhone';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import { useGetProfile } from '@/hooks/profile.hook';
import { Link } from 'react-router-dom';

const BusinessInformation = () => {
  const { profile, isLoading } = useGetProfile();
console.log("profile", profile);

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link to="/profile">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Business Information </h2>
        </div>

        <div className="mt-[25px]">
          {/* Business Name */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc] capitalize">
                Business Name
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-32" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light capitalize">
                  {profile?.businesses[0]?.business_name || 'N/A'}
                </p>
              )}
            </div>
            <EditBusinessName />
          </div>

          {/* Business Address */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc] capitalize">
                Business Address
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-32" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light capitalize">
                  {profile?.businesses[0]?.business_address || 'N/A'}
                </p>
              )}
            </div>
            <EditBusinessAddress />
          </div>

          {/* Business Phone Number */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc] capitalize">
                Business Phone Number
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-32" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light">
                  {profile?.businesses[0]?.business_phone || 'N/A'}
                </p>
              )}
            </div>
            <EditBusinessPhone />
          </div>

          {/* Phone */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc] capitalize">
                Phone Number
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-32" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light">
                  {profile?.phone || 'N/A'}
                </p>
              )}
            </div>
            <EditPhone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;

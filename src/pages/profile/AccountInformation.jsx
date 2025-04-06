import EditBio from '@/components/profile/account-information/EditBio';
import EditBirthDay from '@/components/profile/account-information/EditBirthDay';
import EditHomeAddress from '@/components/profile/account-information/EditHomeAddress';
import EditPhone from '@/components/profile/account-information/EditPhone';
import EditSocialMedia from '@/components/profile/account-information/EditSocialMedia';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import FacebookSvg from '@/components/svgs/FacebookSvg';
import InstaSvg from '@/components/svgs/InstaSvg';
import XSvg from '@/components/svgs/XSvg';
import { STATUS } from '@/constants';
import { useGetProfile } from '@/hooks/profile.hook';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const AccountInformation = () => {
  const { profile, isLoading } = useGetProfile();

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link to="/profile">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Account Information</h2>
        </div>
        <div className="mt-[25px]">
          {/* Full Name */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Full name
            </p>
            {isLoading ? (
              <div className="h-5 bg-gray-800 rounded animate-pulse w-32" />
            ) : (
              <p className="text-sm font-medium leading-5 text-light capitalize">
                {profile?.first_name
                  ? `${profile?.first_name} ${profile?.last_name}`
                  : 'N/A'}
              </p>
            )}
          </div>

          {/* Role */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Role</p>
            {isLoading ? (
              <div className="h-5 bg-gray-800 rounded animate-pulse w-16" />
            ) : (
              <p className="text-sm font-medium leading-5 text-light capitalize">
                {profile?.role}
              </p>
            )}
          </div>

          {/* License Number */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              License Number
            </p>
            {isLoading ? (
              <div className="h-5 bg-gray-800 rounded animate-pulse w-36" />
            ) : (
              <p className="text-sm font-medium leading-5 text-light uppercase">
                {profile?.licence || 'N/A'}
              </p>
            )}
          </div>

          {/* ECAR ID */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              ECAR ID
            </p>
            {isLoading ? (
              <div className="h-5 bg-gray-800 rounded animate-pulse w-36" />
            ) : (
              <p className="text-sm font-medium leading-5 text-light">
                {profile?.ecar_id || 'N/A'}
              </p>
            )}
          </div>

          {/* Status */}
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Status
            </p>
            {isLoading ? (
              <div className="h-5 bg-gray-800 rounded animate-pulse w-16" />
            ) : (
              <p className="text-sm font-medium leading-5 text-light capitalize">
                {STATUS[profile?.status]}
              </p>
            )}
          </div>

          {/* Home Address */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Home address
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-36" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light">
                  {profile?.address || 'N/A'}
                </p>
              )}
            </div>
            <EditHomeAddress />
          </div>

          {/* Email */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Personal email address
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-32" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light">
                  {profile?.email}
                </p>
              )}
            </div>
            {/* <EditEmail /> */}
          </div>

          {/* Phone */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Phone number
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

          {/* BirthDay */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Birthday
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-20" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light">
                  {profile?.date_of_birth
                    ? format(
                        new Date(String(profile?.date_of_birth)),
                        'MM/dd/yyyy'
                      )
                    : 'N/A'}
                </p>
              )}
            </div>
            <EditBirthDay />
          </div>

          {/* Spears Group anniversary Home address */}
          {/* <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Spears Group anniversary Home address
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-36" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light">
                  {profile?.address || 'N/A'}
                </p>
              )}
            </div>
            <EditSpearsAddress />
          </div> */}

          {/* Social Media */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc] mb-1">
                Social media
              </p>
              {isLoading ? (
                <div className="flex gap-3">
                  <div className="h-5 bg-gray-800 rounded animate-pulse w-5" />
                  <div className="h-5 bg-gray-800 rounded animate-pulse w-5" />
                  <div className="h-5 bg-gray-800 rounded animate-pulse w-5" />
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  {profile?.instagram ? (
                    <a href={profile.instagram} target="_blank">
                      <InstaSvg />
                    </a>
                  ) : (
                    <InstaSvg className="opacity-60" />
                  )}
                  {profile?.twitter ? (
                    <a href={profile.twitter} target="_blank">
                      <XSvg />
                    </a>
                  ) : (
                    <XSvg className="opacity-60" />
                  )}
                  {profile?.facebook ? (
                    <a href={profile.facebook} target="_blank">
                      <FacebookSvg />
                    </a>
                  ) : (
                    <FacebookSvg className="opacity-60" />
                  )}
                </div>
              )}
            </div>
            <EditSocialMedia />
          </div>

          {/* Bio */}
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                About Me
              </p>
              {isLoading ? (
                <div className="h-5 bg-gray-800 rounded animate-pulse w-48" />
              ) : (
                <p className="text-sm font-medium leading-5 text-light">
                  {profile?.bio || 'N/A'}
                </p>
              )}
            </div>
            <EditBio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;

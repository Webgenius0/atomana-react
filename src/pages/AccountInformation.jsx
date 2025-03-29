import Modal from '@/components/shared/modal';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import FacebookSvg from '@/components/svgs/FacebookSvg';
import InstaSvg from '@/components/svgs/InstaSvg';
import XSvg from '@/components/svgs/XSvg';
import { STATUS } from '@/constants';
import { useGetProfile, usePostProfile } from '@/hooks/profile.hook';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const AccountInformation = () => {
  const { profile } = useGetProfile();
  console.log(profile)
 
  const {mutate:editProfile, modal, setModal, isPending} = usePostProfile();

  const handleCloseModal = () =>{
    setModal(null)
  }

  console.log(isPending)

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
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Full name
            </p>
            <p className="text-sm font-medium leading-5 text-light capitalize">
              {profile?.first_name
                ? `${profile?.first_name} ${profile?.last_name}`
                : 'N/A'}
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">Role</p>
            <p className="text-sm font-medium leading-5 text-light capitalize">
              {profile?.role}
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              License Number
            </p>
            <p className="text-sm font-medium leading-5 text-light uppercase">
              {profile?.licence}
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              ECAR ID
            </p>
            <p className="text-sm font-medium leading-5 text-light">
              {profile?.ecar_id}
            </p>
          </div>
          <div className="space-y-[2px] border-b border-secondPrimary py-4">
            <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
              Status
            </p>
            <p className="text-sm font-medium leading-5 text-light capitalize">
              {STATUS[profile?.status]}
            </p>
          </div>

          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Home address
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                {profile?.address}
              </p>
            </div>

            <Link
              onClick={() =>setModal('address')}
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              EDIT
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Personal email address
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                {profile?.email}
              </p>
            </div>

            <Link
              onClick={()=>setModal('email')}
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
                {profile?.phone || 'N/A'}
              </p>
            </div>

            <Link
               onClick={() =>setModal('phone')}
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              MANAGE
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Birthday
              </p>
              <p className="text-sm font-medium leading-5 text-light">
  {profile?.date_of_birth
    ? format(new Date(String(profile?.date_of_birth)), 'MM/dd/yyyy')
    : 'N/A'}
</p>
            </div>

            <Link
               onClick={() =>setModal('birthday')}
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              MANAGE
            </Link>
          </div>
          <div className="border-b border-secondPrimary py-4 flex items-center justify-between pr-5">
            <div className="space-y-[2px]">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Spears Group anniversary Home address
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                {profile?.address || 'N/A'}
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
              <p className="font-bold leading-5 text-sm text-[#ffffffcc] mb-1">
                Social media
              </p>
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
                About Me
              </p>
              <p className="text-sm font-medium leading-5 text-light">
                {profile?.bio || 'N/A'}
              </p>
            </div>
            <Link
              onClick={() => setModal('about')}
              className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
            >
              EDIT
            </Link>
            {
              modal && <Modal modal={modal} onClose={handleCloseModal} profileInfo={profile} editProfile={editProfile} isPending={isPending}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;

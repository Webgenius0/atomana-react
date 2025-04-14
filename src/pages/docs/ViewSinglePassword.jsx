import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useGetSinglePassword } from '@/hooks/docs.hook';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewSinglePassword() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();
  const { passwordDetails, isLoading } = useGetSinglePassword(slug);

  const notes = passwordDetails?.notes
    ? DOMPurify.sanitize(passwordDetails.notes)
    : '';

  console.log(notes);

  if (isLoading) {
    return (
      <div className="px-5 py-[25px] overflow-y-auto w-full">
        <div className="flex flex-col items-start gap-4 text-left p-6 rounded-lg w-full bg-secondPrimary/60 animate-pulse">
          {/* Title skeleton */}
          <div className="h-7 bg-secondPrimary rounded w-3/4"></div>

          {/* Time skeleton */}
          <div className="h-5 bg-secondPrimary rounded w-1/4"></div>

          {/* Content skeleton - multiple lines */}
          <div className="space-y-3 w-full">
            <div className="h-4 bg-secondPrimary rounded w-full"></div>
            <div className="h-4 bg-secondPrimary rounded w-5/6"></div>
            <div className="h-4 bg-secondPrimary rounded w-4/6"></div>
          </div>

          {/* Button skeleton */}
          <div className="mt-4 h-10 bg-secondPrimary rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-full px-5 py-[25px]">
        <Link to="/my-systems/team/docs/password-list">
          <ArrowLeftSvg />
        </Link>
        <h2 className="section-title">{passwordDetails?.title}</h2>
        <div className="flex items-center gap-2.5 ml-auto">
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <EditIcon className="text-white size-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button>
        </div>
      </div>
      <div className="px-5 py-[25px] overflow-y-auto scrollbar-none text-center flex-1 w-full">
        <div className="flex flex-col items-start gap-4 text-left p-6 rounded-lg w-full">
          <h2 className="text-xl font-bold text-white">
            {passwordDetails?.title}
          </h2>
          {passwordDetails?.updated_at && (
            <p className="text-sm text-[#ffffff80]">
              Time: {format(passwordDetails?.updated_at, 'p')}
            </p>
          )}

          <div className="mt-1 border-b border-white/30 w-full py-3 space-y-3">
            <h3 className="text-sm font-bold text-white">Website</h3>
            <p className="text-sm text-[#ffffff80]">
              {passwordDetails?.website}
            </p>
          </div>

          <div className="mt-1 border-b border-white/30 w-full py-3 space-y-3">
            <h3 className="text-sm font-bold text-white">Username</h3>
            <p className="text-sm text-[#ffffff80]">
              {passwordDetails?.user_name}
            </p>
          </div>

          <div className="mt-1 border-b border-white/30 w-full py-3 space-y-3">
            <h3 className="text-sm font-bold text-white">Password</h3>
            <div className="flex justify-between items-center">
              <input
                type={show ? 'text' : 'password'}
                value={passwordDetails?.password}
                className="text-sm text-[#ffffff80] bg-transparent border-none outline-none"
              />
              <button
                onClick={() => setShow((show) => !show)}
                className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
              >
                {show ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="mt-1 border-b border-white/30 w-full py-3 space-y-3">
            <h3 className="text-sm font-bold text-white">Email</h3>
            <p className="text-sm text-[#ffffff80]">{passwordDetails?.email}</p>
          </div>

          <div className="mt-1 border-b border-white/30 w-full py-3 space-y-3">
            <h3 className="text-sm font-bold text-white">Notes</h3>
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: notes }}
            />
          </div>

          <button
            onClick={() => navigate('/my-systems/team/docs/shared-notes')}
            className="mt-4 px-4 py-2 bg-secondPrimary text-white rounded-md hover:bg-opacity-80 transition"
          >
            Back to Notes
          </button>
        </div>
      </div>
    </>
  );
}

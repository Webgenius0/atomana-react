import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useGetSingleNote } from '@/hooks/docs.hook';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import { EditIcon } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewSingleNote() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { note, isLoading } = useGetSingleNote(slug);

  const notes = note?.notes ? DOMPurify.sanitize(note.notes) : '';

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
        <h2 className="section-title">{note?.title}</h2>
        <div className="flex items-center gap-2.5 ml-auto">
          <button
            onClick={() =>
              navigate(`/my-systems/team/docs/shared-notes/edit-note/${slug}`)
            }
            className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95"
          >
            <EditIcon className="text-white size-4" />
          </button>
          {/* <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button> */}
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button>
        </div>
      </div>

      <div className="px-5 py-[25px] overflow-y-auto scrollbar-none text-center flex-1 w-full">
        <div className="flex flex-col items-start gap-4 text-left p-6 rounded-lg w-full">
          <h2 className="text-xl font-bold text-white">{note?.title}</h2>
          {note?.updated_at && (
            <p className="text-sm text-[#ffffff80]">
              Time: {format(note?.updated_at, 'p')}
            </p>
          )}
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: notes }}
          />

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

import person from '@/assets/images/person.png';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import {
  useGetOpenHouseFeedbacks,
  useGetSingleOpenHouse,
} from '@/hooks/open-house.hook';
import { Link, useParams } from 'react-router-dom';

const ViewOpenHouse = () => {
  const { id } = useParams();

  const { openHouse, isLoading: isOpenHouseLoading } =
    useGetSingleOpenHouse(id);
  const { feedbacks, isLoading: isFeedbacksLoading } =
    useGetOpenHouseFeedbacks(id);

  return (
    <>
      {isOpenHouseLoading ? (
        <OpenHouseLoadingSkeleton />
      ) : (
        <>
          <div className="flex items-center gap-4 justify-between">
            <div>
              <Link
                to="/my-systems/open-house/open-house-list"
                className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
              >
                <ArrowLeftSvg />
              </Link>
              {/* <div>
            <h2 className="section-title">Open House</h2>
            <p className="text-sm text-[#009696] leading-[21px] tracking-[-0.14px]">
              {openHouse?.address || 'N/A'}
            </p>
          </div> */}
            </div>
            <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
              <ThreeDotsSvg />
            </button>
          </div>

          <div className="mt-5">
            <h2 className="section-title">Open House Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
              {/* Address */}
              <div className="space-y-[2px] border-b border-secondPrimary py-4">
                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                  Address
                </p>
                <p className="text-sm font-normal leading-5 text-[#009696]">
                  {openHouse?.address || 'N/A'}
                </p>
              </div>

              {/* Date */}
              <div className="space-y-[2px] border-b border-secondPrimary py-4">
                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                  Date
                </p>
                <p className="text-sm font-normal leading-5 text-[#009696]">
                  {openHouse?.date || 'N/A'}
                </p>
              </div>

              {/* Time Frame */}
              <div className="space-y-[2px] border-b border-secondPrimary py-4">
                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                  Time Frame
                </p>
                <p className="text-sm font-normal leading-5 text-[#009696]">
                  {`${openHouse?.start_time} - ${openHouse?.end_time}`}
                </p>
              </div>

              {/* Number of Signs */}
              <div className="space-y-[2px] border-b border-secondPrimary py-4">
                <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                  Number of Signs
                </p>
                <p className="text-sm font-normal leading-5 text-[#009696]">
                  {openHouse?.sign_number}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {isFeedbacksLoading ? (
        <FeedbacksLoadingSkeleton />
      ) : (
        <div className="mt-[25px]">
          <h2 className="section-title">
            Open House Feedbacks ({feedbacks?.length || '0'})
          </h2>

          {feedbacks?.length ? (
            feedbacks?.map((feedback) => (
              <div key={feedback.id} className="space-y-[2px] mt-10">
                <div>
                  <div className="flex justify-start items-center gap-2 mb-2">
                    <div>
                      {' '}
                      <img
                        src={person || feedback?.user?.avatar || person}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="overflow-hidden text-gray-300 truncate font-inter text-[12px] font-semibold leading-normal tracking-[-0.12px]">
                        {feedback?.user?.first_name
                          ? `${feedback?.user?.first_name} ${feedback?.user?.last_name}`
                          : 'N/A'}
                      </h1>
                      <p className="overflow-hidden text-[rgba(204,204,204,0.75)] truncate font-inter text-[12px] font-normal leading-normal tracking-[-0.12px]">
                        {feedback?.user?.handle || 'N/A'}
                      </p>
                    </div>
                  </div>
                  {/* Number of People */}
                  <div className="space-y-[2px] border-b border-secondPrimary py-4">
                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                      Number of People
                    </p>
                    <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                      {feedback?.people_count || 'N/A'}
                    </p>
                  </div>
                  {/* Feedback */}
                  <div className="space-y-[2px] border-b border-secondPrimary py-4">
                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                      Feedback
                    </p>
                    <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                      {feedback?.feedback || 'N/A'}
                    </p>
                  </div>
                  {/* Additional Feedback */}
                  <div className="space-y-[2px] border-b border-secondPrimary py-4">
                    <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                      Additional Feedback
                    </p>
                    <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                      {feedback?.additional_feedback || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white/80 text-center py-20">No Feedbacks</div>
          )}
        </div>
      )}
    </>
  );
};

function OpenHouseLoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5">
          <div className="w-6 h-6 bg-gray-300/20 rounded" />
        </div>
        <div className="w-10 h-10 rounded-full border border-gray-300/20" />
      </div>

      <div className="mt-5">
        <div className="h-8 w-48 bg-gray-300/20 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-12 md:mt-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="space-y-[2px] border-b border-gray-300/20 py-4"
            >
              <div className="h-5 w-24 bg-gray-300/20 rounded mb-2" />
              <div className="h-5 w-32 bg-gray-300/20 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedbacksLoadingSkeleton() {
  return (
    <div className="animate-pulse mt-[25px]">
      <div className="h-8 w-48 bg-gray-300/20 rounded mb-8" />

      {[...Array(2)].map((_, index) => (
        <div key={index} className="space-y-[2px] mt-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gray-300/20 rounded-full" />
            <div>
              <div className="h-4 w-32 bg-gray-300/20 rounded mb-2" />
              <div className="h-4 w-24 bg-gray-300/20 rounded" />
            </div>
          </div>

          {[...Array(3)].map((_, fieldIndex) => (
            <div
              key={fieldIndex}
              className="space-y-[2px] border-b border-gray-300/20 py-4"
            >
              <div className="h-5 w-32 bg-gray-300/20 rounded mb-2" />
              <div className="h-16 w-full bg-gray-300/20 rounded" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ViewOpenHouse;

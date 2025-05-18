import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import SearchIconSvg from '@/components/svgs/SearchIconSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCreateVendorReview, useGetSingleVendor } from '@/hooks/vendor.hook';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import { Link, useParams } from 'react-router-dom';
import person from '../assets/images/person.png';

const VendorDetails = () => {
  const { vendorSlug } = useParams();

  const { vendorDetails, isLoading, searchQuery, setSearchQuery, reviews } =
    useGetSingleVendor(vendorSlug);

  const additionalNote = vendorDetails?.additional_note
    ? DOMPurify.sanitize(vendorDetails?.additional_note)
    : '';

  const {
    mutate: addReview,
    isPending,
    form,
    open,
    setOpen,
  } = useCreateVendorReview(vendorSlug);

  const onSubmit = (data) => {
    addReview({ ...data, vendor_id: vendorDetails?.id });
  };

  if (isLoading) return <p className="text-white">Loading...</p>;

  return (
    <>
      <div className="pt-6 md:pt-4 lg:pt-4 pb-3">
        <div className="flex items-center gap-4 justify-between">
          <Link
            to="/my-systems/vendor-list/utilities/"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
          >
            <ArrowLeftSvg />
            <h2 className="section-title">{vendorDetails?.name}</h2>
            {/* <h1>{vendorSlug} Details</h1>
            <h2 className="text-2xl font-bold">Name</h2> */}
          </Link>

          <div className="flex items-center gap-2.5">
            <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
              <PersonPlusSvg />
            </button>
            <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
              <ThreeDotsSvg />
            </button>
          </div>
        </div>

        <div className="mt-5 md:mt-8 lg:mt-[50px]">
          <h2 className="section-title">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 md:mt-4">
            {/* website */}
            <div className="space-y-[2px] border-b border-secondPrimary py-4">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Website
              </p>
              <p className="text-sm font-normal leading-5 text-[#009696]">
                {vendorDetails?.website}
              </p>
            </div>

            {/* Email Address*/}
            <div className="space-y-[2px] border-b border-secondPrimary py-4">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Email address
              </p>
              <p className="text-sm font-normal leading-5 text-[#009696]">
                {vendorDetails?.email}
              </p>
            </div>

            {/* POhone Number */}
            <div className="space-y-[2px] border-b border-secondPrimary py-4">
              <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
                Phone number
              </p>
              <p className="text-sm font-normal leading-5 text-[#ffffffcc]">
                {vendorDetails?.phone}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-8 lg:mt-[20px]">
          <h2 className="section-title">About the Vendor</h2>
          <p className="font-bold leading-5 text-sm text-[#ffffffcc]">
            {vendorDetails?.about}
          </p>
        </div>
        {additionalNote && (
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
                  dangerouslySetInnerHTML={{ __html: additionalNote }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="mt-5 md:mt-8 lg:mt-[30px]">
          <div className="flex justify-between items-center gap-4">
            <div>
              <div className="flex gap-2 ">
                <div>1</div>
                <div className="section-title">
                  4.99 ({vendorDetails?.reviews?.length || 0} Agent Reviews)
                </div>
              </div>
            </div>
            <div>
              {' '}
              <div className="flex items-center gap-2.5">
                <div className="relative w-full max-w-xs">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border rounded-full bg-transparent pl-10 pr-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white/60"
                    placeholder="Search"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <SearchIconSvg />
                  </div>
                </div>
                <div>
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <input
                        className="request-btn approve cursor-pointer"
                        type="submit"
                        value="Add a Review"
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader className="mb-2">
                        <DialogTitle>New Review</DialogTitle>
                      </DialogHeader>

                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-3 w-full mb-3"
                      >
                        <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                          Review
                        </label>
                        <textarea
                          className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                          placeholder="Write your review"
                          {...form.register('comment')}
                        />
                        {form.formState?.errors?.comment?.message && (
                          <p className="text-base font-semibold text-red-500">
                            {form.formState?.errors?.comment?.message}
                          </p>
                        )}
                        <div className="flex justify-end">
                          <Button disabled={isPending}>
                            {isPending ? 'Adding...' : 'Add Review'}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {reviews?.length ? (
            reviews?.map((review) => (
              <div
                key={review.id}
                className="space-y-[2px] border-b border-secondPrimary py-4"
              >
                <div>
                  <div className="flex justify-start items-center gap-2 mb-2">
                    <div>
                      {' '}
                      <img src={review?.avatar || person} alt="" />
                    </div>
                    <div>
                      <h1 className="overflow-hidden text-gray-300 truncate font-inter text-[12px] font-semibold leading-normal tracking-[-0.12px]">
                        {review?.user_name || 'John Hallard'}
                      </h1>
                      <p className="overflow-hidden text-[rgba(204,204,204,0.75)] truncate font-inter text-[12px] font-normal leading-normal tracking-[-0.12px]">
                        {format(review?.created_at, 'PP')}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-white font-inter text-[14px] font-normal leading-[20px]">
                    {review?.comment}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white/80 text-center py-20">No Reviews</div>
          )}
        </div>
      </div>
    </>
  );
};

export default VendorDetails;

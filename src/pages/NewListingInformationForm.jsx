import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useStoreProperty } from '@/hooks/property.hook';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid Email' }),
  address: z.string().min(1, 'Address is required'),
  price: z
    .string()
    .min(1, 'Price is required')
    .refine((value) => !isNaN(Number(value)), { message: 'Invalid Price' }),
  expiration_date: z.preprocess((value) => {
    return format(value, 'yyyy-MM-dd');
  }, z.string({ required_error: 'Expiration date is required' }).min(1, 'Expiration date is required')),
  development: z.enum(['1', '0'], {
    required_error: 'Development is required',
  }),
  co_listing: z.enum(['1', '0'], { required_error: 'Co-listing is required' }),
  source: z.string().min(1, 'Source is required'),
});

function NewListingInformationForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      address: '',
      price: '',
      expiration_date: '',
      development: '1',
      co_listing: '0',
      source: '',
    },
    resolver: zodResolver(formSchema),
  });

  const location = useLocation();
  const {
    mutate: storeProperty,
    data: storeResponse,
    isPending,
    isSuccess,
  } = useStoreProperty();

  //   const development = watch('development');
  //   const co_listing = watch('co_listing');

  const onSubmit = (data) => {
    storeProperty(data);
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    reset();
  };

  useEffect(() => {
    if (storeResponse?.success && !isPending && isSuccess) {
      toast.success('Property added successfully!');
      reset();
    }
  }, [storeResponse, isPending, isSuccess]);

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <Link
          to={`${location.state?.from || '/my-systems/new-listing'}`}
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
        >
          <ArrowLeftSvg />
          <h2 className="section-title">New Listing Information Form</h2>
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
      <div className="max-w-[670px] w-full mx-auto mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[670px] mx-start flex flex-col gap-[15px]"
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Email
            </label>
            <input
              type="email"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="youremail@spearsgroup.com"
              {...register('email')}
            />
            {errors?.email && (
              <p className="text-red-500 text-xs">{errors?.email?.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Property Address
            </label>
            <input
              type="text"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type the address and subdivision name here"
              {...register('address')}
            />
            {errors?.address && (
              <p className="text-red-500 text-xs">{errors?.address?.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Price
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="$0"
              {...register('price')}
            />
            {errors?.price && (
              <p className="text-red-500 text-xs">{errors?.price?.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Expiration Date?
            </label>

            <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
              <Controller
                name="expiration_date"
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <CalenderSvg />
            </label>

            {errors?.expiration_date && (
              <p className="text-red-500 text-xs">
                {errors?.expiration_date?.message}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Is this a development?
            </p>
            <Controller
              name="development"
              control={control}
              render={({ field }) => (
                <div className="flex space-x-4">
                  <label className="flex items-center gap-2">
                    <input {...field} type="radio" value="1" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Yes
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input {...field} type="radio" value="0" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      No
                    </p>
                  </label>
                </div>
              )}
            />
            {errors?.development && (
              <p className="text-red-500 text-xs">
                {errors?.development?.message}
              </p>
            )}
          </div>

          {/* Add to development page (conditional) */}
          {/* {development === '1'  && (
            <div className="flex items-center sm:gap-6 gap-4 sm:ml-12 ml-8">
              <FormLineSvg />
              <div className="w-full">
                <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light mb-3">
                  Would you like it added to the development page on the Spears
                  Group website?
                </p>
                <Controller
                  name="addToDevelopmentPage"
                  control={control}
                  render={({ field }) => (
                    <div className="flex space-x-4">
                      <label className="flex items-center gap-2">
                        <input {...field} type="radio" value="Yes" />
                        <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                          Yes
                        </p>
                      </label>
                      <label className="flex items-center gap-2">
                        <input {...field} type="radio" value="No" />
                        <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                          No
                        </p>
                      </label>
                    </div>
                  )}
                />
                {errors?.email && (
                  <p className="text-red-500 text-xs">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
            </div>
          )} */}

          {/* Is this a co-listing? */}
          <div>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Is this a co-listing?
            </p>
            <Controller
              name="co_listing"
              control={control}
              render={({ field }) => (
                <div className="flex space-x-4">
                  <label className="flex items-center gap-2">
                    <input {...field} type="radio" value="1" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Yes
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input {...field} type="radio" value="0" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      No
                    </p>
                  </label>
                </div>
              )}
            />
            {errors?.co_listing && (
              <p className="text-red-500 text-xs">
                {errors?.co_listing?.message}
              </p>
            )}
          </div>
          {/* Co-listing details (conditional) */}
          {/* {co_listing === '1'  && (
            <div className="flex items-center sm:gap-6 gap-4 sm:ml-12 ml-8">
              <FormLineSvg />
              <div className="w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  <p className="mb-3">Who are you co-listing with?</p>
                  <Controller
                    name="coListingDetails"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Type the address and subdivision name here"
                        className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full outline-none"
                      />
                    )}
                  />
                </label>
                {errors?.email && (
                  <p className="text-red-500 text-xs">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
            </div>
          )} */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What was the source of this Lead?
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="source"
              {...register('source')}
            />
            {errors?.source && (
              <p className="text-red-500 text-xs">{errors?.source?.message}</p>
            )}
          </div>
        </form>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  items-center gap-4 justify-between mt-4 md:mt-6">
            <div className="flex items-center  gap-4 sm:w-unset w-full">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value="Submit"
                disabled={isPending}
              />
            </div>

            <button
              onClick={handleResetForm}
              className="request-btn text-light"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewListingInformationForm;

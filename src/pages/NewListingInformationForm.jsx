import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { Select } from '@/components/ui/select';
import {
  useCoListingDropdown,
  useSourceDropdown,
  useStoreProperty,
} from '@/hooks/property.hook';
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
    if (!value) return null;
    try {
      const date = new Date(value);
      return isNaN(date.getTime()) ? null : format(date, 'yyyy-MM-dd');
    } catch {
      return null;
    }
  }, z.string({ required_error: 'Expiration date is required' })),
  is_development: z.enum(['1', '0'], {
    // Changed from 'development' to match form
    required_error: 'This field is required',
  }),
  add_to_website: z.enum(['1', '0'], {
    required_error: 'This field is required',
  }),
  commission_rate: z.preprocess(
    (val) => {
      if (val === '') return undefined;
      const num = parseFloat(val);
      return isNaN(num) ? val : num;
    },
    z
      .number({
        required_error: 'Commission rate is required',
        invalid_type_error: 'Must be a valid number',
      })
      .min(0, 'Must be positive')
      .max(100, 'Cannot exceed 100%')
  ),
  is_co_listing: z.enum(['1', '0'], {
    required_error: 'Co-listing is required',
  }),
  co_agent: z.preprocess((val) => {
    if (val === '') return undefined;
    return Number(val);
  }, z.number().optional()),
  co_list_percentage: z.preprocess(
    (val) => {
      if (val === '') return undefined;
      const num = parseFloat(val);
      return isNaN(num) ? val : num;
    },
    z
      .number({
        required_error: 'Co-listing percentage is required',
        invalid_type_error: 'Must be a valid number',
      })
      .min(0, 'Must be positive')
      .max(100, 'Cannot exceed 100%')
  ),
  property_source_id: z.preprocess(
    (val) => {
      if (val === '') return undefined;
      return Number(val);
    },
    z.number({
      required_error: 'Property Source is required',
    })
  ),
  beds: z.string().min(1, 'Beds is required'),
  full_baths: z.string().min(1, 'Full baths is required'),
  half_baths: z.string().min(1, 'Half baths is required'),
  size: z.string().min(1, 'Size is required'),
  link: z.string().min(1, 'Link is required'),
  note: z.string().min(1, 'Note is required'),
});

function NewListingInformationForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      address: '',
      price: '',
      expiration_date: '',
      is_development: '0',
      commission_rate: '',
      is_co_listing: '0',
      co_list_percentage: '',
      property_source_id: '',
      beds: '',
      full_baths: '',
      half_baths: '',
      size: '',
      link: '',
      note: '',
    },
    resolver: zodResolver(formSchema),
  });
  const is_development = watch('is_development');
  const is_co_listing = watch('is_co_listing');
  const { coListingAgents, isLoading } = useCoListingDropdown();
  const location = useLocation();
  const {
    mutate: storeProperty,
    data: storeResponse,
    isPending,
    isSuccess,
  } = useStoreProperty();
  const categoryOptions = coListingAgents?.map((item) => ({
    value: `${item.first_name} ${item.last_name}`,
    label: `${item.first_name} ${item.last_name}`,
  }));

  const { data: sources, isLoading: isSourcesLoading } = useSourceDropdown();

  const sourceOptions = sources?.data?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  // In your onSubmit function:
  const onSubmit = (data) => {
    console.log(data);
    storeProperty(
      { ...data, commission_rate: '1.2', co_list_percentage: '1' },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
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
              name="is_development"
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
            {errors?.is_development && (
              <p className="text-red-500 text-xs">
                {errors?.is_development?.message}
              </p>
            )}
          </div>
          {/* Add to development page (conditional) */}
          {is_development === '1' && (
            <div className="flex items-center sm:gap-6 gap-4 sm:ml-12 ml-8">
              {/* <FormLineSvg /> */}
              <div className="w-full">
                <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light mb-3">
                  Would you like it added to the development page on the Spears
                  Group website?
                </p>
                <Controller
                  name="add_to_website"
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
                {errors?.email && (
                  <p className="text-red-500 text-xs">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* commission rate field */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Commission Rate
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type commission rate here"
              {...register('commission_rate')}
            />
            {errors?.commission_rate && (
              <p className="text-red-500 text-xs">
                {errors?.commission_rate?.message}
              </p>
            )}
          </div>
          {/* Is this a co-listing? */}
          <div>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Is this a co-listing?
            </p>
            <Controller
              name="is_co_listing"
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
            {errors?.is_co_listing && (
              <p className="text-red-500 text-xs">
                {errors?.is_co_listing?.message}
              </p>
            )}
          </div>
          {/* Co-listing details (conditional) */}
          {is_co_listing === '1' && (
            <div className="flex items-center sm:gap-6 gap-4 sm:ml-12 ml-8">
              {/* <FormLineSvg /> */}
              <div className="w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  <p className="mb-3">Who are you co-listing with?</p>
                  <Controller
                    name="co_agent"
                    control={control}
                    render={({ field }) => {
                      const currentValue = coListingAgents?.find(
                        (item) => item.id === field.value
                      );
                      return (
                        <Select
                          className={`w-full`}
                          value={
                            currentValue &&
                            `${currentValue?.first_name} ${currentValue?.last_name}`
                          }
                          setValue={(value) =>
                            field.onChange(
                              coListingAgents?.find(
                                (item) =>
                                  `${item.first_name} ${item.last_name}` ===
                                  value
                              ).id
                            )
                          }
                          disabled={isLoading}
                          options={categoryOptions}
                          placeholder="Select Agent"
                        />
                      );
                    }}
                  />
                </label>
                {errors?.co_agent && (
                  <p className="text-red-500 text-xs">
                    {errors?.co_agent?.message}
                  </p>
                )}
              </div>
            </div>
          )}
          {/* co listing percentage field */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Co Listing Percentage
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="00 %"
              {...register('co_list_percentage')}
            />
            {errors?.co_list_percentage && (
              <p className="text-red-500 text-xs">
                {errors?.co_list_percentage?.message}
              </p>
            )}
          </div>
          {/* source fo the list */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What was the source of this Lead?
            </label>
            <Controller
              name="property_source_id"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    className="!px-4 !py-6 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                    value={
                      sources?.data?.find((item) => item.id === field.value)
                        ?.name
                    }
                    setValue={(value) =>
                      field.onChange(
                        sources?.data?.find((item) => item.name === value)?.id
                      )
                    }
                    disabled={isSourcesLoading}
                    options={sourceOptions}
                    placeholder="Source"
                  />
                );
              }}
            />
            {errors?.property_source_id && (
              <p className="text-red-500 text-xs">
                {errors?.property_source_id?.message}
              </p>
            )}
          </div>
          {/* beds, full-bath, half-bath, size as sq ft */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                How many beds?
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0"
                {...register('beds')}
              />
              {errors?.beds && (
                <p className="text-red-500 text-xs">{errors?.beds?.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Full baths?
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0"
                {...register('full_baths')}
              />
              {errors?.full_baths && (
                <p className="text-red-500 text-xs">
                  {errors?.full_baths?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Half baths?
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0"
                {...register('half_baths')}
              />
              {errors?.half_baths && (
                <p className="text-red-500 text-xs">
                  {errors?.half_baths?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Total SQ FT?
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0 sq ft"
                {...register('size')}
              />
              {errors?.size && (
                <p className="text-red-500 text-xs">{errors?.size?.message}</p>
              )}
            </div>
          </div>
          {/* photos/videos direct link */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              If you have photos/video, provide direct link below
            </label>
            <input
              type="link"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Link"
              {...register('link')}
            />
            {errors?.link && (
              <p className="text-red-500 text-xs">{errors?.link?.message}</p>
            )}
          </div>
          {/* additional information */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Any additional information that I should know about the property?
            </label>
            <textarea
              type="note"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type your answer here"
              {...register('note')}
            />
            {errors?.note && (
              <p className="text-red-500 text-xs">{errors?.note?.message}</p>
            )}
          </div>
        </form>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  items-center gap-4 justify-between mt-4 md:mt-6">
            <div className="flex items-center  gap-4 sm:w-unset w-full">
              <button
                className="request-btn approve cursor-pointer"
                type="submit"
                disabled={isPending}
              >
                {isPending ? 'Submitting' : 'Submit'}
              </button>
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

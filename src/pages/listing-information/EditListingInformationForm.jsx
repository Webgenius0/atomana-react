import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import Select from '@/components/ui/react-select';
import {
  useCoListAgentDropdown,
  useSourceDropdown,
  useStoreProperty,
} from '@/hooks/property.hook';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Link, useLocation, useParams } from 'react-router-dom';

function EditListingInformationForm() {
  const { id } = useParams();
  const location = useLocation();
  const { mutate: storeProperty, isPending, form } = useStoreProperty(id);

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = form;

  const is_development = watch('is_development');
  const is_co_listing = watch('is_co_listing');

  const { coAgents, isLoading: isAgentLoading } = useCoListAgentDropdown();
  const { sources, isLoading: isSourcesLoading } = useSourceDropdown();

  const coListingAgentOptions = coAgents?.map((item) => ({
    value: item.id,
    label: `${item.first_name} ${item.last_name}`,
  }));

  const sourceOptions = sources?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  useEffect(() => {
    if (is_co_listing == '0') {
      form.setValue('co_agent', null);
    }
  }, [is_co_listing]);

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <Link
          to={`${
            location.state?.from ||
            '/my-systems/new-listing/listing-information'
          }`}
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
        >
          <ArrowLeftSvg />
          <h2 className="section-title">Edit Listing Information</h2>
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
          onSubmit={handleSubmit(storeProperty)}
          className="max-w-[670px] mx-start flex flex-col gap-[15px]"
        >
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
                    onChange={(date) => {
                      field.onChange(format(date, 'yyyy-MM-dd'));
                    }}
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
                {errors?.add_to_website && (
                  <p className="text-red-500 text-xs">
                    {errors?.add_to_website?.message}
                  </p>
                )}
              </div>
            </div>
          )}

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
                    render={({ field }) => (
                      <Select
                        options={coListingAgentOptions}
                        value={coListingAgentOptions?.find(
                          (option) => option?.value == field?.value
                        )}
                        onChange={(option) => field.onChange(option?.value)}
                        isDisabled={isAgentLoading}
                        isLoading={isAgentLoading}
                        placeholder="Select Agent"
                      />
                    )}
                  />
                </label>
                {errors?.co_agent && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors?.co_agent?.message}
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
              type="number"
              step="any"
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

          {/* co listing percentage field */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Co Listing Percentage
            </label>
            <input
              type="number"
              step="any"
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
                    options={sourceOptions}
                    value={sourceOptions?.find(
                      (option) => option?.value == field?.value
                    )}
                    onChange={(option) => field.onChange(option?.value)}
                    isDisabled={isSourcesLoading}
                    isLoading={isSourcesLoading}
                    placeholder="Select Source of the Lead"
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
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
          <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4 md:mt-6 pb-4 md:pb-6">
            <button
              className="request-btn approve cursor-pointer w-full sm:w-[150px]"
              type="submit"
              disabled={isPending}
            >
              {isPending ? 'Submitting' : 'Submit'}
            </button>

            <button
              type="button"
              onClick={reset}
              className="request-btn text-light w-full sm:w-[150px]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditListingInformationForm;

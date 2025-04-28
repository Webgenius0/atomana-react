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
import { Link, useLocation } from 'react-router-dom';

function NewContractInformationForm() {
  const location = useLocation();
  const { isPending, form } = useStoreProperty();

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = form;

  const client_type = watch('client_type');
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
          to={`${location.state?.from || '/my-systems/new-contract'}`}
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5"
        >
          <ArrowLeftSvg />
          <h2 className="section-title">New Contract Information Form</h2>
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
          onSubmit={handleSubmit(() => {})}
          className="max-w-[670px] mx-start flex flex-col gap-[15px]"
        >
          {/* Property Address */}
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

          {/* Closing Date */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Closing Date
            </label>

            <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
              <Controller
                name="closing_date"
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

            {errors?.closing_date && (
              <p className="text-red-500 text-xs">
                {errors?.closing_date?.message}
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

          {/* Client Type */}
          <div>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Did you represent the buyer, seller, or both?
            </p>
            <Controller
              name="client_type"
              control={control}
              render={({ field }) => (
                <div className="flex space-x-4">
                  <label className="flex items-center gap-2">
                    <input {...field} type="radio" value="buyer" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Buyer
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input {...field} type="radio" value="seller" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Seller
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input {...field} type="radio" value="both" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Both
                    </p>
                  </label>
                </div>
              )}
            />
            {errors?.client_type && (
              <p className="text-red-500 text-xs">
                {errors?.client_type?.message}
              </p>
            )}
          </div>

          {/* Date Listed */}
          {(client_type === 'seller' || client_type === 'both') && (
            <div className="sm:ml-12 ml-8">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  Date Listed
                </label>

                <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
                  <Controller
                    name="date_listed"
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

                {errors?.date_listed && (
                  <p className="text-red-500 text-xs">
                    {errors?.date_listed?.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Purchase Price */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Purchase Price
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Purchase Price"
              {...register('price')}
            />
            {errors?.price && (
              <p className="text-red-500 text-xs">{errors?.price?.message}</p>
            )}
          </div>

          {/* Date Under Contract */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Date Under Contract
            </label>

            <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
              <Controller
                name="date_under_contract"
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

            {errors?.date_under_contract && (
              <p className="text-red-500 text-xs">
                {errors?.date_under_contract?.message}
              </p>
            )}
          </div>

          {/* Commission Percentage */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Commission Percentage
            </label>
            <input
              type="number"
              step="any"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Commission Percentage"
              {...register('commission_percentage')}
            />
            {errors?.commission_percentage && (
              <p className="text-red-500 text-xs">
                {errors?.commission_percentage?.message}
              </p>
            )}
          </div>

          {/* Lead Source */}
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

          {/* Referral Details */}
          <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
            Referral Details
          </label>
          <div className="grid sm:grid-cols-2 gap-4 w-full">
            {/* Referral Name */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Name
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Name"
                {...register('referral_name')}
              />
              {errors?.referral_name && (
                <p className="text-red-500 text-xs">
                  {errors?.referral_name?.message}
                </p>
              )}
            </div>

            {/* Referral Company */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Company
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Company Name"
                {...register('full_baths')}
              />
              {errors?.referral_company && (
                <p className="text-red-500 text-xs">
                  {errors?.referral_company?.message}
                </p>
              )}
            </div>

            {/* Referral Email */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Email
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Email"
                {...register('referral_email')}
              />
              {errors?.referral_email && (
                <p className="text-red-500 text-xs">
                  {errors?.referral_email?.message}
                </p>
              )}
            </div>

            {/* Referral Phone */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Phone
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0 sq ft"
                {...register('referral_phone')}
              />
              {errors?.referral_phone && (
                <p className="text-red-500 text-xs">
                  {errors?.referral_phone?.message}
                </p>
              )}
            </div>
          </div>

          {/* Additional Comments / Questions */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Additional Comments / Questions
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

          {/* Action Buttons */}
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

export default NewContractInformationForm;

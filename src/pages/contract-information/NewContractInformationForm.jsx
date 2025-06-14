import CustomDatePicker from "@/components/CustomDatePicker";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import CalenderSvg from "@/components/svgs/CalenderSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import Select from "@/components/ui/react-select";
import { ROLE } from "@/constants";
import { useStoreContractInformation } from "@/hooks/new-contract-information";
import {
  useCoListAgentDropdown,
  useSourceDropdown,
} from "@/hooks/property.hook";
import { useAuth } from "@/hooks/useAuth";
import { format } from "date-fns";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NewContractInformationForm() {
  const location = useLocation();
  const { user } = useAuth();
  const userRole = user?.role;
  const {
    isPending,
    form,
    mutate: storeContractInformation,
  } = useStoreContractInformation();

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const represent = watch("represent");
  const is_co_listing = watch("is_co_listing");

  useEffect(() => {
    if (represent === "buyer") {
      form.clearErrors("date_listed");
      form.setValue("date_listed", null);
    }
  }, [represent]);

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
    if (is_co_listing == "0") {
      form.setValue("co_agent", null);
    }
  }, [is_co_listing]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <Link
          to={`${location.state?.from || "/my-systems/new-contract/contract-information"}`}
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
          onSubmit={handleSubmit(storeContractInformation)}
          className="max-w-[670px] mx-start flex flex-col gap-[15px]"
        >
          {/* Agent */}
          {userRole === ROLE.ADMIN && (
            <div className="flex items-center sm:gap-6 gap-4">
              <div className="w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  <p className="mb-3">Agent</p>
                  <Controller
                    name="agent"
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
                {errors?.agent && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors?.agent?.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Property Address */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Property Address
            </label>
            <input
              type="text"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type the address and subdivision name here"
              {...register("address")}
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
                      field.onChange(format(date, "yyyy-MM-dd"));
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
          {is_co_listing === "1" && (
            <>
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

              {/* Co-listing Percentage */}
              <div className="flex flex-col gap-2 w-full sm:ml-12 ml-8">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  Co-listing Percentage
                </label>
                <input
                  type="number"
                  step="any"
                  className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  placeholder="Co-listing Percentage"
                  {...register("co_agent_percentage")}
                />
                {errors?.co_agent_percentage && (
                  <p className="text-red-500 text-xs">
                    {errors?.co_agent_percentage?.message}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Represent */}
          <div>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Did you represent the buyer, seller, or both?
            </p>
            <Controller
              name="represent"
              control={control}
              render={({ field }) => (
                <div className="flex space-x-4">
                  <label className="flex items-center gap-2" htmlFor="buyer">
                    <input {...field} type="radio" value="buyer" id="buyer" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Buyer
                    </p>
                  </label>
                  <label className="flex items-center gap-2" htmlFor="seller">
                    <input {...field} type="radio" value="seller" id="seller" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Seller
                    </p>
                  </label>
                  <label className="flex items-center gap-2" htmlFor="both">
                    <input {...field} type="radio" value="both" id="both" />
                    <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                      Both
                    </p>
                  </label>
                </div>
              )}
            />
            {errors?.represent && (
              <p className="text-red-500 text-xs">
                {errors?.represent?.message}
              </p>
            )}
          </div>

          {/* Date Listed */}
          {(represent === "seller" || represent === "both") && (
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
                          field.onChange(format(date, "yyyy-MM-dd"));
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
              {...register("price")}
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
                      field.onChange(format(date, "yyyy-MM-dd"));
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
              {...register("commission_percentage")}
            />
            {errors?.commission_percentage && (
              <p className="text-red-500 text-xs">
                {errors?.commission_percentage?.message}
              </p>
            )}
          </div>

          {/* Buyer&apos;s Agent Commission */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Buyer&apos;s Agent Commission
            </label>
            <input
              type="number"
              step="any"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type buyer's commission rate here"
              {...register("buyers_agent_commission")}
            />
            {errors?.buyers_agent_commission && (
              <p className="text-red-500 text-xs">
                {errors?.buyers_agent_commission?.message}
              </p>
            )}
          </div>

          {/* Commission Split */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Commission Split
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="e.g. 70/30"
              {...register("commission_split", {
                pattern: {
                  value: /^\d{1,3}\/\d{1,3}$/,
                  message:
                    "Invalid commission split. Format must be like 70/30",
                },
                validate: (value) => {
                  const [first, second] = value.split("/").map(Number);
                  if (first + second !== 100) {
                    return "The sum of the commission must be 100";
                  }
                  return true;
                },
              })}
            />
            {errors?.commission_split && (
              <p className="text-red-500 text-xs">
                {errors?.commission_split?.message}
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
                {...register("name")}
              />
              {errors?.name && (
                <p className="text-red-500 text-xs">{errors?.name?.message}</p>
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
                {...register("company")}
              />
              {errors?.company && (
                <p className="text-red-500 text-xs">
                  {errors?.company?.message}
                </p>
              )}
            </div>

            {/* Referral email */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Email
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Email"
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-red-500 text-xs">{errors?.email?.message}</p>
              )}
            </div>

            {/* Referral Phone */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Phone
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Phone Number"
                {...register("phone")}
              />
              {errors?.phone && (
                <p className="text-red-500 text-xs">{errors?.phone?.message}</p>
              )}
            </div>
          </div>

          {/* Referral Percentage */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Referral Percentage
            </label>
            <input
              type="number"
              step="any"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Referral Percentage"
              {...register("referral_percentage")}
            />
            {errors?.referral_percentage && (
              <p className="text-red-500 text-xs">
                {errors?.referral_percentage?.message}
              </p>
            )}
          </div>

          {/* Additional Comments */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Additional Comments
            </label>
            <textarea
              type="note"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type your answer here"
              {...register("comment")}
            />
            {errors?.comment && (
              <p className="text-red-500 text-xs">{errors?.comment?.message}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4 md:mt-6 pb-4 md:pb-6">
            <button
              className="request-btn approve cursor-pointer w-full sm:w-[150px]"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Submitting" : "Submit"}
            </button>

            <button
              type="button"
              onClick={handleBack}
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

import FormTextEditor from "@/components/form/FormTextEditor";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import Select from "@/components/ui/react-select";
import { useStoreAccessInstruction } from "@/hooks/access-instructions.hook";
import { usePropertyTypeDropdown } from "@/hooks/open-house.hook";
import { useGetProperties } from "@/hooks/property.hook";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { Controller, FormProvider } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AddAccessInstruction() {
  const [search, setSearch, debouncedSearch] = useDebouncedState("", 400);
  const {
    mutate: storeAccessInstruction,
    isPending,
    form,
  } = useStoreAccessInstruction();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = form;

  const location = useLocation();

  const navigate = useNavigate();

  const { properties, isLoading: isPropertiesLoading } = useGetProperties({
    search: debouncedSearch,
  });

  const { propertyTypes, isLoading: isPropertyTypeLoading } =
    usePropertyTypeDropdown();

  const propertyOptions = properties?.map((item) => ({
    value: item.id,
    label: item.address,
  }));

  const propertyTypeOptions = propertyTypes?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center gap-4 justify-between py-5 sticky top-[75px] md:top-[144px] bg-dark">
        <Link
          to={`${
            location.state?.from || "/my-systems/team/access-instructions"
          }`}
        >
          <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
            <ArrowLeftSvg />
            <h2 className="section-title">Access Instruction Form</h2>
          </div>
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

      <div className="max-w-[670px] w-full mx-auto mt-4 mb-8">
        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit(storeAccessInstruction)}
            className="max-w-[670px] mx-start flex flex-col gap-[15px]"
          >
            <h2 className="section-title">Property Details</h2>
            {/* Property Address */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Property Address
              </label>
              <Controller
                name="property_id"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      options={propertyOptions}
                      value={propertyOptions?.find(
                        (option) => option?.value == field?.value
                      )}
                      onChange={(option) => field.onChange(option?.value)}
                      //   isDisabled={isPropertiesLoading}
                      isLoading={isPropertiesLoading}
                      placeholder="Select Property Address"
                      inputValue={search}
                      onInputChange={(value) => setSearch(value)}
                    />
                  );
                }}
              />
              {errors?.property_id?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.property_id?.message}
                </p>
              )}
            </div>

            {/* Property Type */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Property Type
              </label>
              <Controller
                name="property_type_id"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      options={propertyTypeOptions}
                      value={propertyTypeOptions?.find(
                        (option) => option?.value == field?.value
                      )}
                      onChange={(option) => field.onChange(option?.value)}
                      //   isDisabled={isPropertyTypeLoading}
                      isLoading={isPropertyTypeLoading}
                      placeholder="Select Property Type"
                    />
                  );
                }}
              />
              {errors?.property_type_id?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.property_type_id?.message}
                </p>
              )}
            </div>
            {/* Price */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Price
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Property Price"
                type="number"
                step="any"
                {...register("price")}
              />
              {errors?.price?.message && (
                <p className="text-red-500 mt-2">{errors?.price?.message}</p>
              )}
            </div>
            {/* Size */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Size
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Property Size"
                type="number"
                step="any"
                {...register("size")}
              />
              {errors?.size?.message && (
                <p className="text-red-500 mt-2">{errors?.size?.message}</p>
              )}
            </div>

            <h2 className="section-title mt-4">Access Instructions</h2>
            {/* Key Access Code */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Key Access Code
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Key Access Code"
                {...register("access_key")}
              />
              {errors?.access_key?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.access_key?.message}
                </p>
              )}
            </div>
            {/* Lockbox Location */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Lockbox Location
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Lockbox Location"
                {...register("lock_box_location")}
              />
              {errors?.lock_box_location?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.lock_box_location?.message}
                </p>
              )}
            </div>
            {/* Key Pickup Instructions */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Key Pickup Instructions (if applicable)
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Key Pickup Instructions"
                {...register("pickup_instructions")}
              />
              {errors?.pickup_instructions?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.pickup_instructions?.message}
                </p>
              )}
            </div>

            <h2 className="section-title mt-4">Gated Community Instructions</h2>
            {/* Gate Code */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Gate Code
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Gate Code"
                {...register("gate_code")}
              />
              {errors?.gate_code?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.gate_code?.message}
                </p>
              )}
            </div>
            {/* Gate Access Location */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Gate Access Location
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Gate Access Location"
                {...register("gete_access_location")}
              />
              {errors?.gete_access_location?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.gete_access_location?.message}
                </p>
              )}
            </div>

            <h2 className="section-title mt-4">Parking</h2>
            {/* Visitor Parking */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Visitor Parking
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Visitor Parking"
                {...register("visitor_parking")}
              />
              {errors?.visitor_parking?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.visitor_parking?.message}
                </p>
              )}
            </div>

            {/* Additional Notes */}
            <h2 className="section-title mt-4">Additional Notes</h2>
            <FormTextEditor name="note" label="Notes" />

            {/* Actions */}
            <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4">
              <button
                className="flex w-full sm:w-[150px] px-6 py-2.5 justify-center items-center gap-2.5 font-Inria text-sm sm:text-base transition-transform duration-300 ease-in-out rounded-[10px] border border-light bg-inherit active:scale-95 bg-light text-dark"
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add"}
              </button>

              <button
                onClick={handleBack}
                disabled={isPending}
                className="flex w-full sm:w-[150px] px-6 py-2.5 justify-center items-center gap-2.5 font-Inria text-sm sm:text-base transition-transform duration-300 ease-in-out rounded-[10px] border border-light bg-inherit active:scale-95 text-light"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

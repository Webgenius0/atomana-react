import FormTextEditor from '@/components/form/FormTextEditor';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { Select } from '@/components/ui/select';
import { useOpenHouse, usePropertyDropdown } from '@/hooks/open-house.hook';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';

export default function AddAccessInstruction() {
  const form = useForm({
    defaultValues: {
      property_id: '',
      property_type: '',
      price: '',
      size: '',
      key_access_code: '',
      lockbox_location: '',
      key_pickup_instructions: '',
      gate_code: '',
      gate_access_location: '',
      visitor_parking: '',
      notes: '',
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = form;

  const location = useLocation();

  const { mutate: storeOpenHouse, isPending } = useOpenHouse();

  const { data: properties, isLoading: isPropertiesLoading } =
    usePropertyDropdown();

  const propertyOptions = properties?.data?.map((item) => ({
    value: item.address,
    label: item.address,
  }));

  const onSubmit = (data) => {
    storeOpenHouse(data, {
      onSuccess: () => {
        toast.success(data?.message || 'Form Submitted Successfully');
        reset();

        // Optional: Navigate after resetting
        // navigate(`/my-systems/open-house/open-house-form-details`);
      },
    });
  };

  return (
    <>
      <div className="flex items-center gap-4 justify-between py-5 sticky top-[75px] md:top-[144px] bg-dark">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link
            to={`${
              location.state?.from || '/my-systems/team/access-instructions'
            }`}
          >
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Access Instruction Form</h2>
        </div>
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
            onSubmit={handleSubmit(onSubmit)}
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
                      className="!px-4 !py-6 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                      value={
                        properties?.data?.find(
                          (item) => item.id === field.value
                        )?.address
                      }
                      setValue={(value) =>
                        field.onChange(
                          properties?.data?.find(
                            (item) => item.address === value
                          )?.id
                        )
                      }
                      disabled={isPropertiesLoading}
                      options={propertyOptions}
                      placeholder="Select Property Address"
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
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Property Type"
                {...register('property_type')}
              />
              {errors?.property_type?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.property_type?.message}
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
                {...register('price')}
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
                {...register('size')}
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
                {...register('key_access_code')}
              />
              {errors?.key_access_code?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.key_access_code?.message}
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
                {...register('lockbox_location')}
              />
              {errors?.lockbox_location?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.lockbox_location?.message}
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
                {...register('key_pickup_instructions')}
              />
              {errors?.key_pickup_instructions?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.key_pickup_instructions?.message}
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
                {...register('gate_code')}
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
                {...register('gate_access_location')}
              />
              {errors?.gate_access_location?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.gate_access_location?.message}
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
                {...register('visitor_parking')}
              />
              {errors?.visitor_parking?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.visitor_parking?.message}
                </p>
              )}
            </div>

            {/* Additional Notes */}
            <h2 className="section-title mt-4">Additional Notes</h2>
            <FormTextEditor name="notes" label="Notes" />

            {/* Actions */}
            <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4">
              <button
                className="flex w-full sm:w-[150px] px-6 py-2.5 justify-center items-center gap-2.5 font-Inria text-sm sm:text-base transition-transform duration-300 ease-in-out rounded-[10px] border border-light bg-inherit active:scale-95 bg-light text-dark"
                disabled={isPending}
              >
                {isPending ? 'Adding...' : 'Add'}
              </button>

              <button
                onClick={reset}
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

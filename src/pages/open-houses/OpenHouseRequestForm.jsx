import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import TimeRangePicker from '@/components/TimeRangePicker';
import Select from '@/components/ui/react-select';
import { useOpenHouse } from '@/hooks/open-house.hook';
import { useGetProperties } from '@/hooks/property.hook';
import { useDebouncedState } from '@/hooks/useDebouncedState';
import { Controller, FormProvider } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';

export default function OpenHouseRequestForm() {
  const [search, setSearch, debouncedSearch] = useDebouncedState('', 400);
  const { mutate: storeOpenHouse, isPending, form } = useOpenHouse();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = form;

  const location = useLocation();

  const { properties, isLoading: isPropertiesLoading } = useGetProperties({
    search: debouncedSearch,
  });

  const propertyOptions = properties?.map((item) => ({
    value: item.id,
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
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
          <Link to={`${location.state?.from || '/my-systems/open-house'}`}>
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Open House Request Form</h2>
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

      <div className="max-w-[670px] w-full mx-auto mt-4">
        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[670px] mx-start flex flex-col gap-[15px]"
          >
            <h2 className="section-title">Open House Request Form</h2>

            {/* Property Address */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                What property do you want to hold an open house at?
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

            {/* Date */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                What day do you want to do it on?
              </label>

              <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
                <Controller
                  name="date"
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
              {errors?.date?.message && (
                <p className="text-red-500 mt-2">{errors?.date?.message}</p>
              )}
            </div>

            {/* Time Frame */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                What time frame do you want to hold it?
              </label>
              <TimeRangePicker startTime="start_time" endTime="end_time" />
            </div>

            {/* Open House Signs */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                How many open house signs do you need?
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0"
                type="number"
                {...register('sign_number')}
              />
              {errors?.sign_number?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.sign_number?.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4 md:mt-6">
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

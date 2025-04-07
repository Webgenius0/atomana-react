import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import TimeRangePicker from '@/components/TimeRangePicker';

import { Select } from '@/components/ui/select';
import { useOpenHouse, usePropertyDropdown } from '@/hooks/open-house.hook';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';

export default function OpenHouseRequestForm() {
  const form = useForm({
    defaultValues: {
      property_id: '',
      email: 'demo@example.com',
      wavy_man: '1',
      date: '',
      start_time: '',
      end_time: '',
      sign_number: '',
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    getValues,
  } = form;

  const location = useLocation();

  const { mutate: storeOpenHouse, isPending } = useOpenHouse();

  const { data: properties, isLoading: propertiesLoading } =
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

  console.log({ values: getValues() });

  const handleResetForm = () => {
    // e.preventDefault();
    reset();
  };

  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
          <Link
            to={`${
              location.state?.from || '/my-systems/open-house/open-house-form'
            }`}
          >
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Open House Form</h2>
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
            <div className="flex flex-col gap-2">
              <h2 className="section-title">Open House Request Form</h2>
              {/* <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                The principal address is the address in Massachusetts where
                business records will be maintained.
              </p> */}
            </div>
            {/* <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Email
              </label>
              <input
                type="email"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="youremail@spearsgroup.com"
                {...register('email')}
              />
            </div> */}
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
                      disabled={propertiesLoading}
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
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                What time frame do you want to hold it?
              </label>
              <TimeRangePicker startTime="start_time" endTime="end_time" />
            </div>
            {/* <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Do you want to use the wavy man?
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="000-000-0000"
                {...register('phone')}
              />
            </div> */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                How many open house signs do you need?
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0"
                type="text"
                {...register('sign_number')}
              />
              {errors?.sign_number?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.sign_number?.message}
                </p>
              )}
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4 md:mt-6">
              <div className="flex items-center sm:justify-start justify-center gap-4 sm:w-unset w-full">
                <button className="request-btn approve" disabled={isPending}>
                  {isPending ? 'Adding...' : 'Add'}
                </button>
              </div>

              <button
                onClick={handleResetForm}
                disabled={isPending}
                className="request-btn text-light"
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

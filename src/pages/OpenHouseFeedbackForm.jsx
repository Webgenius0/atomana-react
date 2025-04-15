import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { Select } from '@/components/ui/select';
import {
  useOpenHouseFeedback,
  useOpenHouseFeedbackDropdown,
} from '@/hooks/open-house.hook';
import { Controller, FormProvider } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';

const OpenHouseFeedbackForm = () => {
  const { mutate, isPending, form } = useOpenHouseFeedback();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    getValues,
  } = form;

  const location = useLocation();
  const { data: openHouse, isLoading: propertiesLoading } =
    useOpenHouseFeedbackDropdown();

  const propertyOptions = openHouse?.data?.map((item) => ({
    value: item.address,
    label: item.address,
  }));

  const onSubmit = (data) => {
    const formData = {
      open_house_id: data?.open_house_id,
      people_count: Number(data?.people_count),
      feedback: data?.feedback,
      additional_feedback: data?.additional_feedback,
    };

    mutate(formData, {
      onSuccess: () => {
        toast.success(data?.message || 'Feedback Submitted Successfully');
        reset();
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message || 'Failed to Form Submission'
        );
      },
    });
  };
  console.log({ values: getValues() });
  const handleResetForm = (e) => {
    e.preventDefault();
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
          <h2 className="section-title">Open House Feedback Form</h2>
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
            {/* Property Selection */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                What property do you want to hold an open house at?
              </label>
              <Controller
                name="open_house_id"
                control={control}
                rules={{ required: 'Property selection is required' }}
                render={({ field }) => {
                  return (
                    <Select
                      className="!px-4 !py-6 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                      value={
                        openHouse?.data?.find((item) => item.id === field.value)
                          ?.address
                      }
                      setValue={(value) =>
                        field.onChange(
                          openHouse?.data?.find(
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
              {errors?.open_house_id?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.open_house_id?.message}
                </p>
              )}
            </div>

            {/* People Count */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                How Many People Came?
              </label>
              <input
                type="number"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter How Many People Came Here"
                {...register('people_count', {
                  required: 'People count is required',
                  min: { value: 0, message: 'Must be positive number' },
                })}
              />
              {errors?.people_count?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.people_count?.message}
                </p>
              )}
            </div>

            {/* Feedback */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Feedback
              </label>
              <textarea
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Feedback on Attendees"
                {...register('feedback', {
                  required: 'Feedback is required',
                })}
              />
              {errors?.feedback?.message && (
                <p className="text-red-500 mt-2">{errors?.feedback?.message}</p>
              )}
            </div>

            {/* Additional Feedback */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Additional Feedback
              </label>
              <textarea
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Additional Feedback"
                {...register('additional_feedback')}
              />
              {errors?.additional_feedback?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.additional_feedback?.message}
                </p>
              )}
            </div>

            {/* Form Actions */}
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
};

export default OpenHouseFeedbackForm;

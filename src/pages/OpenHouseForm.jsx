import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import TimeRangePicker from '@/components/TimeRangePicker';

import { useOpenHouse, usePropertyDropdown } from '@/hooks/open-house.hook';
import { Controller, useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

const OpenHouseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    expirationDate: null,
    timeRange: { startTime: '', endTime: '' },
  });

  const location = useLocation();

  const { mutate, isLoading } = useOpenHouse();

  const { data: properties, isLoading: propertiesLoading } =
    usePropertyDropdown();
  console.log(properties);
  const handleTimeRangeChange = (newTimeRange) => {
    setValue('timeRange', newTimeRange);
  };

  const onSubmit = (data) => {
    const { expirationDate, timeRange, email, property_id, phone, signs } =
      data;

    const payload = {
      email: email,
      property_id: parseInt(data.property_id, 10) || null,
      business_id: parseInt(data.property_id, 10) || null,
      date: expirationDate,
      start_time: timeRange?.startTime || '',
      end_time: timeRange?.endTime || '',
      wavy_man: phone === 'yes',
      sign_number: parseInt(signs, 10) || 0,
    };
    console.log('Payload:', payload);
    mutate(payload, {
      onSuccess: () => {
        reset({
          email: '',
          property_id: '',
          business_id: '',
          date: '',
          start_time: '',
          end_time: '',
          wavy_man: '',
          sign_number: 0,
        });

        // Optional: Navigate after resetting
        // navigate(`/my-systems/open-house/open-house-form-details`);
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[670px] mx-start flex flex-col gap-[15px]"
        >
          <div className="flex flex-col gap-2">
            <h2 className="section-title">Spears Group Open House Request</h2>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              The principal address is the address in Massachusetts where
              business records will be maintained.
            </p>
          </div>
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
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What property do you want to hold an open house at? Please
              reference the active listings sheet for a full breakdown of
              properties available. *Availability subject to rental schedule*
            </label>

            <Controller
              name="property_id"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-4 py-2 rounded-lg border bg-transparent text-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={propertiesLoading}
                >
                  <option value="">Select a property</option>
                  {properties?.data?.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.address}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What day do you want to do it on?
            </label>

            <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
              <Controller
                name="expirationDate"
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
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What time frame do you want to hold it?
            </label>
            <TimeRangePicker
              startTime={getValues('timeRange.startTime')}
              endTime={getValues('timeRange.endTime')}
              onTimeRangeChange={handleTimeRangeChange}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Do you want to use the wavy man?
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="000-000-0000"
              {...register('phone')}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              How many open house signs do you need?
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="0"
              {...register('signs')}
            />
          </div>
        </form>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4 md:mt-6">
            <div className="flex items-center sm:justify-start justify-center gap-4 sm:w-unset w-full">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value="Add"
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
};

export default OpenHouseForm;

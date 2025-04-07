import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useOpenHouse } from '@/hooks/open-house.hook';
import { Controller, useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

const OpenHouseFeedbackForm = () => {
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

  const handleTimeRangeChange = (newTimeRange) => {
    setValue('timeRange', newTimeRange);
  };

  const onSubmit = (data) => {
    const { expirationDate, timeRange, email, answer, phone, signs } = data;

    const payload = {
      email: email,
      property_id: answer,
      business_id: answer,
      date: expirationDate,
      start_time: timeRange?.startTime || '',
      end_time: timeRange?.endTime || '',
      wavy_man: phone === 'yes',
      sign_number: parseInt(signs, 10) || 0,
    };

    mutate(payload, {
      onSuccess: () => {
        console.log(payload)
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[670px] mx-start flex flex-col gap-[15px]"
        >
          {/* <div className="flex flex-col gap-2">
            <h2 className="section-title">Spears Group Open House Request</h2>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              The principal address is the address in Massachusetts where
              business records will be maintained.
            </p>
          </div> */}
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
              Property Address of Open House
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Enter Property Address of Open House"
              {...register('property_address')}
            />
          </div>
          {/* <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What property do you want to hold an open house at? Please
              reference the active listings sheet for a full breakdown of
              properties available. *Availability subject to rental schedule*
            </label>
            <input
              type="text"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type your answer here"
              {...register('answer')}
            />
          </div> */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Date Held
            </label>

            <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
              <Controller
                name="date_held"
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
          {/* <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What time frame do you want to hold it?
            </label>
            <TimeRangePicker
              startTime={getValues('timeRange.startTime')}
              endTime={getValues('timeRange.endTime')}
              onTimeRangeChange={handleTimeRangeChange}
            />
          </div> */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              How Many People Came?
            </label>
            <input
              type="number"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Enter How Many People Came Here"
              {...register('people')}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Feedback on Attendees
            </label>
            <textarea
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Enter Feedback on Attendees"
              {...register('attendees_feedback')}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Additional Comments / Questions
            </label>
            <textarea
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Enter Additional Comments / Questions"
              {...register('additional_comments')}
            />
          </div>
          {/* <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              How many open house signs do you need?
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="0"
              {...register('signs')}
            />
          </div> */}
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

export default OpenHouseFeedbackForm;

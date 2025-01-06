import CustomDatePicker from "@/components/CustomDatePicker";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import CalenderSvg from "@/components/svgs/CalenderSvg";
import ClockSvg from "@/components/svgs/ClockSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import TimeRangePicker from "@/components/TimeRangePicker";
import CustomTimeRangePicker from "@/components/TimeRangePicker";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const OpenHouseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    navigate(`/my-systems/open-house/open-house-form-details`);  

  };
  const handleResetForm = () => {
    reset();
  };



  
  return (
    <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
      <div className="flex items-center gap-4 justify-between">
        <Link
          to="/my-systems/team"
          className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
        >
          <ArrowLeftSvg />
          <h2 className="section-title">Open House Form</h2>
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

      <div className="mt-6 md:mt-8 lg:mt-12">
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
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What property do you want to hold an open house at? Please
              reference the active listings sheet for a full breakdown of
              properties available. *Availability subject to rental schedule*
            </label>
            <input
              type="text"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Type your answer here"
              {...register("answer")}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What day do you want to do it on?
            </label>

            <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
              <CustomDatePicker />
              <CalenderSvg />
            </label>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What time frame do you want to hold it?
            </label>
            <TimeRangePicker />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Do you want to use the wavy man?
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="000-000-0000"
              {...register("phone")}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              How many open house signs do you need?
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="0"
              {...register("signs")}
            />
          </div>

       
        </form>
        <form action=""   onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-center gap-4 justify-between mt-0 sm:mt-3 md:mt-6"> 
           <div className="flex items-center gap-4">
               
           <input
           onClick={() => handleCardClick(title)}
            className="request-btn approve cursor-pointer"  
            type="submit"
            value="Add"
          />
           <button
              onClick={handleResetForm}
              className="request-btn text-light" 
            >
              Continue
            </button>

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
    </div>
  );
};

export default OpenHouseForm;

import { Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import CustomDatePicker from '@/components/CustomDatePicker';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import Select from '@/components/ui/react-select';
import { useRegisterAgent } from '@/hooks/agent.hook';
import { format } from 'date-fns';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AddTeamMember = () => {
  const navigate = useNavigate();
  const {
    mutate: registerAgent,
    isPending: isRegisterPending,
    form,
  } = useRegisterAgent();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = form;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //   const { agents, isLoading, isError, error } = useGetAgents();

  const isRoleLoading = false;
  const roleOptions = [
    {
      value: 2,
      label: 'Admin',
    },
    {
      value: 3,
      label: 'Agent',
    },
  ];

  const onSubmit = (data) => {
    console.log({ update: data });
    registerAgent(data, {
      onSuccess: () => {
        reset();
        navigate('/profile/manage-team');
      },
    });
  };

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link to="/profile/manage-team">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Add a Team Member</h2>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[670px] mx-auto flex flex-col gap-[15px]"
          >
            <div className="flex items-center gap-2.5">
              {/* First Name */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  First name
                </label>
                <input
                  className="input-field px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  placeholder="First"
                  {...register('first_name', {
                    required: 'First name is required',
                  })}
                />
                {errors?.firstName && (
                  <span className="text-red-500 mt-2">
                    {errors?.firstName.message}
                  </span>
                )}
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  Last name
                </label>
                <input
                  className="input-field px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  placeholder="Last"
                  {...register('last_name', {
                    required: 'Last name is required',
                  })}
                />
                {errors?.lastName && (
                  <span className="text-red-500 mt-2">
                    {errors?.lastName.message}
                  </span>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Email
              </label>
              <input
                className="input-field px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="example@email.com"
                type="text"
                {...register('email', { required: 'Email is required' })}
              />
              {errors?.email && (
                <span className="text-red-500 mt-2">
                  {errors?.email.message}
                </span>
              )}
            </div>
            {/* Business ID */}
            {/* <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Business ID
              </label>
              <input
                className="input-field px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="000-000-0000"
                {...register('business_id', {
                  required: 'Business ID is required',
                })}
              />
              {errors?.business_id && (
                <span className="text-red-500 mt-2">{errors?.business_id.message}</span>
              )}
            </div> */}
            {/* Contract Year Starts */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Contract Year Starts
              </label>

              <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
                <Controller
                  name="contract_year_start"
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
              {errors?.date?.message && (
                <p className="text-red-500 mt-2">{errors?.date?.message}</p>
              )}
            </div>
            {/* Total Commission this Contract Year */}
            {/* <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Total Commission this Contract Year
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0"
                type="number"
                step="any"
                {...register('total_commission_this_contract_year')}
              />
              {errors?.total_commission_this_contract_year?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.total_commission_this_contract_year?.message}
                </p>
              )}
            </div> */}
            {/* Password */}
            <div className="relative flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Password
              </label>
              <div className="relative">
                <input
                  className="input-field pr-10 px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              {errors?.password && (
                <span className="text-red-500 mt-2">
                  {errors?.password.message}
                </span>
              )}
            </div>
            {/* Confirm Password */}
            <div className="relative flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="input-field pr-10 px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  {...register('password_confirmation', {
                    required: 'Confirm Password is required',
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              {errors?.confirmPassword && (
                <span className="text-red-500 mt-2">
                  {errors?.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Role
              </label>
              <Controller
                name="role_id"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      options={roleOptions}
                      value={roleOptions?.find(
                        (option) => option?.value == field?.value
                      )}
                      onChange={(option) => field.onChange(option?.value)}
                      isDisabled={isRoleLoading}
                      isLoading={isRoleLoading}
                      placeholder="Select Role"
                    />
                  );
                }}
              />
              {errors?.role_id && (
                <p className="text-red-500 text-xs">
                  {errors?.role_id?.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 justify-between mt-3">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value={isRegisterPending ? 'Adding...' : 'Add'}
                disabled={isRegisterPending}
              />
              <button
                type="button"
                onClick={() => reset()}
                className="request-btn text-light"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMember;

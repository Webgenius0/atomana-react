import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import { useGetAgents, useRegisterAgent } from '@/hooks/agent.hook';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AddTeamMember = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const registerAgent = useRegisterAgent();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { agents, isLoading, isError, error } = useGetAgents();
  console.log('Agents:', agents);

  const onSubmit = (data) => {
    console.log(data);
    const formData = data;
    console.log(formData);
    registerAgent.mutate(
      { formData },
      {
        onSuccess: () => {
          reset();
          navigate('/profile/manage-team');
        },
      }
    );
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
                {errors.firstName && (
                  <span className="error-text">{errors.firstName.message}</span>
                )}
              </div>
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
                {errors.lastName && (
                  <span className="error-text">{errors.lastName.message}</span>
                )}
              </div>
            </div>

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
              {errors.email && (
                <span className="error-text">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
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
              {errors.business_id && (
                <span className="error-text">{errors.business_id.message}</span>
              )}
            </div>

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
              {errors.password && (
                <span className="error-text">{errors.password.message}</span>
              )}
            </div>

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
              {errors.confirmPassword && (
                <span className="error-text">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 justify-between mt-3">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value={registerAgent.isLoading ? 'Adding...' : 'Add'}
                disabled={registerAgent.isLoading}
              />
              <button
                type="button"
                onClick={() => reset()}
                className="request-btn text-light"
              >
                Cancel
              </button>
            </div>

            {registerAgent.isError && (
              <p className="error-text text-center">
                {registerAgent.error?.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMember;

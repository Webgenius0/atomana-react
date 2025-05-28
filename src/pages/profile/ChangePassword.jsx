import { Link } from 'react-router-dom';

import { useState } from 'react';

import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import { useChangePassword } from '@/hooks/profile.hook';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
  const {
    mutate: changePassword,
    isPending: isChangePasswordPending,
    form,
  } = useChangePassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = form;

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //   const { agents, isLoading, isError, error } = useGetAgents();

  const onSubmit = (data) => {
    changePassword(data);
  };

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link to="/profile">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Change Password</h2>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[670px] mx-auto flex flex-col gap-[15px]"
          >
            {/* Password */}
            <div className="relative flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Current Password
              </label>
              <div className="relative">
                <input
                  className="input-field pr-10 px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  type={showCurrentPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('current_password', {
                    required: 'Current password is required',
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              {errors?.current_password && (
                <span className="text-red-500 mt-2">
                  {errors?.current_password.message}
                </span>
              )}
            </div>
            {/* Password */}
            <div className="relative flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                New Password
              </label>
              <div className="relative">
                <input
                  className="input-field pr-10 px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
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
              {errors?.password_confirmation && (
                <span className="text-red-500 mt-2">
                  {errors?.password_confirmation.message}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 justify-between mt-3">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value={isChangePasswordPending ? 'Saving...' : 'Save'}
                disabled={isChangePasswordPending}
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

export default ChangePassword;

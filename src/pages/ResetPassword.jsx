import logo from '@/assets/images/logo.png';
import { useAuth } from '@/hooks/useAuth';
import errorResponse from '@/lib/errorResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const signupSchema = z
  .object({
    password: z
      .string({ required_error: 'password is required' })
      .min(1, 'password is required')
      .min(8, 'password should be at least 8 characters long'),
    password_confirmation: z
      .string({ required_error: 'confirm password is required' })
      .min(1, 'password is required'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ['password_confirmation'],
    message: 'passwords do not match',
  });

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await resetPassword(data);
      toast.success('Password reset successfully!');
      navigate('/sign-in');
      reset();
    } catch (err) {
      const response = errorResponse(err, (fields) => {
        Object.entries(fields).forEach(([field, messages]) => {
          setError(field, {
            message: messages?.[0],
          });
        });
      });
      if (response) {
        toast.error(response);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-[#151515] text-[#FFFFFF]">
      <div className="max-w-screen-xl w-full flex flex-col mx-auto flex-1 gap-[2rem] mb-4">
        <div className="my-4 flex items-center justify-between px-[20px] sm:px-[50px] py-[17px] sm:py-[25px]">
          {/* logo */}
          <div className="max-w-[80px] w-full overflow-hidden">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-[440px] w-full p-5 sm:p-0 mx-auto">
          <div>
            <strong className="font-Inria text-[18px] sm:text-[20px] italic font-bold leading-[24px] tracking-[-0.2px] capitalize">
              Reset Password
            </strong>
            <p className="font-Inria text-[18px] sm:text-[20px] font-bold leading-[24px] tracking-[-0.2px] capitalize text-white/50 mt-[10px]">
              Set New Password
            </p>
          </div>
          <div className="w-full mt-8 md:mt-12 flex flex-col items-center">
            <div className="w-full">
              <form
                className="w-full flex flex-col gap-[20px] mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-[8px]">
                  <label
                    className="text-[14px] font-medium leading-[21px] tracking-[-0.14px] text-[#FFF]"
                    htmlFor="password"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      className="h-[50px] w-full p-[16px_12px_16px_16px] rounded-[10px] border border-[#D8DFEB] bg-[#151515] outline-none placeholder:text-xs sm:placeholder:text-base"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password (8 or more characters long)"
                      id="password"
                      disabled={isLoading}
                      {...register('password')}
                    />
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-[20px] sm:size-6"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-[20px] sm:size-6"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label
                    className="text-[14px] font-medium leading-[21px] tracking-[-0.14px] text-[#FFF]"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className="h-[50px] w-full p-[16px_12px_16px_16px] rounded-[10px] border border-[#D8DFEB] bg-[#151515] outline-none placeholder:text-xs sm:placeholder:text-base"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Password (8 or more characters long)"
                      id="password_confirmation"
                      disabled={isLoading}
                      {...register('password_confirmation')}
                    />
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-[20px] sm:size-6"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-[20px] sm:size-6"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </div>
                  {errors.password_confirmation && (
                    <p className="text-red-500 text-xs">
                      {errors.password_confirmation.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-[50px] mt-5 tracking-wide  bg-[#FFF] text-[#151515] text-[16px] font-normal leading-normal font-Inria w-full py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  {isLoading ? (
                    <span>Loading....</span>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-rotate-ccw"
                      >
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                      </svg>
                      <span className="ml-3">Reset Password</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

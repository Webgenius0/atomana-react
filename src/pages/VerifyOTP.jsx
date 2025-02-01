import { useAuth } from '@/hooks/useAuth';
import errorResponse from '@/lib/errorResponse';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const OTP_EXP_TIME = 60;

const VerifyOTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { verifyOTP, sendOTP } = useAuth();
  const navigate = useNavigate();

  // const response = await verifyOTP(otp);
  // if (response.success) {
  //   navigate("/login");
  // } else {
  //   set

  const { register, handleSubmit, setValue, setError } = useForm();
  const [otpExpTime, setOtpExpTime] = useState(OTP_EXP_TIME);

  const onSubmit = async (data) => {
    try {
      const otp = Object.values(data).join('');
      setIsLoading(true);
      await verifyOTP(otp);
      toast.success('Verification successful');
      navigate('/sign-in');
    } catch (err) {
      const response = errorResponse(err, (fields) => {
        Object.entries(fields).forEach(([field, messages]) => {
          let fieldName = field;
          // demo to update api response type to local field
          //   switch (field) {
          //     case "name":
          //       fieldName = "name";
          //       break;
          //   }
          setError(fieldName, {
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

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^\d*$/.test(value)) {
      setValue(`digit${index}`, '');
      return;
    }

    if (value.length === 1 && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    } else if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }

    setValue(`digit${index}`, value);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');

    // Validate if input contains exactly 6 digits
    if (/^\d{6}$/.test(pasteData)) {
      pasteData.split('').forEach((num, idx) => {
        setValue(`digit${idx}`, num);
      });
      document.getElementById(`otp-5`).focus(); // Move focus to the last input
    } else {
      alert('Please paste exactly 6 digits');
    }
  };

  const handleResend = async () => {
    try {
      setIsLoading(true);
      await sendOTP();
      setOtpExpTime(OTP_EXP_TIME);
      toast.success('OTP sent!');
    } catch (err) {
      const response = errorResponse(err, (fields) => {
        Object.entries(fields).forEach(([field, messages]) => {
          let fieldName = field;
          // demo to update api response type to local field
          // switch (field) {
          //   case "name":
          //     fieldName = "name";
          //     break;
          // }
          setError(fieldName, {
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (otpExpTime > 0) {
        setOtpExpTime(otpExpTime - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [otpExpTime]);

  return (
    <div className="min-h-screen flex justify-center bg-[#151515] text-[#FFFFFF]">
      <div className="max-w-screen-xl w-full flex flex-col mx-auto flex-1 gap-[2rem]">
        <div className="max-w-[440px] w-full p-5 sm:p-0 mx-auto mt-20">
          <div>
            <strong className="font-Inria text-[18px] sm:text-[20px] italic font-bold leading-[24px] tracking-[-0.2px] capitalize">
              Verify
            </strong>
            <p className="font-Inria text-[18px] sm:text-[20px] font-bold leading-[24px] tracking-[-0.2px] capitalize text-white/50 mt-[10px]">
              Please verify with OTP
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mt-8 md:mt-12 flex flex-col gap-[8px] sm:gap-4"
          >
            <h2 className="text-lg sm:text-[24px]">Code</h2>
            <div className="sm:flex grid grid-cols-6 gap-[6px] sm:gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  maxLength={1}
                  {...register(`digit${index}`)}
                  onChange={(e) => handleInputChange(e, index)}
                  onPaste={handlePaste}
                  className="border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-14 h-12 sm:h-14 bg-[#151515] text-[20px] sm:text-[28px] text-center"
                  type="text"
                />
              ))}
            </div>
            <button
              type="submit"
              className="h-[50px] mt-3 mb-0 sm:my-3 tracking-wide bg-[#FFF] text-[#151515] text-base sm:text-lg font-normal leading-normal font-Inria w-full sm:w-[90%] py-[10px] sm:py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              {isLoading ? (
                <span>Loading....</span>
              ) : (
                <span>Verify your account</span>
              )}
            </button>
            <div className="flex flex-col gap-0 sm:gap-1">
              {otpExpTime > 0 && (
                <p className="font-medium text-sm sm:text-base">
                  The Code Expire in{' '}
                  <span className="text-[rgba(0,150,150,1)] font-bold">
                    {otpExpTime}
                  </span>{' '}
                  Second
                </p>
              )}
              {otpExpTime === 0 && (
                <button
                  onClick={handleResend}
                  className="underline decoration-[rgba(0,150,150,1)] text-[rgba(0,150,150,1)] font-medium text-sm sm:text-base cursor-pointer mr-auto"
                >
                  Resend Code
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;

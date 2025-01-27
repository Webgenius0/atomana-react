import { useAuth } from "@/hooks/useAuth";
import errorResponse from "@/lib/errorResponse";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const { verifyOTP } = useAuth();
  const navigate = useNavigate();

  // const response = await verifyOTP(otp);
  // if (response.success) {
  //   navigate("/login");
  // } else {
  //   set

  const { register, handleSubmit,setValue, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      const otp = Object.values(data).join("");
      await verifyOTP(otp);
      navigate("/sign-in");
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
        console.log(response);
      }
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
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 md:mt-12 flex flex-col gap-[8px] sm:gap-4">
      <h2 className='text-lg sm:text-[24px]'>Code</h2>
      <div className="sm:flex grid grid-cols-6 gap-[6px] sm:gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            maxLength={1}
            {...register(`digit${index}`)}
            onChange={(e) => handleInputChange(e, index)}
            onPaste={handlePaste}
            className='border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-16 h-12 sm:h-16 bg-[#151515] text-[20px] sm:text-[28px] text-center'
            type="text"
          />
        ))}
      </div>
      <button
        type='submit'
        className="mt-3 mb-0 sm:my-5 tracking-wide bg-[#FFF] text-[#151515] text-[16px] sm:text-[20px] font-normal leading-normal font-Inria w-full py-[10px] sm:py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        Verify your account
      </button>
      <div className='flex flex-col gap-0 sm:gap-2'>
        <p className='font-medium text-sm sm:text-lg'>
          The Code Expires in <span className='text-[rgba(0,150,150,1)] font-bold'>60</span> Seconds
        </p>
        <p className='underline decoration-[rgba(0,150,150,1)] text-[rgba(0,150,150,1)] font-medium text-sm sm:text-lg cursor-pointer'>
          Resend Code
        </p>
      </div>
    </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;

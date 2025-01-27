import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="min-h-screen flex justify-center bg-[#151515] text-[#FFFFFF]">
      <div className="max-w-screen-xl flex flex-col mx-auto flex-1 gap-[2rem]">
        <div className="max-w-[440px] w-full p-6 sm:p-12 mx-auto mt-20">
          <div>
            <strong className="font-Inria text-[18px] sm:text-[20px] italic font-bold leading-[24px] tracking-[-0.2px] capitalize">
              Reset Your Password
            </strong>
            <p className="font-Inria text-[18px] sm:text-[20px] font-bold leading-[24px] tracking-[-0.2px] capitalize text-white/50 mt-[10px]">
              Please enter your email
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 md:mt-12 flex flex-col gap-[10px]"
          >
            <h2 className="text-sm sm:text-lg">Your Email</h2>
            <div className="w-full">
              <input
                className="w-full border-2 border-white rounded-xl text-white h-12 sm:h-[50px] bg-[#151515] text-[18px] outline-none px-3 py-2"
                type="text"
                {...register("email", { required: true })}
              />
              {}
            </div>
            <button
              type="submit"
              className="mt-3 mb-0 sm:my-3 tracking-wide bg-[#FFF] text-[#151515] text-base sm:text-lg font-normal leading-normal font-Inria w-full h-[50px] py-[10px] sm:py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Reset
            </button>
            <div className="flex flex-col gap-2">
              <Link to={`/sign-in`}>
                <p className="underline decoration-[rgba(0,150,150,1)] text-[rgba(0,150,150,1)] font-medium text-sm sm:text-base cursor-pointer">
                  Return to Login
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

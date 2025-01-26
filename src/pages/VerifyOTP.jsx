import { useAuth } from '@/hooks/useAuth'
import React, { useState } from 'react'

const VerifyOTP = () => {
    const { VerifyOTP } = useAuth();
    const [otp, setOtp] = useState("");

    // const response = await verifyOTP(otp);
    // if (response.success) {
    //   navigate("/login");
    // } else {
    //   set
    
    

    return (
        <div className="min-h-screen flex justify-center bg-[#151515] text-[#FFFFFF]">
            <div className="max-w-screen-xl w-full flex flex-col mx-auto flex-1 gap-[2rem]">
                <div className="max-w-[440px] w-full p-5 sm:p-0 mx-auto mt-20">
                    <div>
                        <strong className='font-Inria text-[18px] sm:text-[20px] italic font-bold leading-[24px] tracking-[-0.2px] capitalize'>Verify</strong>
                        <p className='font-Inria text-[18px] sm:text-[20px] font-bold leading-[24px] tracking-[-0.2px] capitalize text-white/50 mt-[10px]'>Please verify with OTP</p>
                    </div>
                    <form className="w-full mt-8 md:mt-12 flex flex-col gap-[8px] sm:gap-4">
                        <h2 className='text-lg sm:text-[24px]'>Code</h2>
                        <div className="sm:flex grid grid-cols-6 gap-[6px] sm:gap-3">
                            <input className='border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-16 h-12 sm:h-16 bg-[#151515] text-[20px] sm:text-[28px] text-center' type="text" />
                            <input className='border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-16 h-12 sm:h-16 bg-[#151515] text-[20px] sm:text-[28px] text-center' type="text" />
                            <input className='border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-16 h-12 sm:h-16 bg-[#151515] text-[20px] sm:text-[28px] text-center' type="text" />
                            <input className='border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-16 h-12 sm:h-16 bg-[#151515] text-[20px] sm:text-[28px] text-center' type="text" />
                            <input className='border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-16 h-12 sm:h-16 bg-[#151515] text-[20px] sm:text-[28px] text-center' type="text" />
                            <input className='border-2 border-white rounded-lg sm:rounded-xl text-white w-12 sm:w-16 h-12 sm:h-16 bg-[#151515] text-[20px] sm:text-[28px] text-center' type="text" />
                        </div>
                        <button
                            type='submit'
                            className="mt-3 mb-0 sm:my-5 tracking-wide bg-[#FFF] text-[#151515] text-[16px] sm:text-[20px] font-normal leading-normal font-Inria w-full py-[10px] sm:py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            Verify your account
                        </button>
                        <div className='flex flex-col gap-0 sm:gap-2'>
                            <p className='font-medium text-sm sm:text-lg'>The Code Expire in <span className='text-[rgba(0,150,150,1)] font-bold'>60</span> Second</p>
                            <p className='underline decoration-[rgba(0,150,150,1)] text-[rgba(0,150,150,1)] font-medium text-sm sm:text-lg cursor-pointer'>Resend Code</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyOTP;
import React from 'react'

const VerifyOTP = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[#151515] text-[#FFFFFF]">
    <div className="max-w-screen-xl flex flex-col mx-auto flex-1 gap-[2rem]">
        <div className="lg:w-1/2 xl:w-[44%] p-6 sm:p-12 mx-auto mt-20">
            <div>
                <strong className='font-Inria text-[20px] italic font-bold leading-[24px] tracking-[-0.2px] capitalize'>Verify</strong>
                <p className='font-Inria text-[20px] font-bold leading-[24px] tracking-[-0.2px] capitalize text-white/50 mt-[10px]'>Please verify with OTP</p>
            </div>
            <form className="mt-12 flex flex-col gap-4">
                <h2 className='text-[24px]'>Code</h2>
                <div className="flex gap-4">
                    <input className='border-2 border-white rounded-xl text-white w-16 h-16 bg-[#151515] text-[28px] text-center' type="text" />
                    <input className='border-2 border-white rounded-xl text-white w-16 h-16 bg-[#151515] text-[28px] text-center' type="text" />
                    <input className='border-2 border-white rounded-xl text-white w-16 h-16 bg-[#151515] text-[28px] text-center' type="text" />
                    <input className='border-2 border-white rounded-xl text-white w-16 h-16 bg-[#151515] text-[28px] text-center' type="text" />
                    <input className='border-2 border-white rounded-xl text-white w-16 h-16 bg-[#151515] text-[28px] text-center' type="text" />
                    <input className='border-2 border-white rounded-xl text-white w-16 h-16 bg-[#151515] text-[28px] text-center' type="text" />
                </div>
                <button
                    type='submit'
                    className="my-5 tracking-wide font-semibold bg-[#FFF] text-[#151515] text-[20px] font-normal leading-normal font-Inria w-full py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">                    
                        Verify your account
                </button>
                <div className='flex flex-col gap-2 text-lg'>
                    <p className='font-bold text-lg'>The Code Expire in <span className='text-[rgba(0,150,150,1)] font-bold'>60</span> Second</p>
                    <p className='underline decoration-[rgba(0,150,150,1)] text-[rgba(0,150,150,1)] font-extrabold text-lg cursor-pointer'>Resend Code</p>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default VerifyOTP;
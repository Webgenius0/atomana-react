import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {

    const {
        handleSubmit,
        register,
        reset,
    } = useForm()

    const onSubmit = (data) =>{
        console.log(data);
        reset();
    }
  return (
    <div className="min-h-screen flex justify-center bg-[#151515] text-[#FFFFFF]">
    <div className="max-w-screen-xl flex flex-col mx-auto flex-1 gap-[2rem]">
        <div className="lg:w-1/2 xl:w-[44%] p-6 sm:p-12 mx-auto mt-20">
            <div>
                <strong className='font-Inria text-[20px] italic font-bold leading-[24px] tracking-[-0.2px] capitalize'>Reset Your Password</strong>
                <p className='font-Inria text-[20px] font-bold leading-[24px] tracking-[-0.2px] capitalize text-white/50 mt-[10px]'>Please enter the gmail associated with your account and we'll send you password reset instructions.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-4">
                <h2 className='text-[18px]'>Your Email</h2>
                <div className="w-full">
                    <input className='w-full border-2 border-white rounded-xl text-white w-16 h-16 bg-[#151515] text-[18px] outline-none px-3 py-2' type="text" {...register('email', {required: true})} />
                    {}
                </div>
                <button
                    type='submit'
                    className="my-5 tracking-wide font-semibold bg-[#FFF] text-[#151515] text-[20px] font-normal leading-normal font-Inria w-full py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">                    
                        Send Reset Insturctions
                </button>
                <div className='flex flex-col gap-2 text-lg'>
                    <Link to={`/sign-in`}><p className='underline decoration-[rgba(0,150,150,1)] text-[rgba(0,150,150,1)] font-extrabold text-lg cursor-pointer'>Return to Login</p></Link>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

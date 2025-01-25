import AppleIconSvg from '@/components/svgs/AppleIconSvg'
import GoogleSvg from '@/components/svgs/GoogleSvg'
import logo from "@/assets/images/logo.png";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{
        console.log('submitting form data',data);
        reset();
    }
    return (
        <div className="min-h-screen flex justify-center bg-[#151515] text-[#FFFFFF]">
            <div className="max-w-screen-xl flex flex-col mx-auto flex-1">
                <div className='my-4 flex items-center justify-between px-[50px] py-[25px]'>
                    {/* logo */}
                    <div className="max-w-[80px] overflow-hidden">
                        <img
                        src={logo}
                        alt="logo"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='flex gap-3 items-center justify-center'>
                        <p className='text-[#CCC] text-[14px] font-normal leading-[21px] tracking-[-0.14px] font-Inter'>Already have an account?</p>
                        <Link to={`/sign-in`}><p className='cursor-pointer text-[#FFF] text-[14px] font-bold leading-[21px] tracking-[-0.14px] font-Inter'>Log In</p></Link>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 mx-auto">
                    <div>
                        <strong className='font-Inria text-[20px] italic font-bold leading-[24px] tracking-[-0.2px] capitalize'>Simplify. Organize. Succeed.</strong>
                        <p className='font-Inria text-[20px] font-bold leading-[24px] tracking-[-0.2px] capitalize text-white/50 mt-[10px]'>Sign up and Create your MyOps account</p>
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        {/* <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign up
                        </h1> */}
                        <div className="w-full flex-1">
                            <form className="min-w-[440px] flex flex-col gap-[20px] mx-auto max-w-xs" onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex flex-col gap-[8px]'>
                                    <label className='text-[14px] font-medium leading-[21px] tracking-[-0.14px] text-[#FFF]' htmlFor="firstName">First Name</label>
                                    <input
                                    className="h-[50px] p-[16px_12px_16px_16px] rounded-[10px] border border-[#D8DFEB] bg-[#151515] outline-none"
                                    type="text" placeholder="enter first name" id='firstName' {...register('firstName', { required:true})}/>
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <label className='text-[14px] font-medium leading-[21px] tracking-[-0.14px] text-[#FFF]' htmlFor="lastName">Last Name</label>
                                    <input
                                    className="h-[50px] p-[16px_12px_16px_16px] rounded-[10px] border border-[#D8DFEB] bg-[#151515] outline-none"
                                    type="text" placeholder="enter last name" id='lastName' {...register('lastName', { required:true})}/>
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <label className='text-[14px] font-medium leading-[21px] tracking-[-0.14px] text-[#FFF]' htmlFor="email">Email</label>
                                    <input
                                    className="h-[50px] p-[16px_12px_16px_16px] rounded-[10px] border border-[#D8DFEB] bg-[#151515] outline-none"
                                    type="email" placeholder="example@email.com" id='email' {...register('email', { required:true})}/>
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <label className='text-[14px] font-medium leading-[21px] tracking-[-0.14px] text-[#FFF]' htmlFor="password">Password</label>
                                    <div className='relative'>
                                        <input
                                        className="h-[50px] w-full p-[16px_12px_16px_16px] rounded-[10px] border border-[#D8DFEB] bg-[#151515] outline-none"
                                        type={showPassword ? 'text' : 'password'} placeholder="Password (8 or more characters long)" id='password' {...register('password', { required:true, minLength:{value: 8, message: 'password should be more than 8 character'}})}/>
                                        {showPassword ? <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-6"
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
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-6"
                                            onClick={() => setShowPassword(!showPassword)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>}
                                    </div>
                                    {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <label className='text-[14px] font-medium leading-[21px] tracking-[-0.14px] text-[#FFF]' htmlFor="confirmPassword">Confirm Password</label>
                                    <div className='relative'>
                                        <input
                                        className="h-[50px] w-full p-[16px_12px_16px_16px] rounded-[10px] border border-[#D8DFEB] bg-[#151515] outline-none"
                                        type={showConfirmPassword ? 'text' : 'password'} placeholder="Password (8 or more characters long)" id='confirmPassword' {...register('confirmPassword', { required:true, minLength:{value: 8, message: 'password should be more than 8 character'}, validate: value => value === watch(password) || 'password do not match' })}/>
                                        {showConfirmPassword ? <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-6"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer size-6"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>}
                                    </div>
                                    {errors.confirmPassword && <p className='text-red-500 text-xs'>{errors.confirmPassword.message}</p>}
                                </div>   
                                <button
                                    type='submit'
                                    className="mt-5 tracking-wide font-semibold bg-[#FFF] text-[#151515] text-[16px] font-normal leading-normal font-Inria w-full py-4 rounded-lg hover:bg-[rgba(0,150,150,1)] hover:text-[#FFF] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Create Account
                                    </span>
                                </button>
                                <p className="min-w-[440px] mt-6 text-[#CCC] text-center font-sans text-[14px] font-normal leading-[21px] tracking-[-0.14px]">
                                        By continuing, you acknowledge that you understand and agree to the
                                    <a href="#" className="border-b border-gray-500 border-dotted ml-1">
                                        Terms & Conditions
                                    </a>
                                     <span className='mx-1'>and</span> 
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy.
                                    </a>
                                </p>
                            </form>

                            <div className="my-12 border-b text-center ">
                                <div
                                    className=" px-4 inline-block text-sm bg-[#151515] text-[#FFFFFF] tracking-wide font-medium transform translate-y-1/2">
                                    Or
                                </div>
                            </div>

                            <div className="flex flex-col gap-[20px] items-center">
                                <button
                                    className="flex h-[50px] px-[100px] py-[15px] justify-center items-center gap-[10px] self-stretch rounded-[8px] border border-white">
                                    <div className="p-2 rounded-full">
                                        <GoogleSvg/>
                                    </div>
                                    <span className="ml-4">
                                        Sign Up with Google
                                    </span>
                                </button>

                                <button
                                    className="flex h-[50px] px-[100px] py-[15px] justify-center items-center gap-[10px] self-stretch rounded-[8px] border border-white">
                                    <div className="p-2 rounded-full">
                                        <AppleIconSvg/>
                                    </div>
                                    <span className="ml-4">
                                        Sign up with Apple
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;

import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg'
import CancelWhiteButtonSvg from '@/components/svgs/CancelWhiteButtonSvg'
import ImageSvg from '@/components/svgs/ImageSvg'
import PlusSvg from '@/components/svgs/PlusSvg'
import VideoSvg from '@/components/svgs/VideoSvg'
import { LessonDataContext } from '@/context/LessonDataProvider'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

function AddLessons() {
    const { register, handleSubmit, reset, setValue } = useForm()
    const [showGallery, setShowGallery] = useState(false)
    const [image, setImage] = useState(null)
    const [video, setVideo] = useState(null)
    const navigate = useNavigate()
    const { lessonData, setLessonData } = useContext(LessonDataContext)

    const onSubmit = (data) => {
        const newData = {
            ...data,
            image,
            video
        }
        setLessonData((prev) => [...prev, newData])
        navigate("/my-classroom/create-course/");
        
    }

    const handleResetButton = (e) => {
        e.preventDefault();
        reset();
        setImage(null);
        setVideo(null);
        
    }

    const handleToggle = () => {
        setShowGallery(!showGallery)
    }

    const handleImageUploader = (e) => {
        const file = e.target.files[0]
        if (file) {
            // setImage(file.name)
            setImage(URL.createObjectURL(file))
            setValue("image", file)
        }
    }

    const handleVideoUploader = (e) => {
        const file = e.target.files[0]
        if (file) {
            setVideo(URL.createObjectURL(file))
            setValue("video", file)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="my-container flex flex-col justify-between min-h-[80vh]">
                <div>
                    <div className="pt-6 md:pt-8 lg:pt-12 pb-3 flex items-center gap-5 duration-300 hover:opacity-60 w-fit mb-4">
                        <Link
                            to={`${location.state?.from || "/my-classroom/create-course"}`}
                        >
                            <ArrowLeftSvg />
                        </Link>
                        <h1 className="section-title">
                            Add Lessons
                        </h1>
                        
                    </div>
                    <div className="max-w-[684px] w-full mx-auto">
                        <div className='flex flex-col sm:gap-8 gap-4'>
                            <input type="text" placeholder='title' {...register("title")} className='py-2 px-4 text-white/50 font-Inria  border-white/50 border rounded-lg text-lg sm:text-xl italic font-bold leading-3xl tracking-[-0.2px] capitalize outline-none bg-[#151515] ' />
                            <textarea placeholder='| description' {...register("description")} className='px-4 py-2 text-white placeholder:text-white/50 placeholder:italic font-Inria text-sm sm:text-base border-white/50 border rounded-lg font-normal leading-xl  tracking-[-0.2px] capitalize outline-none bg-[#151515] w-full min-h-[40px]' rows="3" />
                            <div className='flex items-center gap-4 cursor-pointer'>
                                <span onClick={handleToggle} className={`${!showGallery ? "block" : "hidden"} w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]`}>
                                    <PlusSvg />
                                </span>
                                <div className={`flex items-center gap-4 ${showGallery ? "block" : "hidden"}`}>
                                    <span onClick={handleToggle} className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
                                        <CancelWhiteButtonSvg />
                                    </span>
                                    <span className='cursor-pointer h-fit  max-w-[800px] w-full'>
                                        <label htmlFor="image-upload">
                                            <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#000] cursor-pointer">
                                                <ImageSvg />
                                            </span>
                                        </label>
                                        <input type="file" className='hidden text-white w-full h-full' id='image-upload' accept='image/*' onChange={(e) => handleImageUploader(e)} />
                                    </span>
                                    <span className='cursor-pointer h-fit  max-w-[800px] w-full'>
                                        <label htmlFor="video-upload">
                                            <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#000] cursor-pointer">
                                                <VideoSvg />
                                            </span>
                                        </label>
                                        <input type="file" className='hidden text-white w-full h-full' id='video-upload' accept='image/*' onChange={(e) => handleVideoUploader(e)} />
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-6'>
                                {image && <img src={image} alt="Uploaded" className="w-[40%] h-[40%] mt-2 rounded-lg" />}
                                {/* {video && <video src={video} alt="uploaded" className="w-[40%] h-[40%] mt-2 rounded-lg" />} */}
                                {video && <img src={video} controls className="w-[40%] h-[40%] mt-2 rounded-lg" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between sm:flex-row flex-col sm:space-y-0 space-y-4 my-4">
                    <input
                        className="request-btn approve cursor-pointer px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-80 duration-300"
                        type="submit"
                        value="Add"
                    />
                    <button type='button' onClick={handleResetButton} className="request-btn text-light bg-[#151515] px-6 py-3 rounded-lg hover:opacity-80 duration-300">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddLessons
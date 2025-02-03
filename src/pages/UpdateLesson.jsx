import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg'
import ImageSvg from '@/components/svgs/ImageSvg';
import VideoSvg from '@/components/svgs/VideoSvg';
import { LessonDataContext } from '@/context/LessonDataProvider'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom'

function UpdateLesson() {
    const { register, handleSubmit, setValue } = useForm();
    const { lessonData, setLessonData } = useContext(LessonDataContext);
    const { id } = useParams();
    const navigate = useNavigate()
    
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const dataFind = lessonData.find(data => data.title === id);
        if (dataFind) {
            setValue("title", dataFind.title);
            setValue("description", dataFind.description);
            setImage(dataFind.image || null);
            setVideo(dataFind.video || null);
        } else {
            console.log("Data not found", id);
        }
    }, [id, lessonData, setValue]);

    const handleImageUploader = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleVideoUploader = (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            setVideo(videoUrl);
        }
    };

    const onSubmit = (data) => {
        const updatedLesson = {
            ...data,
            image,
            video
        };

        setLessonData(prevData =>
            prevData.map(lesson => (lesson.title === id ? updatedLesson : lesson))
        );
        console.log("Updated Lesson:", updatedLesson);
        navigate("/my-classroom/create-course/")
    };

    return (
        <div className="my-container flex flex-col h-[80vh]">
            <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
                <Link
                    to={`/my-classroom/create-course`}
                    className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
                >
                    <ArrowLeftSvg />
                    <h1 className="section-title">Update Lesson</h1>
                </Link>
            </div>
            <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-[684px] w-full mx-auto">
                    <div className="flex flex-col gap-8">
                        <input {...register("title")} className="text-white/50 font-Inria text-xl italic font-bold leading-3xl tracking-[-0.2px] capitalize outline-none bg-[#151515]" />
                        <textarea {...register("description")} className="text-white placeholder:text-white/50 placeholder:italic py-2 font-Inria text-base font-normal leading-xl tracking-[-0.2px] capitalize outline-none bg-[#151515] w-full min-h-[40px]" rows="1" />

                        <div className="flex items-center gap-6">
                            {/* Image Upload Section */}
                            <div className="flex flex-col gap-4">
                                {image && <img src={image} alt="Uploaded" className="w-[40%] h-[40%] mt-2 rounded-lg" />}
                                <span className="cursor-pointer">
                                    <label htmlFor="image-upload">
                                        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#000] cursor-pointer">
                                            <ImageSvg />
                                        </span>
                                    </label>
                                    <input type="file" className="hidden" id="image-upload" accept="image/*" onChange={handleImageUploader} />
                                </span>
                            </div>

                            {/* Video Upload Section */}
                            <div className="flex flex-col gap-4">
                                {video && <img src={video} controls className="w-[40%] h-[40%] mt-2 rounded-lg" />}
                                <span className="cursor-pointer">
                                    <label htmlFor="video-upload">
                                        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#000] cursor-pointer">
                                            <VideoSvg />
                                        </span>
                                    </label>
                                    <input type="file" className="hidden" id="video-upload" accept="video/*" onChange={handleVideoUploader} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between sm:flex-row flex-col sm:space-y-0 space-y-4 mb-4">
                    <input className="request-btn approve cursor-pointer px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-80 duration-300" type="submit" value="Update" />
                    <button className="request-btn text-light bg-[#151515] px-6 py-3 rounded-lg hover:opacity-80 duration-300">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateLesson;

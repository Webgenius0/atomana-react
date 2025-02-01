import CourseCard from '@/components/CourseCard'
import Dropdown from '@/components/Dropdown'
import PlusSvg from '@/components/svgs/PlusSvg'
import VideoModal from '@/components/VideoModal'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Courses() {
    const [data, setData] = useState([])
    const [isModalOpen, setModalOpen] = useState(false);
    const courseOptions = [
        { value: "new-courses", label: "Sort by: New Courses" },
        { value: "continue-learning", label: "Continue Learning" },
        { value: "trending-courses", label: "Trending Courses" },
    ];

    const handleSelect = () => {
        // console.log("Course Option: ", courseOptions)
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/my_classroom.json");
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching JSON:", error);
            }
        };

        fetchData();
    }, []);



    return (
        <div className='my-container' >
            <div className="flex items-center justify-between my-5">
                <h1 className="text-white section-title text-xl">Courses</h1>
                <Link to="" className="flex items-center gap-3">
                    <p className="text-sm leading-6 capitalize text-light tracking-[-0.14px] hover:text-secondary duration-300">
                        Add content
                    </p>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
                        <PlusSvg />
                    </span>
                </Link>
            </div>
            <div className="flex gap-2 my-5">
                <Dropdown options={courseOptions} onSelect={handleSelect} />
            </div>
            <Link to={"/my-classroom/course-details"}>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
                    {data?.map((item, idx) => (
                        <CourseCard key={idx} data={item} />
                    ))}
                </div>
            </Link>
        </div>
    )
}

export default Courses
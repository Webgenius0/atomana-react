import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import img from "@/assets/images/img1.png";
import { RiCopyrightFill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import CopySvg from "@/components/svgs/CopySvg";
const CourseDetails = () => {
  return (
    <>
      <div className="my-container ">
        <h1 className="text-light text-lg font-medium mt-5 section-title">
          Introduction to Real Estate Marketing Strategies
        </h1>
        <div className=" relative rounded-2xl bg-transparent mt-5">


          <img
            className="rounded-xl w-full aspect-[16/9] lg:max-h-[550px]"
            src={img}
            alt={"Course Thumbnail"}
          />

          <div className="mt-5">
            {/* <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] mb-6">
              title
            </h3> */}

            <div className="flex items-center justify-between p-4 md:p-5 lg:p-6 rounded-[16px] bg-gradient-to-b from-[#242424] to-[#024040] ">
              <div className="flex items-center gap-2 w-full text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
                <div className="flex justify-center items-center gap-2 border-r border-[#ccc] pr-2 w-1/2 ">
                  <span>
                    <FaCalendarAlt />
                  </span>
                  <span>Lessons</span>
                </div>

                <div className="flex justify-center items-center gap-2 pl-2 w-1/2 ">
                  <span>
                    <IoTime />
                  </span>
                  <span>duration</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <h1 className="mt-5 mb-10 text-light section-title">
                    Lessons in this class
                  </h1>

                  <div className="mb-6 sm:mb-8 md:mb-12">
                    <div className="flex items-center justify-between gap-4 mb-6 border-[#505050] border-b">
                      <h3 className="text-light text-sm md:text-base font-bold leading-[21px] tracking-[-0.2px] pb-2.5">
                        1. Introduction
                      </h3>
                      <p className="text-light">2.30</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 mb-6 border-[#505050] border-b">
                      <h3 className="text-light text-sm md:text-base font-bold leading-[21px] tracking-[-0.2px] pb-2.5">
                        2. How to Begin
                      </h3>
                      <p className="text-light">5.30</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 mb-6 border-[#505050] border-b">
                      <h3 className="text-light text-sm md:text-base font-semibold leading-[21px] tracking-[-0.2px] pb-2">
                        3. Marketing Foundations
                      </h3>
                      <p className="text-light">23.30</p>
                    </div>
                    <div>
                      <p className="flex justify-center items-center text-[#009696] gap-1">SHOW ALL LESSONS<FaCaretDown /> </p>
                    </div>
                    <div className="text-light">
                      <h1 className="section-title mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5">About This Course</h1>
                      <p className="text-light text-sm leading-5">
                        Learn how to create a powerful social media strategy
                        tailored for real estate agents. This course will cover
                        platform selection, content creation, and leveraging
                        social media to attract and engage potential buyers.
                        Learn how to create a powerful social media strategy
                        tailored for real estate agents. This course will cover
                        platform selection, content creation, and leveraging
                        social media to attract and engage potential buyers.
                      </p>
                    </div>

                    <p className="flex justify-center items-center text-[#009696] gap-1 mt-3 sm:mt-4 md:mt-5">SHOW MORE<FaCaretDown /> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* test */}
    </>
  );
};

export default CourseDetails;

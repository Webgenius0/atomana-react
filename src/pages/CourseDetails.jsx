import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import img from "@/assets/images/img1.png";
import { RiCopyrightFill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa"; 
const CourseDetails = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-light text-lg font-medium mt-5 section-title">
          Introduction to Real Estate Marketing Strategies
        </h1>
        <div className=" relative rounded-2xl bg-transparent mt-5">
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between px-4 ">
            <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
              type
            </div>

            <button className="w-8 h-8 rounded-full flex items-center justify-center  bg-[#242424] bg-opacity-45 " >
            <RiCopyrightFill className="text-[#ccc] text-lg" />
          </button>
          </div>

          <img
            className="rounded-t-lg h-[450px] w-full"
            src={img}
            alt={"Course Thumbnail"}
          />

          <div className="p-4">
            {/* <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] mb-6">
              title
            </h3> */}

            <div className="flex items-center justify-between">
              <div className="flex justify-between items-center gap-2 w-full text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
                <div className="flex justify-center items-center gap-2 border-r border-[#ccc] pr-2">
                  <span>
                    <FaCalendarAlt />
                  </span>
                  <span>lessons</span> Lessons
                </div>

                <div className="flex justify-center items-center gap-2 pl-2">
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

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6 border-[#505050] border-b-2">
                      <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] pb-2">
                        1.Introduction
                      </h3>
                      <p className="text-light">2.30</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 mb-6 border-[#505050] border-b-2">
                      <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] pb-2">
                        2.How to Begin
                      </h3>
                      <p className="text-light">5.30</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 mb-6 border-[#505050] border-b-2">
                      <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] pb-2">
                        3.Marketing Foundations
                      </h3>
                      <p className="text-light">23.30</p>
                    </div>
                    <div>
                      <p className="flex justify-center items-center section-title text-[#009696]">SHOW ALL LESSONS<FaCaretDown/> </p>
                    </div>
                    <div className="text-light">
                      <h1 className="section-title mt-5 mb-5">About This Course</h1>
                      <p>
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

                    <div>
                      <p className="flex justify-center items-center section-title text-[#009696]">SHOW MORE<FaCaretDown/> </p>
                    </div>
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

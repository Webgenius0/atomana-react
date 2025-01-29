import { useState } from "react";
import { FaCalendarAlt, FaCaretDown } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import img from "@/assets/images/img1.png";
import CopySvg from "@/components/svgs/CopySvg";
import { Link } from "react-router-dom";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";

const BlogCourseDetails = () => {
  const [showAllLessons, setShowAllLessons] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleLessons = () => {
    setShowAllLessons((prev) => !prev);
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const lessons = [
    { id: 1, title: "1. Introduction", duration: "2.30" },
    { id: 2, title: "2. How to Begin", duration: "5.30" },
    { id: 3, title: "3. Marketing Foundations", duration: "23.30" },
    { id: 4, title: "4. Advanced Strategies", duration: "15.00" },
    { id: 5, title: "5. Final Thoughts", duration: "10.00" },
  ];

  const courseDescription = `
    Learn how to create a powerful social media strategy tailored for real estate agents. 
    This course will cover platform selection, content creation, and leveraging social media 
    to attract and engage potential buyers. Learn how to create a powerful social media strategy 
    tailored for real estate agents. This course will cover platform selection, content creation, 
    and leveraging social media to attract and engage potential buyers.
  `;

  return (
    <>
      <div className="my-container ">
        <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
          <Link
            to="/my-classroom"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
          >
            <ArrowLeftSvg />
            <div>
              <h2 className="section-title">
                Maximizing Your Real Estate CRM: Best Practices for Success
              </h2>
              <p className="text-xs text-[#FFFFFF] leading-6">
                Published on January 21, 2025
              </p>
            </div>
          </Link>
        </div>

        <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
          <div>
            <p className="text-[#FFFFFF] font-normal text-sm leading-6">
              In real estate, time is everything. Between managing client
              relationships, scheduling showings, and tracking endless tasks,
              staying organized can feel like a juggling act. But there’s a tool
              that can make all of this easier-and that’s your Real Estate CRM.
              Whether you're just getting started with your CRM or you’ve been
              using it for a while, there are a few best practices that can
              truly unlock its full potential and take your business to the next
              level.
            </p>
          </div>
          <div>
            <p className="text-[#FFFFFF] font-normal text-sm leading-6 mt-5">
              Here are some simple tips for maximizing your CRM’s power and
              making it work for you, instead of the other way around.
            </p>
          </div>
        </div>
        <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
          <h1 className="text-light  font-medium mt-5 section-title">
            Centralize Client Information
          </h1>
          <div>
            <p className="text-[#FFFFFF] font-normal text-sm leading-6">
              Think about how often you search through emails, spreadsheets, and
              notepads to find a client’s contact information or preferences.
              Now, imagine a world where all that data is stored in one
              place—accessible at the click of a button. That’s the magic of a
              CRM. 
            </p>
          </div>
          <div>
            <p className="text-[#FFFFFF] font-normal text-sm leading-6 mt-5">
              By centralizing your client data, you can keep track of contact
              details, communication history, property preferences, and more.
              When everything is in one place, you can deliver a more
              personalized service that builds stronger relationships with your
              clients. You’ll never have to waste time hunting down information
              again.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl bg-transparent mt-5">
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between px-4 z-10">
            <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
              video
            </div>

            <button className="w-8 h-8 rounded-full flex items-center justify-center  bg-[#242424] bg-opacity-45 ">
              <CopySvg />
            </button>
          </div>
          <img
            className="rounded-xl w-full aspect-[16/9] lg:max-h-[550px]"
            src={img}
            alt={"Course Thumbnail"}
          />

          <div className="mt-5">
           

            <h1 className="mt-5 mb-10 text-light section-title">
              Lessons in this class
            </h1>

            <div className="mb-6 sm:mb-8 md:mb-12">
              {lessons
                .slice(0, showAllLessons ? lessons.length : 3)
                .map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between gap-4 mb-6 border-[#505050] border-b"
                  >
                    <h3 className="text-light text-sm md:text-base font-bold leading-[21px] tracking-[-0.2px] pb-2.5">
                      {lesson.title}
                    </h3>
                    <p className="text-light">{lesson.duration}</p>
                  </div>
                ))}

              <p
                onClick={toggleLessons}
                className="flex justify-center items-center text-[#009696] gap-1 cursor-pointer"
              >
                {showAllLessons ? "SHOW LESS" : "SHOW ALL LESSONS"}
                <FaCaretDown
                  className={`transform transition-transform ${
                    showAllLessons ? "rotate-180" : ""
                  }`}
                />
              </p>

              <div className="text-light">
                <h1 className="section-title mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5">
                  About This Course
                </h1>
                <p className="text-light text-sm leading-5">
                  {showMore
                    ? courseDescription
                    : `${courseDescription.slice(0, 400)}...`}
                </p>
              </div>

              <p
                onClick={toggleShowMore}
                className="flex justify-center items-center text-[#009696] gap-1 mt-3 sm:mt-4 md:mt-5 cursor-pointer"
              >
                {showMore ? "SHOW LESS" : "SHOW MORE"}
                <FaCaretDown
                  className={`transform transition-transform ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCourseDetails;

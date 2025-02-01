import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import img from "@/assets/images/img1.png";
import CopySvg from "@/components/svgs/CopySvg";
import { Link, useParams } from "react-router-dom";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";

const BlogCourseDetails = () => {
  const [showAllLessons, setShowAllLessons] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const id = useParams();

  // const details = data.find(item => item.id === id);

  const toggleLessons = () => {
    setShowAllLessons((prev) => !prev);
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };





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
        <div className="pt-6  pb-3">
          <p className="text-[#FFFFFF] font-normal text-sm leading-6">
            In real estate, time is everything. Between managing client
            relationships, scheduling showings, and tracking endless tasks,
            staying organized can feel like a juggling act. But there’s a tool
            that can make all of this easier-and that’s your Real Estate CRM.
            Whether you're just getting started with your CRM or you’ve been
            using it for a while, there are a few best practices that can truly
            unlock its full potential and take your business to the next level.
          </p>
          <p className="text-[#FFFFFF] font-normal text-sm leading-6 mt-5">
            Here are some simple tips for maximizing your CRM’s power and making
            it work for you, instead of the other way around.
          </p>
        </div>
        <div className="pt-6 pb-3">
          <h1 className="text-light  font-medium mt-5 section-title">
            Centralize Client Information
          </h1>
          <p className="text-[#FFFFFF] font-normal text-sm leading-6">
            Think about how often you search through emails, spreadsheets, and
            notepads to find a client’s contact information or preferences. Now,
            imagine a world where all that data is stored in one
            place—accessible at the click of a button. That’s the magic of a
            CRM.
          </p>
          <p className="text-[#FFFFFF] font-normal text-sm leading-6 mt-5">
            By centralizing your client data, you can keep track of contact
            details, communication history, property preferences, and more. When
            everything is in one place, you can deliver a more personalized
            service that builds stronger relationships with your clients. You’ll
            never have to waste time hunting down information again.
          </p>
        </div>

        <div className="relative rounded-2xl bg-transparent mt-5">
        
          <img
            className="rounded w-full aspect-[16/9] lg:max-h-[550px]"
            src={img}
            alt={"Course Thumbnail"}
          />

          {/* <div className="mt-5">
            <h1 className="mt-5 mb-10 text-light section-title">
              Lessons in this class
            </h1>

      
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogCourseDetails;

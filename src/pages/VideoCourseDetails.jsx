import { useState } from "react";
import ReactPlayer from "react-player";
import { FaArrowLeft, FaCalendarAlt, FaCaretDown } from "react-icons/fa";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";
import { IoTime } from "react-icons/io5";

const VideoCourseDetails = () => {
  const [showAllLessons, setShowAllLessons] = useState(false);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore((prev) => !prev);

  const lessons = [
    {
      id: 1,
      title: "1. Intro/Overview",
      duration: "0:54",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=0s",
    },
    {
      id: 2,
      title: "2. Installation & Setup",
      duration: "1:30",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=54s",
    },
    {
      id: 3,
      title: "3. useQuery()",
      duration: "2:36",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=144s",
    },
    {
      id: 4,
      title: "4. Why TanStack is Goated",
      duration: "1:26",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=300s",
    },
    {
      id: 5,
      title: "5. Loading, Errors, Refetching",
      duration: "3:56",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=386s",
    },
    {
      id: 6,
      title: "6. Query Options (Params)",
      duration: "3:22",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=622s",
    },
    {
      id: 7,
      title: "7. Conditional Querying",
      duration: "1:09",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=824s",
    },
    {
      id: 8,
      title: "8. Reusable Queries",
      duration: "2:24",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=893s",
    },
    {
      id: 9,
      title: "9. TypeScript Safety",
      duration: "3:02",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=1037s",
    },
    {
      id: 10,
      title: "10. useSuspenseQuery()",
      duration: "1:20",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=1219s",
    },
    {
      id: 11,
      title: "11. Suspense Component",
      duration: "2:36",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=1299s",
    },
    {
      id: 12,
      title: "12. Multiple Queries",
      duration: "3:56",
      url: "https://www.youtube.com/watch?v=mPaCnwpFvZY&t=1455s",
    },
  ];

  const toggleLessons = () => setShowAllLessons((prev) => !prev);

  const goToNextVideo = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const goToPreviousVideo = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };
  const courseDescription = `
  Learn how to create a powerful social media strategy tailored for real estate agents. 
  This course will cover platform selection, content creation, and leveraging social media 
  to attract and engage potential buyers. Learn how to create a powerful social media strategy 
  tailored for real estate agents. This course will cover platform selection, content creation, 
  and leveraging social media to attract and engage potential buyers.
`;
const totalLessons = lessons.length;

// Function to convert "mm:ss" to total seconds
const convertToSeconds = (time) => {
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + seconds;
};

// Calculate total duration in seconds
const totalDurationSeconds = lessons.reduce(
  (acc, lesson) => acc + convertToSeconds(lesson.duration),
  0
);

// Convert total duration back to "HH:MM:SS" format
const formatDuration = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return hrs > 0
    ? `${hrs}h ${mins}m`
    : `${mins}m ${secs}s`;
};

// Get formatted total duration
const totalDurationFormatted = formatDuration(totalDurationSeconds);

  return (
    <div className="my-container">
      <Link to={`${location.state?.from || "/my-classroom/courses"}`}>
        <div className="flex items-center gap-3 mt-5 text-white">
          <FaArrowLeft />
          <h1 className="text-white text-lg font-medium section-title">
            {lessons[currentLessonIndex].title}
          </h1>
        </div>
      </Link>

      <div className="relative rounded-2xl bg-transparent mt-5">
        <div className="rounded-xl overflow-hidden relative">
          <ReactPlayer
            url={lessons[currentLessonIndex].url}
            controls
            playing={true}
            width="100%"
            height="550px"
            className="rounded-xl"
          />

          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-5">
            <button
              onClick={goToPreviousVideo}
              disabled={currentLessonIndex === 0}
              className={`bg-black bg-opacity-50 p-3 rounded-full text-white transition ${
                currentLessonIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-opacity-80"
              }`}
            >
              <RiArrowLeftDoubleLine size={22} />
            </button>

            <button
              onClick={goToNextVideo}
              disabled={currentLessonIndex === lessons.length - 1}
              className={`bg-black bg-opacity-50 p-3 rounded-full text-white transition ${
                currentLessonIndex === lessons.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-opacity-80"
              }`}
            >
              <RiArrowRightDoubleLine size={22} />
            </button>
          </div>
        </div>

        <div className="mt-5">
  <div className="flex items-center justify-between p-4 md:p-5 lg:p-6 rounded-[16px] bg-gradient-to-b from-[#242424] to-[#024040] ">
    <div className="flex items-center gap-2 w-full text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
      <div className="flex justify-center items-center gap-2 border-r border-[#ccc] pr-2 w-1/2">
        <span>
          <FaCalendarAlt />
        </span>
        <span>{totalLessons} Lessons</span>
      </div>
      <div className="flex justify-center items-center gap-2 pl-2 w-1/2">
        <span>
          <IoTime />
        </span>
        <span>{totalDurationFormatted}</span>
      </div>
      <div className="flex justify-center items-center gap-2 border-l border-[#ccc] pr-2 w-1/2">
        <span>
          <IoTime />
        </span>
        <span>CRM Features</span>
      </div>
    </div>
  </div>
</div>


        <div className="mt-5">
          <h1 className="mt-5 mb-5 text-light section-title">Lessons in this class</h1>
          <div className="mb-6">
            {lessons
              .slice(0, showAllLessons ? lessons.length : 5)
              .map((lesson, index) => (
                <div
                  key={lesson.id}
                  className={`flex items-center justify-between gap-4 mb-4 border-b ${
                    index === currentLessonIndex
                      ? "text-[#009696] cursor-pointer"
                      : "text-light"
                  }`}
                  onClick={() => setCurrentLessonIndex(index)}
                >
                  <h3 className="text-sm font-bold pb-2.5">{lesson.title}</h3>
                  <p>{lesson.duration}</p>
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
  );
};

export default VideoCourseDetails;

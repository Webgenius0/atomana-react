import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import profileAvatar from "@/assets/images/profile.png";
import Notification from "@/components/Notification";
import MyTeamSvg from "@/components/svgs/MyTeamSvg";
import MyTeamSvgActive from "@/components/svgs/MyTeamSvgActive";
import MySystemsSvg from "@/components/svgs/MySystemsSvg";
import MyAISvg from "@/components/svgs/MyAISvg";
import MyAISvgActive from "@/components/svgs/MyAISvgActive";
import MyClassroomSvg from "@/components/svgs/MyClassroomSvg";
import MyClassroomSvgActive from "@/components/svgs/MyClassroomSvgActive";
import MyPrSvg from "@/components/svgs/MyPrSvg";
import MyPrSvgActive from "@/components/svgs/MyPrSvgActive";
import MySystemsSvgActive from "@/components/svgs/MySystemsSvgActive";

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification((prev) => !prev); // Toggle notification visibility
  };

  return (
    <header className="sticky top-0 left-0 bg-dark">
      <nav>
        <div className="border-b border-secondPrimary">
          <div className="my-container">
            <div className="flex items-center justify-between py-[17px]">
              {/* logo */}
              <Link to="/my-team" className="max-w-[80px] overflow-hidden">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </Link>

              {/* search */}
              <label className="flex items-center gap-2 bg-gradient-to-r from-secondPrimary to-[#1a1a1a] border border-primary rounded-full px-4 max-w-[625px] w-full focus-within:border-[#009696] focus-within:shadow-[0_0_3px] focus-within:shadow-[#009696]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M3.44737 9.3421C2.98421 9.3421 2.60526 9.72105 2.60526 10.1842C2.60526 10.6474 2.98421 11.0263 3.44737 11.0263C3.91053 11.0263 4.28947 10.6474 4.28947 10.1842C4.28947 9.72105 3.91053 9.3421 3.44737 9.3421ZM3.44737 12.7105C2.98421 12.7105 2.60526 13.0895 2.60526 13.5526C2.60526 14.0158 2.98421 14.3947 3.44737 14.3947C3.91053 14.3947 4.28947 14.0158 4.28947 13.5526C4.28947 13.0895 3.91053 12.7105 3.44737 12.7105ZM3.44737 5.97368C2.98421 5.97368 2.60526 6.35263 2.60526 6.81579C2.60526 7.27895 2.98421 7.65789 3.44737 7.65789C3.91053 7.65789 4.28947 7.27895 4.28947 6.81579C4.28947 6.35263 3.91053 5.97368 3.44737 5.97368ZM0.921053 6.39474C0.685263 6.39474 0.5 6.58 0.5 6.81579C0.5 7.05158 0.685263 7.23684 0.921053 7.23684C1.15684 7.23684 1.34211 7.05158 1.34211 6.81579C1.34211 6.58 1.15684 6.39474 0.921053 6.39474ZM3.44737 2.60526C2.98421 2.60526 2.60526 2.98421 2.60526 3.44737C2.60526 3.91053 2.98421 4.28947 3.44737 4.28947C3.91053 4.28947 4.28947 3.91053 4.28947 3.44737C4.28947 2.98421 3.91053 2.60526 3.44737 2.60526ZM16.0789 7.23684C16.3147 7.23684 16.5 7.05158 16.5 6.81579C16.5 6.58 16.3147 6.39474 16.0789 6.39474C15.8432 6.39474 15.6579 6.58 15.6579 6.81579C15.6579 7.05158 15.8432 7.23684 16.0789 7.23684ZM10.1842 4.28947C10.6474 4.28947 11.0263 3.91053 11.0263 3.44737C11.0263 2.98421 10.6474 2.60526 10.1842 2.60526C9.72105 2.60526 9.3421 2.98421 9.3421 3.44737C9.3421 3.91053 9.72105 4.28947 10.1842 4.28947ZM10.1842 1.34211C10.42 1.34211 10.6053 1.15684 10.6053 0.921053C10.6053 0.685263 10.42 0.5 10.1842 0.5C9.94842 0.5 9.76316 0.685263 9.76316 0.921053C9.76316 1.15684 9.94842 1.34211 10.1842 1.34211ZM0.921053 9.76316C0.685263 9.76316 0.5 9.94842 0.5 10.1842C0.5 10.42 0.685263 10.6053 0.921053 10.6053C1.15684 10.6053 1.34211 10.42 1.34211 10.1842C1.34211 9.94842 1.15684 9.76316 0.921053 9.76316ZM6.81579 15.6579C6.58 15.6579 6.39474 15.8432 6.39474 16.0789C6.39474 16.3147 6.58 16.5 6.81579 16.5C7.05158 16.5 7.23684 16.3147 7.23684 16.0789C7.23684 15.8432 7.05158 15.6579 6.81579 15.6579ZM6.81579 1.34211C7.05158 1.34211 7.23684 1.15684 7.23684 0.921053C7.23684 0.685263 7.05158 0.5 6.81579 0.5C6.58 0.5 6.39474 0.685263 6.39474 0.921053C6.39474 1.15684 6.58 1.34211 6.81579 1.34211ZM6.81579 4.28947C7.27895 4.28947 7.65789 3.91053 7.65789 3.44737C7.65789 2.98421 7.27895 2.60526 6.81579 2.60526C6.35263 2.60526 5.97368 2.98421 5.97368 3.44737C5.97368 3.91053 6.35263 4.28947 6.81579 4.28947ZM6.81579 8.92105C6.11684 8.92105 5.55263 9.48526 5.55263 10.1842C5.55263 10.8832 6.11684 11.4474 6.81579 11.4474C7.51474 11.4474 8.07895 10.8832 8.07895 10.1842C8.07895 9.48526 7.51474 8.92105 6.81579 8.92105ZM13.5526 9.3421C13.0895 9.3421 12.7105 9.72105 12.7105 10.1842C12.7105 10.6474 13.0895 11.0263 13.5526 11.0263C14.0158 11.0263 14.3947 10.6474 14.3947 10.1842C14.3947 9.72105 14.0158 9.3421 13.5526 9.3421ZM13.5526 12.7105C13.0895 12.7105 12.7105 13.0895 12.7105 13.5526C12.7105 14.0158 13.0895 14.3947 13.5526 14.3947C14.0158 14.3947 14.3947 14.0158 14.3947 13.5526C14.3947 13.0895 14.0158 12.7105 13.5526 12.7105ZM13.5526 5.97368C13.0895 5.97368 12.7105 6.35263 12.7105 6.81579C12.7105 7.27895 13.0895 7.65789 13.5526 7.65789C14.0158 7.65789 14.3947 7.27895 14.3947 6.81579C14.3947 6.35263 14.0158 5.97368 13.5526 5.97368ZM13.5526 2.60526C13.0895 2.60526 12.7105 2.98421 12.7105 3.44737C12.7105 3.91053 13.0895 4.28947 13.5526 4.28947C14.0158 4.28947 14.3947 3.91053 14.3947 3.44737C14.3947 2.98421 14.0158 2.60526 13.5526 2.60526ZM16.0789 9.76316C15.8432 9.76316 15.6579 9.94842 15.6579 10.1842C15.6579 10.42 15.8432 10.6053 16.0789 10.6053C16.3147 10.6053 16.5 10.42 16.5 10.1842C16.5 9.94842 16.3147 9.76316 16.0789 9.76316ZM10.1842 12.7105C9.72105 12.7105 9.3421 13.0895 9.3421 13.5526C9.3421 14.0158 9.72105 14.3947 10.1842 14.3947C10.6474 14.3947 11.0263 14.0158 11.0263 13.5526C11.0263 13.0895 10.6474 12.7105 10.1842 12.7105ZM10.1842 15.6579C9.94842 15.6579 9.76316 15.8432 9.76316 16.0789C9.76316 16.3147 9.94842 16.5 10.1842 16.5C10.42 16.5 10.6053 16.3147 10.6053 16.0789C10.6053 15.8432 10.42 15.6579 10.1842 15.6579ZM6.81579 5.55263C6.11684 5.55263 5.55263 6.11684 5.55263 6.81579C5.55263 7.51474 6.11684 8.07895 6.81579 8.07895C7.51474 8.07895 8.07895 7.51474 8.07895 6.81579C8.07895 6.11684 7.51474 5.55263 6.81579 5.55263ZM6.81579 12.7105C6.35263 12.7105 5.97368 13.0895 5.97368 13.5526C5.97368 14.0158 6.35263 14.3947 6.81579 14.3947C7.27895 14.3947 7.65789 14.0158 7.65789 13.5526C7.65789 13.0895 7.27895 12.7105 6.81579 12.7105ZM10.1842 8.92105C9.48526 8.92105 8.92105 9.48526 8.92105 10.1842C8.92105 10.8832 9.48526 11.4474 10.1842 11.4474C10.8832 11.4474 11.4474 10.8832 11.4474 10.1842C11.4474 9.48526 10.8832 8.92105 10.1842 8.92105ZM10.1842 5.55263C9.48526 5.55263 8.92105 6.11684 8.92105 6.81579C8.92105 7.51474 9.48526 8.07895 10.1842 8.07895C10.8832 8.07895 11.4474 7.51474 11.4474 6.81579C11.4474 6.11684 10.8832 5.55263 10.1842 5.55263Z"
                    fill="url(#paint0_linear_729_13019)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_729_13019"
                      x1="0.828205"
                      y1="8.24408"
                      x2="17.3615"
                      y2="8.24408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#024040" />
                      <stop offset="1" stopColor="#009696" />
                    </linearGradient>
                  </defs>
                </svg>
                <input
                  type="text"
                  className="w-full py-2.5 bg-inherit border-none outline-none text-secondary placeholder:text-secondary text-sm font-medium leading-[21px] tracking-[-0.14px]"
                  placeholder="Ask Maria about clients, properties, appointments, or anything else you need help with"
                />
              </label>
              <div className="flex items-center gap-5">
                <div
                  className="cursor-pointer relative"
                  onClick={handleNotificationClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.9998 23.1665C13.2832 23.1665 14.3332 22.1165 14.3332 20.8332H9.6665C9.6665 22.1165 10.7165 23.1665 11.9998 23.1665ZM18.9998 10.3332C18.9998 6.7515 17.0982 3.75317 13.7498 2.95984V2.1665C13.7498 1.19817 12.9682 0.416504 11.9998 0.416504C11.0315 0.416504 10.2498 1.19817 10.2498 2.1665V2.95984C6.91317 3.75317 4.99983 6.73984 4.99983 10.3332V16.1665L2.6665 18.4998V19.6665H21.3332V18.4998L18.9998 16.1665V10.3332ZM16.6665 17.3332H7.33316V10.3332C7.33316 7.43984 9.09483 5.08317 11.9998 5.08317C14.9048 5.08317 16.6665 7.43984 16.6665 10.3332V17.3332ZM6.84316 2.25984L5.17483 0.591504C2.37483 2.7265 0.531497 6.0165 0.368164 9.74984H2.7015C2.8765 6.65817 4.46316 3.9515 6.84316 2.25984ZM21.2982 9.74984H23.6315C23.4565 6.0165 21.6132 2.7265 18.8248 0.591504L17.1682 2.25984C19.5248 3.9515 21.1232 6.65817 21.2982 9.74984Z"
                      fill="white"
                    />
                  </svg>
                  <span className="absolute top-[-5px] right-[-5px] flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-gray-900 bg-teal-500 text-white text-[8px] font-medium flex-shrink-0">
                    13
                  </span>
                  {showNotification && <Notification />}
                </div>

                <Link
                  to="/profile"
                  className="w-[45px] h-[45px] rounded-full overflow-hidden"
                >
                  <img
                    src={profileAvatar}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-secondPrimary">
          <div className="my-container">
            <div className="flex items-center justify-between gap-4 py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <MyTeamSvgActive /> : <MyTeamSvg />}
                    <span>MyTeam</span>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/my-systems"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <MySystemsSvgActive /> : <MySystemsSvg />}
                    <span>MySystems</span>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/my-ai"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <MyAISvgActive /> : <MyAISvg />}
                    <span>MyAI</span>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/my-classroom"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <MyClassroomSvgActive /> : <MyClassroomSvg />}
                    <span>MyClassroom</span>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/my-pr"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <MyPrSvgActive /> : <MyPrSvg />}
                    <span> MyPR</span>
                  </>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

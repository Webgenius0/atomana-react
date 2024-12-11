import React from "react";

const Notification = () => {
  return (
    <div className="absolute top-10 right-0 bg-[#4a4a4a] w-[500px] rounded-xl opacity-0 invisible -translate-y-2.5 z-50 overflow-hidden transition-opacity duration-300 ease-in-out transform shadow-lg">
      <div className="flex justify-between items-center p-6 border-b border-secondPrimary">
        <h3 className="text-[#fff] text-2xl font-semibold tracking-tight m-0">
          Notification
        </h3>
        <button className="flex items-center justify-center gap-1 rounded bg-secondPrimary py-1 px-2 border-none text-[#ccc] text-xs font-semibold leading-[21px] tracking-[-0.12px] active:scale-95 duration-300 ease-linear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <g clipPath="url(#clip0_1160_20653)">
              <path
                d="M14.0316 8.125V3.75C14.0316 3.41848 13.8999 3.10054 13.6654 2.86612C13.431 2.6317 13.1131 2.5 12.7816 2.5H2.78156C2.45003 2.5 2.13209 2.6317 1.89767 2.86612C1.66325 3.10054 1.53156 3.41848 1.53156 3.75V11.25C1.53156 11.9375 2.09406 12.5 2.78156 12.5H7.78156"
                stroke="#CCCCCC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0316 4.375L8.42531 7.9375C8.23235 8.05839 8.00925 8.12251 7.78156 8.12251C7.55386 8.12251 7.33076 8.05839 7.13781 7.9375L1.53156 4.375"
                stroke="#CCCCCC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2816 11.875L11.5316 13.125L14.0316 10.625"
                stroke="#CCCCCC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1160_20653">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(0.281555)"
                />
              </clipPath>
            </defs>
          </svg>
          Mark all as read
        </button>
      </div>
      <div className="flex items-center p-6">
        <button className="tab">Inbox (2)</button>
        <button className="tab active">Team (8)</button>
      </div>

      <div className="h-[500px] overflow-y-auto flex flex-col">
        <div className="p-6 border-t border-secondPrimary">
          <div className="flex gap-1">
            <img
              src="./assets/images/user.png"
              className="w-10 h-10 rounded-full "
              alt="User Avatar"
            />
            <div className="flex flex-col items-start gap-[2px]">
              <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                Lindsey Sargo asked to edit OpenHouseBrochure
              </p>
              <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                1 h ago • Most Popular Templates
              </p>

              <div className="flex py-2.5 px-5 flex-col items-start gap-2.5 rounded-xl bg-[#5b5959] mt-5">
                <div className="flex items-center gap-2.5">
                  <div className="request-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M28.8334 28.3749V29.0833C28.8334 29.8347 28.5348 30.5554 28.0035 31.0867C27.4721 31.6181 26.7515 31.9166 26 31.9166H9.00002C8.24857 31.9166 7.5279 31.6181 6.99655 31.0867C6.4652 30.5554 6.16669 29.8347 6.16669 29.0833V6.41659C6.16669 5.66514 6.4652 4.94447 6.99655 4.41312C7.5279 3.88176 8.24857 3.58325 9.00002 3.58325H21.0417L26 8.54159"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.8333 26.25H13.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.595 14.3641C26.8713 14.0878 27.1993 13.8687 27.5602 13.7191C27.9212 13.5696 28.3081 13.4927 28.6988 13.4927C29.0895 13.4927 29.4763 13.5696 29.8373 13.7191C30.1983 13.8687 30.5263 14.0878 30.8025 14.3641C31.0788 14.6403 31.2979 14.9683 31.4475 15.3293C31.597 15.6902 31.6739 16.0771 31.6739 16.4678C31.6739 16.8585 31.597 17.2454 31.4475 17.6064C31.2979 17.9673 31.0788 18.2953 30.8025 18.5716L24.5125 24.8332L18.9167 26.2499L20.3192 20.6541L26.595 14.3641Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                      Lindsey Sargo asked to edit OpenHouseBrochure
                    </p>
                    <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                      1 h ago • Most Popular Templates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="request-btn decline">Decline</button>
                  <button className="request-btn approve">Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-secondPrimary">
          <div className="flex gap-1">
            <img
              src="./assets/images/user.png"
              className="w-10 h-10 rounded-full "
              alt="User Avatar"
            />
            <div className="flex flex-col items-start gap-[2px]">
              <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                Lindsey Sargo asked to edit OpenHouseBrochure
              </p>
              <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                1 h ago • Most Popular Templates
              </p>

              <div className="flex py-2.5 px-5 flex-col items-start gap-2.5 rounded-xl bg-[#5b5959] mt-5">
                <div className="flex items-center gap-2.5">
                  <div className="request-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M28.8334 28.3749V29.0833C28.8334 29.8347 28.5348 30.5554 28.0035 31.0867C27.4721 31.6181 26.7515 31.9166 26 31.9166H9.00002C8.24857 31.9166 7.5279 31.6181 6.99655 31.0867C6.4652 30.5554 6.16669 29.8347 6.16669 29.0833V6.41659C6.16669 5.66514 6.4652 4.94447 6.99655 4.41312C7.5279 3.88176 8.24857 3.58325 9.00002 3.58325H21.0417L26 8.54159"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.8333 26.25H13.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.595 14.3641C26.8713 14.0878 27.1993 13.8687 27.5602 13.7191C27.9212 13.5696 28.3081 13.4927 28.6988 13.4927C29.0895 13.4927 29.4763 13.5696 29.8373 13.7191C30.1983 13.8687 30.5263 14.0878 30.8025 14.3641C31.0788 14.6403 31.2979 14.9683 31.4475 15.3293C31.597 15.6902 31.6739 16.0771 31.6739 16.4678C31.6739 16.8585 31.597 17.2454 31.4475 17.6064C31.2979 17.9673 31.0788 18.2953 30.8025 18.5716L24.5125 24.8332L18.9167 26.2499L20.3192 20.6541L26.595 14.3641Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                      Lindsey Sargo asked to edit OpenHouseBrochure
                    </p>
                    <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                      1 h ago • Most Popular Templates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="request-btn decline">Decline</button>
                  <button className="request-btn approve">Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-secondPrimary">
          <div className="flex gap-1">
            <img
              src="./assets/images/user.png"
              className="w-10 h-10 rounded-full "
              alt="User Avatar"
            />
            <div className="flex flex-col items-start gap-[2px]">
              <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                Lindsey Sargo asked to edit OpenHouseBrochure
              </p>
              <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                1 h ago • Most Popular Templates
              </p>

              <div className="flex py-2.5 px-5 flex-col items-start gap-2.5 rounded-xl bg-[#5b5959] mt-5">
                <div className="flex items-center gap-2.5">
                  <div className="request-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M28.8334 28.3749V29.0833C28.8334 29.8347 28.5348 30.5554 28.0035 31.0867C27.4721 31.6181 26.7515 31.9166 26 31.9166H9.00002C8.24857 31.9166 7.5279 31.6181 6.99655 31.0867C6.4652 30.5554 6.16669 29.8347 6.16669 29.0833V6.41659C6.16669 5.66514 6.4652 4.94447 6.99655 4.41312C7.5279 3.88176 8.24857 3.58325 9.00002 3.58325H21.0417L26 8.54159"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.8333 26.25H13.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.595 14.3641C26.8713 14.0878 27.1993 13.8687 27.5602 13.7191C27.9212 13.5696 28.3081 13.4927 28.6988 13.4927C29.0895 13.4927 29.4763 13.5696 29.8373 13.7191C30.1983 13.8687 30.5263 14.0878 30.8025 14.3641C31.0788 14.6403 31.2979 14.9683 31.4475 15.3293C31.597 15.6902 31.6739 16.0771 31.6739 16.4678C31.6739 16.8585 31.597 17.2454 31.4475 17.6064C31.2979 17.9673 31.0788 18.2953 30.8025 18.5716L24.5125 24.8332L18.9167 26.2499L20.3192 20.6541L26.595 14.3641Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                      Lindsey Sargo asked to edit OpenHouseBrochure
                    </p>
                    <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                      1 h ago • Most Popular Templates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="request-btn decline">Decline</button>
                  <button className="request-btn approve">Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-secondPrimary">
          <div className="flex gap-1">
            <img
              src="./assets/images/user.png"
              className="w-10 h-10 rounded-full "
              alt="User Avatar"
            />
            <div className="flex flex-col items-start gap-[2px]">
              <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                Lindsey Sargo asked to edit OpenHouseBrochure
              </p>
              <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                1 h ago • Most Popular Templates
              </p>

              <div className="flex py-2.5 px-5 flex-col items-start gap-2.5 rounded-xl bg-[#5b5959] mt-5">
                <div className="flex items-center gap-2.5">
                  <div className="request-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M28.8334 28.3749V29.0833C28.8334 29.8347 28.5348 30.5554 28.0035 31.0867C27.4721 31.6181 26.7515 31.9166 26 31.9166H9.00002C8.24857 31.9166 7.5279 31.6181 6.99655 31.0867C6.4652 30.5554 6.16669 29.8347 6.16669 29.0833V6.41659C6.16669 5.66514 6.4652 4.94447 6.99655 4.41312C7.5279 3.88176 8.24857 3.58325 9.00002 3.58325H21.0417L26 8.54159"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.8333 26.25H13.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.595 14.3641C26.8713 14.0878 27.1993 13.8687 27.5602 13.7191C27.9212 13.5696 28.3081 13.4927 28.6988 13.4927C29.0895 13.4927 29.4763 13.5696 29.8373 13.7191C30.1983 13.8687 30.5263 14.0878 30.8025 14.3641C31.0788 14.6403 31.2979 14.9683 31.4475 15.3293C31.597 15.6902 31.6739 16.0771 31.6739 16.4678C31.6739 16.8585 31.597 17.2454 31.4475 17.6064C31.2979 17.9673 31.0788 18.2953 30.8025 18.5716L24.5125 24.8332L18.9167 26.2499L20.3192 20.6541L26.595 14.3641Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                      Lindsey Sargo asked to edit OpenHouseBrochure
                    </p>
                    <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                      1 h ago • Most Popular Templates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="request-btn decline">Decline</button>
                  <button className="request-btn approve">Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-secondPrimary">
          <div className="flex gap-1">
            <img
              src="./assets/images/user.png"
              className="w-10 h-10 rounded-full "
              alt="User Avatar"
            />
            <div className="flex flex-col items-start gap-[2px]">
              <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                Lindsey Sargo asked to edit OpenHouseBrochure
              </p>
              <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                1 h ago • Most Popular Templates
              </p>

              <div className="flex py-2.5 px-5 flex-col items-start gap-2.5 rounded-xl bg-[#5b5959] mt-5">
                <div className="flex items-center gap-2.5">
                  <div className="request-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M28.8334 28.3749V29.0833C28.8334 29.8347 28.5348 30.5554 28.0035 31.0867C27.4721 31.6181 26.7515 31.9166 26 31.9166H9.00002C8.24857 31.9166 7.5279 31.6181 6.99655 31.0867C6.4652 30.5554 6.16669 29.8347 6.16669 29.0833V6.41659C6.16669 5.66514 6.4652 4.94447 6.99655 4.41312C7.5279 3.88176 8.24857 3.58325 9.00002 3.58325H21.0417L26 8.54159"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.8333 26.25H13.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.595 14.3641C26.8713 14.0878 27.1993 13.8687 27.5602 13.7191C27.9212 13.5696 28.3081 13.4927 28.6988 13.4927C29.0895 13.4927 29.4763 13.5696 29.8373 13.7191C30.1983 13.8687 30.5263 14.0878 30.8025 14.3641C31.0788 14.6403 31.2979 14.9683 31.4475 15.3293C31.597 15.6902 31.6739 16.0771 31.6739 16.4678C31.6739 16.8585 31.597 17.2454 31.4475 17.6064C31.2979 17.9673 31.0788 18.2953 30.8025 18.5716L24.5125 24.8332L18.9167 26.2499L20.3192 20.6541L26.595 14.3641Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <p className="text-light text-base font-medium leading-[18px] tracking-[-0.16px]">
                      Lindsey Sargo asked to edit OpenHouseBrochure
                    </p>
                    <p className="text-[#ccc] text-xs font-medium leading-[18px] tracking-[-0.12px]">
                      1 h ago • Most Popular Templates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="request-btn decline">Decline</button>
                  <button className="request-btn approve">Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

import PlusSvg from "@/components/svgs/PlusSvg";
import ProfileAvatar from "@/assets/images/bot.png";

const MyPR = () => {
  return (
    <section className="h-[calc(100vh-150px)] overflow-hidden">
      <div class="flex w-full h-full items-start">
        <aside
          class="w-[300px] h-full bg-[#1c1c1c] py-[25px] px-[50px] duration-300 ease-in-out relative border-r border-secondPrimary"
          id="sidebar"
        >
          <div class="sidebar-content">
            <div class="flex items-center justify-between">
              <h2 className="text-light text-sm font-medium leading-[21px] tracking-[-0.14px] flex items-center gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_731_21407)">
                    <path
                      d="M1.66663 16.6668H18.3333V13.3335H1.66663V16.6668ZM3.33329 14.1668H4.99996V15.8335H3.33329V14.1668ZM1.66663 3.3335V6.66683H18.3333V3.3335H1.66663ZM4.99996 5.8335H3.33329V4.16683H4.99996V5.8335ZM1.66663 11.6668H18.3333V8.3335H1.66663V11.6668ZM3.33329 9.16683H4.99996V10.8335H3.33329V9.16683Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_731_21407">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Chat History
              </h2>

              <button class="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]">
                <PlusSvg />
              </button>
            </div>

            <div class="flex flex-col gap-[30px] mt-[25px]">
              <div class="">
                <h3 className="text-xs font-bold tracking-[-0.24px] mb-2.5 text-[#ffffff80]">
                  Past Week
                </h3>
                <ul class="flex flex-col gap-2.5">
                  <li className="text-light text-sm tracking-[-0.28px] cursor-pointer duration-300">
                    P&L Summary Request
                  </li>
                  <li className="text-light text-sm tracking-[-0.28px] cursor-pointer duration-300">
                    Open House Report: 123 Main Street
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>

        <main class="flex-1 flex flex-col justify-between h-full">
          <div class="px-5 py-[25px]">
            <div class="flex items-center gap-[5px]">
              <img src={ProfileAvatar} alt="profile" />
              <h2 className="text-light text-sm tracking-[-0.28px]">
                Hi, I'm the MyOps MyPR. What can I help you with?
              </h2>
            </div>
          </div>

          <div class="flex items-center justify-center gap-2.5">
            <div class="flex max-w-[200px] w-full py-[15px] px-[25px] flex-col items-start gap-[25px] rounded-[10px] border border-[#024040] bg-[#242424] duration-300 cursor-pointer hover:shadow-[2px_2px_6px] hover:shadow-[#036161]">
              <div class="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.69629 14.0439C6.74382 14.0439 5.84603 13.8617 5.00293 13.4971C4.16439 13.1325 3.42383 12.6289 2.78125 11.9863C2.13867 11.3438 1.63509 10.6032 1.27051 9.76465C0.905924 8.92155 0.723633 8.02376 0.723633 7.07129C0.723633 6.11882 0.905924 5.22331 1.27051 4.38477C1.63509 3.54167 2.13639 2.79883 2.77441 2.15625C3.41699 1.51367 4.15755 1.01009 4.99609 0.645508C5.83919 0.280924 6.73698 0.0986328 7.68945 0.0986328C8.64193 0.0986328 9.53971 0.280924 10.3828 0.645508C11.2259 1.01009 11.9688 1.51367 12.6113 2.15625C13.2539 2.79883 13.7575 3.54167 14.1221 4.38477C14.4867 5.22331 14.6689 6.11882 14.6689 7.07129C14.6689 8.02376 14.4867 8.92155 14.1221 9.76465C13.7575 10.6032 13.2539 11.3438 12.6113 11.9863C11.9688 12.6289 11.2259 13.1325 10.3828 13.4971C9.54427 13.8617 8.64876 14.0439 7.69629 14.0439ZM5.44043 10.127L10.0547 5.51953L9.2207 4.68555L4.61328 9.28613L4.2168 10.2227C4.17578 10.3092 4.18717 10.3822 4.25098 10.4414C4.31478 10.5007 4.38542 10.5166 4.46289 10.4893L5.44043 10.127ZM10.4785 5.10254L10.998 4.58984C11.112 4.47135 11.1712 4.35059 11.1758 4.22754C11.1849 4.09993 11.1348 3.98372 11.0254 3.87891L10.8682 3.71484C10.7588 3.61003 10.6426 3.56217 10.5195 3.57129C10.3965 3.5804 10.278 3.63965 10.1641 3.74902L9.64453 4.26172L10.4785 5.10254Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="text-light text-sm tracking-[-0.28px]">
                Summarize my My Schedule for the day
              </p>
            </div>
          </div>

          <div class="flex items-center border-t border-secondPrimary px-[50px] py-[25px]">
            <label class="rounded-[10px] bg-[#242424] w-full flex items-center overflow-hidden pr-2.5 pl-5">
              <input
                type="text"
                placeholder="Message Maria"
                class="w-full py-4 border-none focus:outline-none text-[#b1b1b1] text-sm leading-5 tracking-[-0.6px] bg-inherit placeholder:text-[#555]"
                id="chatInput"
              />
              <button class="w-8 h-8 rounded-full flex items-center justify-center border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_331_19746)">
                    <path
                      d="M2.67334 4.02L7.68001 6.16667L2.66668 5.5L2.67334 4.02ZM7.67334 9.83333L2.66668 11.98V10.5L7.67334 9.83333ZM1.34001 2L1.33334 6.66667L11.3333 8L1.33334 9.33333L1.34001 14L15.3333 8L1.34001 2Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_331_19746">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </label>
          </div>
        </main>
      </div>
    </section>
  );
};

export default MyPR;

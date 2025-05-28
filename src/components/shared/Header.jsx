import profileAvatar from '@/assets/images/avatar-placeholder.gif';
import logo from '@/assets/images/logo.png';
import Notification from '@/components/Notification';
import MyAISvg from '@/components/svgs/MyAISvg';
import MyAISvgActive from '@/components/svgs/MyAISvgActive';
import MyClassroomSvg from '@/components/svgs/MyClassroomSvg';
import MyClassroomSvgActive from '@/components/svgs/MyClassroomSvgActive';
import MyPrSvg from '@/components/svgs/MyPrSvg';
import MyPrSvgActive from '@/components/svgs/MyPrSvgActive';
import MySystemsSvg from '@/components/svgs/MySystemsSvg';
import MySystemsSvgActive from '@/components/svgs/MySystemsSvgActive';
import MyTeamSvg from '@/components/svgs/MyTeamSvg';
import MyTeamSvgActive from '@/components/svgs/MyTeamSvgActive';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import SearchBarModal from '../SearchBarModal';
import LogoSquareSvg from '../svgs/LogoSquareSvg';
import SearchWhiteSvg from '../svgs/SearchWhiteSvg';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Prevent layout shift by maintaining scrollbar space
    document.body.style.paddingRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset paddingRight when modal closes
    document.body.style.paddingRight = '';
  };

  const handleNotificationClick = () => {
    setShowNotification((prev) => !prev);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const handleNavigation = () => {
    setIsModalOpen(false);
    navigate('/my-ai', { state: { prompt: searchText } });
    setSearchText('');
    searchRef.current.blur();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsModalOpen(true);
        searchRef.current.focus();
      }

      if (event.key.toLowerCase() === 'escape') {
        setIsModalOpen(false);
      }

      if (
        event.key.toLowerCase() === 'enter' &&
        !!searchText.trim() &&
        isModalOpen
      ) {
        handleNavigation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchText]);

  return (
    <header className={`sticky top-0 left-0 bg-dark z-50`}>
      <nav>
        <div
          className={`border-b border-secondPrimary ${
            location.pathname === '/my-ai' || location.pathname === '/my-pr'
              ? 'hidden md:block'
              : ''
          }`}
        >
          <div className="my-container">
            <div className="flex items-center justify-between py-[17px] gap-3">
              {/* logo */}
              <Link to="/" className="max-w-[80px] overflow-hidden">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </Link>
              {/* search */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('clicked');
                  handleNavigation();
                }}
                onClick={handleOpenModal}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-secondPrimary to-[#1a1a1a] border border-primary rounded-full px-4 max-w-[625px] w-full focus-within:border-[#009696] focus-within:shadow-[0_0_3px] focus-within:shadow-[#009696]"
              >
                <LogoSquareSvg />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full py-2.5 bg-inherit border-none outline-none text-secondary placeholder:text-secondary text-sm font-medium leading-[21px] tracking-[-0.14px]"
                  placeholder="Ask Maria about clients, properties, appointments, or anything else you need help with"
                />
              </form>
              {isModalOpen && (
                <SearchBarModal
                  searchText={searchText}
                  setSearchText={setSearchText}
                  onClose={handleCloseModal}
                />
              )}

              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <label className="flex items-center gap-2 bg-gradient-to-r from-secondPrimary to-[#1a1a1a] border border-primary rounded-full px-4 max-w-[625px] w-full focus-within:border-[#009696] focus-within:shadow-[0_0_3px] focus-within:shadow-[#009696]">
                  <input
                    type="text"
                    className="w-full py-2.5 bg-inherit border-none outline-none text-secondary placeholder:text-secondary text-xs sm:text-sm font-medium leading-[21px] tracking-[-0.14px]"
                    placeholder="Ask Maria about clients, properties, appointments, or anything else you need help with"
                  />
                </label>
              </Modal>

              <div className="flex items-center gap-5">
                <button
                  onClick={handleOpenModal}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-secondPrimary bg-gradient-to-r from-secondPrimary to-[#1a1a1a] duration-300 active:scale-95 sm:hidden"
                >
                  <SearchWhiteSvg />
                </button>

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
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      d="M11.9998 23.1665C13.2832 23.1665 14.3332 22.1165 14.3332 20.8332H9.6665C9.6665 22.1165 10.7165 23.1665 11.9998 23.1665ZM18.9998 10.3332C18.9998 6.7515 17.0982 3.75317 13.7498 2.95984V2.1665C13.7498 1.19817 12.9682 0.416504 11.9998 0.416504C11.0315 0.416504 10.2498 1.19817 10.2498 2.1665V2.95984C6.91317 3.75317 4.99983 6.73984 4.99983 10.3332V16.1665L2.6665 18.4998V19.6665H21.3332V18.4998L18.9998 16.1665V10.3332ZM16.6665 17.3332H7.33316V10.3332C7.33316 7.43984 9.09483 5.08317 11.9998 5.08317C14.9048 5.08317 16.6665 7.43984 16.6665 10.3332V17.3332ZM6.84316 2.25984L5.17483 0.591504C2.37483 2.7265 0.531497 6.0165 0.368164 9.74984H2.7015C2.8765 6.65817 4.46316 3.9515 6.84316 2.25984ZM21.2982 9.74984H23.6315C23.4565 6.0165 21.6132 2.7265 18.8248 0.591504L17.1682 2.25984C19.5248 3.9515 21.1232 6.65817 21.2982 9.74984Z"
                      fill="white"
                    />
                  </svg>
                  <span className="absolute top-[-5px] right-[-5px] flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-gray-900 bg-teal-500 text-white text-[8px] font-medium flex-shrink-0">
                    13
                  </span>
                  {showNotification && (
                    <Notification onClose={closeNotification} />
                  )}
                </div>

                <Link
                  to="/profile"
                  className="w-[38px] md:w-[45px] h-[38px] md:h-[45px] rounded-full overflow-hidden"
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

        <div className="bg-dark border-t md:border-t-0 md:border-b border-secondPrimary fixed md:static bottom-0 left-0 w-full">
          <div className="my-container">
            <div className="flex items-center justify-between md:gap-4 py-2.5 md:py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item'
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
                  isActive ? 'nav-item active' : 'nav-item'
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
                  isActive ? 'nav-item active' : 'nav-item'
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
                  isActive ? 'nav-item active' : 'nav-item'
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
                  isActive ? 'nav-item active' : 'nav-item'
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

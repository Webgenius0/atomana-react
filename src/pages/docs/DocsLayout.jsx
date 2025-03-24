import logo from '@/assets/images/my-ai-logo.png';
import CrossSvg from '@/components/svgs/CrossSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import SearchGraySvg from '@/components/svgs/SearchGraySvg';
import SettingSvg from '@/components/svgs/SettingSvg';
import { useGetNotes } from '@/hooks/docs.hook';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { stripHtml } from 'string-strip-html';

const DocsLayout = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [searchMember, setSearchMember] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [activeTab, setActiveTab] = useState('notes');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  // setActiveTab based on the location

  useEffect(() => {
    if (pathname === '/my-systems/team/docs/shared-notes') {
      setActiveTab('notes');
    } else if (pathname === '/my-systems/team/docs/password-list') {
      setActiveTab('passwords');
    }
  }, [pathname]);

  const handleSearch = (e) => {
    setSearchMember(e.target.value);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const { notes } = useGetNotes();
  console.log({ notes });

  const dropdownData = {
    notes: [
      {
        title: 'Client Interactions',
        items: [
          {
            header: 'Client Follow-up - Sarah Lopez',
            time: '4:59pm',
            description: 'Project Kickoff',
          },
          {
            header: 'Initial Consultation - Michael Tran',
            time: '3:58pm',
            description: 'Budget Planning',
          },
        ],
      },
      {
        title: 'Property Showings',
        items: [
          {
            header: 'Weekly Standup',
            time: '10:00am',
            description: 'Discuss sprint progress',
          },
          {
            header: 'Project Review - Alpha Team',
            time: '1:30pm',
            description: 'Review milestones',
          },
        ],
      },
    ],
    passwords: [
      {
        title: 'Email Accounts',
        items: [
          {
            header: 'Gmail - john.doe@gmail.com',
            time: 'Last updated: 01/01/25',
            description: '********',
            website: 'www.gmail.com',
            username: 'john.doe',
            password: '********',
            email: 'john.doe@gmail.com',
            notes: 'Use for work-related communication.',
          },
          {
            header: 'Outlook - john.doe@outlook.com',
            time: 'Last updated: 12/15/24',
            description: '********',
            website: 'www.outlook.com',
            username: 'john.doe',
            password: '********',
            email: 'john.doe@outlook.com',
            notes: 'Personal email account.',
          },
        ],
      },
      {
        title: 'Social Media',
        items: [
          {
            header: 'Twitter - @johndoe',
            time: 'Last updated: 11/20/24',
            description: '********',
            website: 'www.twitter.com',
            username: '@johndoe',
            password: '********',
            email: 'johndoe@twitter.com',
            notes: 'For social updates and engagement.',
          },
          {
            header: 'Instagram - @johndoe',
            time: 'Last updated: 10/05/24',
            description: '********',
            website: 'www.instagram.com',
            username: '@johndoe',
            password: '********',
            email: 'johndoe@instagram.com',
            notes: 'Instagram account for photography.',
          },
        ],
      },
    ],
  };

  return (
    <section>
      <div className="p-3 sm:p-4 md:hidden bg-dark border-b border-secondPrimary sticky top-0 left-0">
        <div className="flex items-center gap-1 justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-8 h-8 rounded-full lg:w-10 lg:h-10"
              />
            </Link>
            <span className="text-lg sm:text-xl text-light tracking-[-0.6px]">
              MyOps AI
            </span>
          </div>

          <button
            onClick={() => setHideSidebar(!hideSidebar)}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center border border-secondPrimary bg-gradient-to-r from-secondPrimary to-[#1a1a1a] duration-300 active:scale-95"
          >
            <CrossSvg />
          </button>
        </div>
      </div>

      <div className="h-[calc(100vh-142px)] sm:h-[calc(100vh-150px)] overflow-hidden">
        <div className="flex w-full h-full items-start">
          {/* Sidebar */}
          <aside
            className={`fixed top-0 ${
              hideSidebar ? '-left-full' : 'left-0'
            } duration-500 w-[300px] md:w-[250px] lg:w-[500px] h-full bg-[#1c1c1c] py-4 lg:py-[25px] px-6 lg:px-[50px] ease-in-out md:relative md:top-auto md:left-auto border-r border-secondPrimary z-[1000]`}
          >
            <div className="sidebar-content">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <button
                    onClick={() =>
                      navigate('/my-systems/team/docs/shared-notes')
                    }
                    className={`text-sm font-medium px-4 py-2 rounded-md ${
                      activeTab === 'notes'
                        ? 'bg-secondPrimary text-white'
                        : 'text-light'
                    }`}
                  >
                    Shared Notes
                  </button>
                  <button
                    onClick={() =>
                      navigate('/my-systems/team/docs/password-list')
                    }
                    className={`text-sm font-medium px-4 py-2 rounded-md ${
                      activeTab === 'passwords'
                        ? 'bg-secondPrimary text-white'
                        : 'text-light'
                    }`}
                  >
                    Password List
                  </button>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]">
                  <SettingSvg />
                </button>
              </div>

              {/* Search Input */}
              <label className="flex items-center gap-2.5 px-4 rounded-full border border-secondPrimary bg-gradient-to-r from-secondPrimary to-[#1a1a1a] mt-5 max-w-[670px] w-full">
                <SearchGraySvg />
                <input
                  type="text"
                  placeholder="Search by user"
                  className="placeholder:text-secondary text-light text-xs font-medium leading-[21px] tracking-[-0.12px] bg-inherit py-2.5 focus:none outline-none w-full"
                  value={searchMember}
                  onChange={handleSearch}
                />
              </label>

              {/* Create New Note */}
              <Link
                to={`/my-systems/team/docs/shared-notes/${
                  activeTab === 'notes' ? 'create-note' : 'create-password'
                }`}
                className="flex items-center gap-[30px] mt-[25px]"
              >
                <span className="text-xs font-bold tracking-[-0.24px] text-[#ffffff80]">
                  {activeTab === 'notes'
                    ? 'Create new note'
                    : 'Add new password'}
                </span>
                <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]">
                  <PlusSvg />
                </button>
              </Link>

              <div className="mt-6">
                {notes?.map((item) => {
                  const notes = item?.notes
                    ? DOMPurify.sanitize(stripHtml(item?.notes).result)
                    : '';

                  console.log({ notes });

                  return (
                    <Link
                      key={item?.slug}
                      to={`/my-systems/team/docs/shared-notes/${item.slug}`}
                      className="block p-4 border-b border-secondPrimary cursor-pointer hover:bg-[#2c2c2c] transition"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs text-[#ffffff80] font-semibold">
                          {item?.title}
                        </h4>
                        <p className="text-white text-xs">
                          {format(item?.updated_at, 'p')}
                        </p>
                      </div>
                      <p
                        className="text-sm !text-light mt-1"
                        dangerouslySetInnerHTML={{
                          __html:
                            notes?.length > 100
                              ? `${notes.slice(0, 100)}...`
                              : notes,
                        }}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Overlay */}
          {!hideSidebar && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-[999] md:hidden"
              onClick={() => setHideSidebar(true)}
            ></div>
          )}
          <main className="flex-1 flex flex-col items-center justify-start min-h-screen bg-[#1c1c1c]">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
};

export default DocsLayout;

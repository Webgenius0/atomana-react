import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/my-ai-logo.png";
import CrossSvg from "@/components/svgs/CrossSvg";
import DocumentSvg from "@/components/svgs/DocumentSvg";
import PlusSvg from "@/components/svgs/PlusSvg";
import SearchGraySvg from "@/components/svgs/SearchGraySvg";
import SettingSvg from "@/components/svgs/SettingSvg";
import { FiFolder, FiChevronDown, FiChevronUp } from "react-icons/fi";

const SharedNote = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [searchMember, setSearchMember] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSearch = (e) => {
    setSearchMember(e.target.value);
  };

  const [dropdownState, setDropdownState] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle function to open/close dropdowns based on index
  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "Client Interactions",
      items: [
        {
          header: "Client Follow-up - Sarah Lopez",
          time: "4:59pm",
          description: "Project Kickoff",
        },
        {
          header: "Initial Consultation - Michael Tran",
          time: "3:58pm",
          description: "Budget Planning",
        },
      ],
    },
    {
      title: "Property Showings",
      items: [
        {
          header: "Weekly Standup",
          time: "10:00am",
          description: "Discuss sprint progress",
        },
        {
          header: "Project Review - Alpha Team",
          time: "1:30pm",
          description: "Review milestones",
        },
      ],
    },
    {
      title: "Marketing & Promo",
      items: [
        {
          header: "Social Media Campaign",
          time: "11:15am",
          description: "Launch planning",
        },
        {
          header: "SEO Audit Review",
          time: "2:45pm",
          description: "Optimize website",
        },
      ],
    },
    {
      title: "Team Meetings Jan",
      items: [
        {
          header: "Quarterly Report",
          time: "9:00am",
          description: "Analyze revenue",
        },
        {
          header: "Budget Allocation",
          time: "4:00pm",
          description: "Set new budget limits",
        },
      ],
    },
  ];

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
              hideSidebar ? "-left-full" : "left-0"
            } duration-500 w-[300px] md:w-[250px] lg:w-[500px] h-full bg-[#1c1c1c] py-4 lg:py-[25px] px-6 lg:px-[50px] ease-in-out md:relative md:top-auto md:left-auto border-r border-secondPrimary z-[1000]`}
          >
            <div className="sidebar-content">
              <div className="flex items-center justify-between">
                <h2 className="text-light text-sm font-medium leading-[21px] tracking-[-0.14px] flex items-center gap-[5px]">
                  Shared Notes
                </h2>
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
              <div className="flex items-center gap-[30px] mt-[25px]">
                <h3 className="text-xs font-bold tracking-[-0.24px] text-[#ffffff80]">
                  Create new note
                </h3>
                <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]">
                  <PlusSvg />
                </button>
              </div>

              <div className="mt-6">
                {dropdownData.map((category, index) => {
                  const contentRef = useRef(null);

                  return (
                    <div key={index} className="mb-4">
                      {/* Dropdown Header */}
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between w-full text-light text-sm font-medium py-2 px-4 rounded-md border-b border-secondPrimary transition"
                      >
                        <div className="flex items-center gap-2">
                          {activeDropdown === index ? (
                            <FiChevronUp className="w-4 h-4 text-secondary" />
                          ) : (
                            <FiChevronDown className="w-4 h-4 text-secondary" />
                          )}
                          <FiFolder className="w-5 h-5 text-secondary" />
                          <span>{category.title}</span>
                        </div>
                      </button>

                      <div
                        ref={contentRef}
                        style={{
                          maxHeight:
                            activeDropdown === index
                              ? `${contentRef.current.scrollHeight}px`
                              : "0px",
                          opacity: activeDropdown === index ? 1 : 0,
                        }}
                        className="overflow-hidden transition-all duration-500 ease-in-out  border-b border-secondPrimary rounded-md"
                      >
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="p-4 border-b border-secondPrimary cursor-pointer hover:bg-[#2c2c2c] transition"
                            onClick={() => setSelectedNote(item)}
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs text-[#ffffff80] font-semibold">
                                {item.header}
                              </h4>
                              <p className="text-white text-xs">{item.time}</p>
                            </div>
                            <p className="text-sm text-light mt-1">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 border-b border-secondPrimary rounded-md  divide-y divide-secondPrimary">
                <div className="p-4">
                  <div>
                    <div className="flex items-center justify-between">
                      {" "}
                      <h4 className="text-xs text-white font-semibold">
                        Home Inspection
                      </h4>
                      <p className="text-white text-xs">01/23/25</p>
                    </div>
                    <p className="text-sm text-light mt-1">
                      New vendor added for home inspections. Bright Home
                      Inspections offers competitive pricing and fast report
                      turnar
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div>
                    <div className="flex items-center justify-between">
                      {" "}
                      <h4 className="text-xs text-white font-semibold">
                        Initial Consultation - Michael Tran
                      </h4>
                      <p className="text-white text-xs">3:58pm</p>
                    </div>
                    <p className="text-sm text-light mt-1">Project Kickoff</p>
                  </div>
                </div>
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

          <main className="flex-1 flex items-center justify-center min-h-screen bg-[#1c1c1c]">
            <div className="px-5 py-[25px] overflow-y-auto scrollbar-none text-center">
              {selectedNote ? (
                <div className="flex flex-col items-start gap-4 text-left  p-6 rounded-lg  max-w-xl mx-auto ">
                  <h2 className="text-xl font-bold text-white">
                    {selectedNote.header}
                  </h2>
                  <p className="text-sm text-[#ffffff80]">
                    Time: {selectedNote.time}
                  </p>
                  <p className="text-sm text-light">
                    {selectedNote.description}
                  </p>
                  <button
                    onClick={() => setSelectedNote(null)} // Reset selected note
                    className="mt-4 px-4 py-2 bg-secondPrimary text-white rounded-md hover:bg-opacity-80 transition"
                  >
                    Back to Notes
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <button className="w-12 h-12 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#1d9aaa] shadow-[0px_0px_0px_1px_#000]">
                    <DocumentSvg />
                  </button>
                  <h2 className="font-bold text-lg tracking-[-0.24px] text-[#ffffff80]">
                    Select a note or create a new note
                  </h2>
                  <p className="text-sm text-[#ffffff80] max-w-lg">
                    Select a note and pick up right where you left off or create
                    a new note.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default SharedNote;

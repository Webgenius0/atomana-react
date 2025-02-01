import ProfileAvatar from '@/assets/images/bot.png';
import logo from '@/assets/images/my-ai-logo.png';
import CrossSvg from '@/components/svgs/CrossSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import TextEffect from '@/components/TextEffect';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyAI = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [queriesData, setQueriesData] = useState([]);
  const [chatHistories, setChatHistories] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch the data from the JSON file
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get('queries.json');
        const initialChat = {
          id: 1,
          title: 'Welcome Chat',
          messages: [
            {
              sender: 'bot',
              message: "Hi, I'm Maria. How can I assist you today?",
            },
          ],
        };
        setQueriesData(response.data);
        setChatHistories([initialChat]);
        setActiveChatId(1);
      } catch (error) {
        console.error('Error fetching chat data', error);
      }
    };

    fetchQueries();
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    // Send user message
    setChatHistories((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              messages: [...chat.messages, { sender: 'user', message }],
            }
          : chat
      )
    );

    // Trigger loading and simulate bot response after a delay
    setLoading(true);
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setChatHistories((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  { sender: 'bot', message: botResponse },
                ],
              }
            : chat
        )
      );
      setLoading(false);
    }, 1000);

    setMessage(''); // Clear the input field
  };

  const getBotResponse = (userQuery) => {
    // Check if the user query matches a predefined question
    const matchedQuery = queriesData.find((query) =>
      userQuery.toLowerCase().includes(query.question.toLowerCase())
    );

    return matchedQuery
      ? matchedQuery.answer
      : "Sorry, I didn't understand that.";
  };

  const handleNewChat = () => {
    const newChat = {
      id: chatHistories.length + 1,
      title: `New Chat ${chatHistories.length + 1}`,
      messages: [{ sender: 'bot', message: 'Hi, how can I assist you today?' }],
    };
    setChatHistories((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const activeChat = chatHistories.find((chat) => chat.id === activeChatId);
  useEffect(() => {
    if (!hideSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // reset body overflow on unmount
    return () => (document.body.style.overflow = 'auto');
  }, [hideSidebar]);

  return (
    <section>
      <div className="p-3 sm:p-4 md:hidden bg-dark border-b border-secondPrimary sticky top-0 left-0">
        <div className="flex items-center gap-1 justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 rounded-full lg:w-10 lg:h-10"
            />
            <span className="text-lg sm:text-xl text-light tracking-[-0.6px]">
              MyOps AI
            </span>
          </Link>

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
            } duration-500 w-[300px] md:w-[250px] lg:w-[300px] h-full bg-[#1c1c1c] py-4 lg:py-[25px] px-6 lg:px-[50px] ease-in-out md:relative md:top-auto md:left-auto border-r border-secondPrimary z-[1000]`}
          >
            <div className="sidebar-content">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-light text-sm font-medium leading-[21px] tracking-[-0.14px] flex items-center gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M1.66663 16.6668H18.3333V13.3335H1.66663V16.6668ZM3.33329 14.1668H4.99996V15.8335H3.33329V14.1668ZM1.66663 3.3335V6.66683H18.3333V3.3335H1.66663ZM4.99996 5.8335H3.33329V4.16683H4.99996V5.8335ZM1.66663 11.6668H18.3333V8.3335H1.66663V11.6668ZM3.33329 9.16683H4.99996V10.8335H3.33329V9.16683Z"
                      fill="white"
                    />
                  </svg>
                  Chat History
                </h2>
                <button
                  onClick={handleNewChat}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]"
                >
                  <PlusSvg />
                </button>
              </div>
              <div className="flex flex-col gap-[30px] mt-[25px]">
                <div>
                  <h3 className="text-xs font-bold tracking-[-0.24px] mb-2.5 text-[#ffffff80]">
                    All Chats
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {chatHistories.map((chat) => (
                      <li
                        key={chat.id}
                        onClick={() => setActiveChatId(chat.id)}
                        className={`text-light text-sm tracking-[-0.28px] cursor-pointer duration-300 ${
                          activeChatId === chat.id ? 'font-bold' : ''
                        }`}
                      >
                        {chat.title}
                      </li>
                    ))}
                  </ul>
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

          {/* Main Chat */}
          <main className="flex-1 flex flex-col justify-between h-full">
            {/* Chat messages */}
            <div className="px-5 py-[25px] overflow-y-auto scrollbar-none flex-1">
              {activeChat?.messages.map((chat, index) => (
                <div key={index} className="mb-3">
                  {chat.sender === 'bot' ? (
                    <div className="flex items-start gap-3">
                      <img
                        src={ProfileAvatar}
                        alt="bot profile"
                        className="w-7 h-7 rounded-full"
                      />

                      {/* Conditional rendering for bot loading */}
                      {loading && activeChat.messages.length === 1 ? (
                        <div className="flex items-center gap-2">
                          <span className="w-[2px] h-[2px] bg-gray-400 rounded-full animate-pulse"></span>
                          <span className="w-[2px] h-[2px] bg-gray-400 rounded-full animate-pulse delay-150"></span>
                          <span className="w-[2px] h-[2px] bg-gray-400 rounded-full animate-pulse delay-300"></span>
                        </div>
                      ) : (
                        <p className="text-[13px] sm:text-sm text-light rounded-lg max-w-[80%] lg:max-w-[580px]">
                          <TextEffect text={chat.message} />
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-end justify-end gap-3">
                      <p className="text-[13px] text-sm px-5 sm:px-6 py-2.5 sm:py-3 bg-[#242424] text-light rounded-[10px] max-w-[80%] lg:max-w-[600px]">
                        {chat.message}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message input */}
            <div className="flex items-center border-t border-secondPrimary px-6 lg:px-[50px] py-4 lg:py-[25px]">
              <label className="rounded-[10px] bg-[#242424] w-full flex items-center overflow-hidden pr-2.5 pl-5">
                <input
                  type="text"
                  placeholder="Message Maria"
                  className="w-full py-4 border-none focus:outline-none text-[#b1b1b1] text-sm leading-5 tracking-[-0.6px] bg-inherit placeholder:text-[#555]"
                  id="chatInput"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]"
                  onClick={handleSendMessage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2.67334 4.02L7.68001 6.16667L2.66668 5.5L2.67334 4.02ZM7.67334 9.83333L2.66668 11.98V10.5L7.67334 9.83333ZM1.34001 2L1.33334 6.66667L11.3333 8L1.33334 9.33333L1.34001 14L15.3333 8L1.34001 2Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </label>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MyAI;

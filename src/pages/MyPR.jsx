import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileAvatar from "@/assets/images/bot.png";
import PlusSvg from "@/components/svgs/PlusSvg";
import TextEffect from "@/components/TextEffect";

const MyPR = () => {
  const [queriesData, setQueriesData] = useState([]);
  const [chatHistories, setChatHistories] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch the data from the JSON file
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get("myPrQueries.json");
        const initialChat = {
          id: 1,
          title: "Welcome Chat",
          messages: [
            {
              sender: "bot",
              message: "Hi, I'm Maria. How can I assist you today?",
            },
          ],
        };
        setQueriesData(response.data); 
        setChatHistories([initialChat]);
        setActiveChatId(1);
      } catch (error) {
        console.error("Error fetching chat data", error);
      }
    };

    fetchQueries();
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Send user message
    setChatHistories((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              messages: [...chat.messages, { sender: "user", message }],
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
                  { sender: "bot", message: botResponse },
                ],
              }
            : chat
        )
      );
      setLoading(false);
    }, 1000);

    setMessage(""); // Clear the input field
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
      messages: [{ sender: "bot", message: "Hi, how can I assist you today?" }],
    };
    setChatHistories((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const activeChat = chatHistories.find((chat) => chat.id === activeChatId);

  return (
    <section className="h-[calc(100vh-150px)] overflow-hidden">
      <div className="flex w-full h-full items-start">
        {/* Sidebar */}
        <aside
          className="w-[300px] h-full bg-[#1c1c1c] py-[25px] px-[50px] duration-300 ease-in-out relative border-r border-secondPrimary"
          id="sidebar"
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
                        activeChatId === chat.id ? "font-bold" : ""
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

        {/* Main Chat */}
        <main className="flex-1 flex flex-col justify-between h-full">
          {/* Chat messages */}
          <div className="px-5 py-[25px] overflow-y-auto flex-1">
            {activeChat?.messages.map((chat, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  chat.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {chat.sender === "bot" ? (
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
                      <p className="text-sm text-light rounded-lg">
                        <TextEffect text={chat.message} />
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="flex items-end justify-end gap-3">
                    <p className="text-sm px-6 py-3 bg-[#242424] text-light rounded-[10px]">
                      {chat.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="flex items-center border-t border-secondPrimary px-[50px] py-[25px]">
            <label className="rounded-[10px] bg-[#242424] w-full flex items-center overflow-hidden pr-2.5 pl-5">
              <input
                type="text"
                placeholder="Message Maria"
                className="w-full py-4 border-none focus:outline-none text-[#b1b1b1] text-sm leading-5 tracking-[-0.6px] bg-inherit placeholder:text-[#555]"
                id="chatInput"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
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
    </section>
  );
};
export default MyPR;

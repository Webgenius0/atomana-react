import ProfileAvatar from '@/assets/images/bot.png';
import logo from '@/assets/images/my-ai-logo.png';
import CrossSvg from '@/components/svgs/CrossSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  useCreateNewChat,
  useDeleteChat,
  useGetChatHistory,
  useGetSingleConversation,
  useSendMessageToConversation,
} from '@/hooks/my-pr.hook';
import { cn } from '@/lib/utils';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Trash2Icon } from 'lucide-react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const parseLine = (line, idx) => {
  // Bold: **text**
  const boldParsed = line.split(/(\*\*.*?\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith('**') && chunk.endsWith('**')) {
      return <strong key={i}>{chunk.slice(2, -2)}</strong>;
    }

    // Italic: _text_
    return chunk.split(/(_.*?_)/g).map((part, j) => {
      if (part.startsWith('_') && part.endsWith('_')) {
        return <em key={j}>{part.slice(1, -1)}</em>;
      }

      // Inline code: `code`
      return part.split(/(`.*?`)/g).map((codePart, k) => {
        if (codePart.startsWith('`') && codePart.endsWith('`')) {
          return <code key={k}>{codePart.slice(1, -1)}</code>;
        }

        return <Fragment key={k}>{codePart}</Fragment>;
      });
    });
  });

  return (
    <span key={idx}>
      {boldParsed}
      <br />
    </span>
  );
};

const MyPR = () => {
  const messageInputRef = useRef(null);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [activeChatId, setActiveChatId] = useState(null);
  const [currentMessage, setCurrentMessage] = useState('');

  const { chatHistory } = useGetChatHistory();
  const {
    conversation,
    isLoading: isConversationLoading,
    isFetching: isConversationFetching,
  } = useGetSingleConversation(activeChatId);
  const {
    mutate: sendMessage,
    message,
    setMessage,
    isPending: isMessageSending,
    isSuccess: isMessageSentSuccess,
    containerRef,
    scrollToBottom,
  } = useSendMessageToConversation(activeChatId);
  const {
    mutate: deleteChat,
    isPending: isDeletePending,
    open,
    setOpen,
  } = useDeleteChat();

  const {
    mutate: createNewChat,
    isPending: isNewChatCreating,
    isSuccess: isNewChatSuccess,
    newChat,
  } = useCreateNewChat();

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    setCurrentMessage(message);
    if (activeChatId) {
      sendMessage({ message });
    } else {
      createNewChat({ message });
    }
    setMessage('');
  };

  useEffect(() => {
    if (!hideSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // reset body overflow on unmount
    return () => (document.body.style.overflow = 'auto');
  }, [hideSidebar]);

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversation, isMessageSending, isConversationFetching]);

  useEffect(() => {
    if (!isMessageSending && isMessageSending) {
      setCurrentMessage('');
    }
  }, [isMessageSending, isMessageSentSuccess]);

  useEffect(() => {
    if (newChat?.id && !isNewChatCreating && isNewChatSuccess) {
      setActiveChatId(newChat.id);
    }
  }, [newChat, isNewChatCreating, isNewChatSuccess]);

  useEffect(() => {
    if (!isConversationLoading) {
      setCurrentMessage('');
    }
  }, [isConversationLoading]);

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
            } duration-500 w-[300px] md:w-[250px] lg:w-[300px] h-full py-4 lg:py-[25px] ease-in-out md:relative md:top-auto md:left-auto border-r border-secondPrimary z-[9000]`}
          >
            <div className="sidebar-content">
              {/* Header */}
              <div className="flex items-center justify-between px-6 lg:px-[50px] ">
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
                  onClick={() => {
                    setActiveChatId(null);
                    setCurrentMessage('');
                    messageInputRef.current.focus();
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]"
                >
                  <PlusSvg />
                </button>
              </div>
              <div className="flex flex-col gap-[30px] mt-[25px]">
                <div>
                  <h3 className="text-xs font-bold tracking-[-0.24px] mb-2.5 text-[#ffffff80] px-6 lg:px-[50px] ">
                    All Chats
                  </h3>
                  <ul className="flex flex-col gap-2.5 overflow-y-scroll h-[calc(100svh-264px)] scrollbar-none px-3">
                    {chatHistory?.map((chat) => (
                      <li
                        key={chat.id}
                        onClick={() => {
                          setActiveChatId(chat.id);
                          setCurrentMessage('');
                        }}
                        className={`text-light text-sm tracking-[-0.28px] cursor-pointer duration-300 hover:bg-background/70 px-3 lg:px-[38px] py-2 rounded-md group relative ${
                          activeChatId === chat.id
                            ? 'font-bold bg-background/70'
                            : ''
                        }`}
                      >
                        {chat.name}

                        <span
                          className={cn(
                            'absolute top-1/2 -translate-y-1/2 right-2 hidden group-hover:inline-block',
                            activeChatId === chat.id && 'inline-block'
                          )}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                              <Trash2Icon className="size-4 text-light/60 hover:text-light" />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-red-400 mb-4">
                                  <Trash2Icon className="h-5 w-5" />
                                  Delete chat
                                </DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to delete this chat?
                                  This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter className="gap-2 sm:gap-0">
                                <DialogClose>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  disabled={isDeletePending}
                                  onClick={() => deleteChat(chat.id)}
                                >
                                  Delete chat
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </span>
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
            <div
              className="relative px-5 py-[25px] overflow-y-auto scrollbar-none flex-1 scroll-smooth"
              ref={containerRef}
            >
              {conversation?.map((chat, index) => (
                <div key={index} className="mb-3">
                  <div className="flex items-end justify-end gap-3">
                    <p className="text-[13px] text-sm px-5 sm:px-6 py-2.5 sm:py-3 bg-[#242424] text-light rounded-[10px] max-w-[80%] lg:max-w-[600px]">
                      {chat.message}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <img
                      src={ProfileAvatar}
                      alt="bot profile"
                      className="w-7 h-7 rounded-full"
                    />

                    <div className="text-[13px] sm:text-sm text-light rounded-lg max-w-[80%] lg:max-w-[580px]">
                      {chat?.response?.split('\n')?.map(parseLine)}
                    </div>
                  </div>
                </div>
              ))}

              {(isConversationLoading ||
                isMessageSending ||
                isConversationFetching ||
                isNewChatCreating) &&
                currentMessage && (
                  <div className="mb-3">
                    <div className="flex items-end justify-end gap-3">
                      <p className="text-[13px] text-sm px-5 sm:px-6 py-2.5 sm:py-3 bg-[#242424] text-light rounded-[10px] max-w-[80%] lg:max-w-[600px]">
                        {currentMessage}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <img
                        src={ProfileAvatar}
                        alt="bot profile"
                        className="w-7 h-7 rounded-full"
                      />

                      <div className="bg-primary/20 rounded-2xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="dot w-2.5 h-2.5 rounded-full bg-primary/80 shadow-lg"></div>
                          <div className="dot w-2.5 h-2.5 rounded-full bg-primary/80 shadow-lg"></div>
                          <div className="dot w-2.5 h-2.5 rounded-full bg-primary/80 shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            {/* Message input */}
            <div className="flex items-center border-t border-secondPrimary px-6 lg:px-[50px] py-4 lg:py-[25px]">
              <label className="rounded-[10px] bg-[#242424] w-full flex items-center overflow-hidden pr-2.5 pl-5">
                <input
                  ref={messageInputRef}
                  autoComplete="off"
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
                  disabled={isMessageSending}
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

export default MyPR;

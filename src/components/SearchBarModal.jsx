import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import LogoSquareSvg from './svgs/LogoSquareSvg';

const links = [
  {
    path: '/',
    label: 'MyTeam',
  },
  {
    path: '/my-systems',
    label: 'MySystems',
  },
  {
    path: '/my-ai',
    label: 'MyAI',
  },
  {
    path: '/my-classroom',
    label: 'MyClassroom',
  },
  {
    path: '/my-pr',
    label: 'MyPR',
  },
];

function SearchBarModal({ onClose, searchText, setSearchText }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 sm:flex items-center justify-center z-[9001] bg-black bg-opacity-50 hidden">
      <div className="bg-[#808080] rounded-2xl shadow-2xl w-[80%] max-w-2xl relative text-light">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition duration-300 mb-6"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col items-center pt-10">
          <div className="w-full border-b-2 border-gray-500">
            <div className="flex items-center gap-3 px-4 py-2">
              <LogoSquareSvg />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="py-3 text-white bg-[#808080] max-w-[80%] w-full rounded-md outline-none placeholder:text-white  text-sm placeholder:font-light cursor-pointer leading-[21px] tracking-[-0.14px]"
                placeholder="Type a question for Maria or search..."
              />
            </div>
          </div>
          <div className="border-b-2 border-gray-500 w-full mt-0">
            <div className="flex items-center gap-3 px-4 py-2">
              <LogoSquareSvg />
              <input
                type="text"
                className="w-full py-3 text-white bg-[#808080] rounded-md outline-none placeholder:text-white  text-sm placeholder:font-light leading-[21px] cursor-pointer tracking-[-0.14px]"
                placeholder="Ask Maria"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <p className="text-xs text-zinc-700">Go to</p>
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <div
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-4 cursor-pointer"
              >
                <FaLongArrowAltRight className="w-4 h-4" />
                <p className="text-xs ">{item?.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarModal;


import { IoClose } from "react-icons/io5";


const VideoModal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0  flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-[#242424] to-primary rounded-2xl shadow-2xl w-[100%] max-w-2xl p-2 relative">
                {/* Close Icon */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 border rounded-full p-1 hover:text-gray-800 transition duration-300"
                >
                    <IoClose size={24} />
                </button>

                {/* Modal Content */}
                <div className="flex flex-col items-center space-y-4"> 
                    {children}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;

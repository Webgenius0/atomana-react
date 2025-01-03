import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = 5;

  const getPaginationRange = () => {
    const startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center flex-wrap gap-y-4 gap-3.5 py-[15px]">
      {/* Pagination Info */}
      <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
        Showing <span>{(currentPage - 1) * itemsPerPage + 1}</span>–
        <span>{Math.min(currentPage * itemsPerPage, totalItems)}</span> of{" "}
        <span>{totalItems}</span> Results
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2.5">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`flex items-center justify-center w-[25px] h-[25px] rounded-full border border-secondPrimary bg-gradient-to-r from-secondPrimary to-[#1a1a1a] duration-300 active:scale-95 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.726562 5.26953C0.726562 5.16797 0.744141 5.07422 0.779297 4.98828C0.818359 4.90234 0.876953 4.82031 0.955078 4.74219L5.51953 0.277344C5.65234 0.148438 5.8125 0.0839844 6 0.0839844C6.12891 0.0839844 6.24414 0.115234 6.3457 0.177734C6.45117 0.236328 6.53516 0.316406 6.59766 0.417969C6.66016 0.519531 6.69141 0.634766 6.69141 0.763672C6.69141 0.947266 6.61914 1.11133 6.47461 1.25586L2.36133 5.26953L6.47461 9.2832C6.61914 9.42773 6.69141 9.59375 6.69141 9.78125C6.69141 9.90625 6.66016 10.0195 6.59766 10.1211C6.53516 10.2266 6.45117 10.3086 6.3457 10.3672C6.24414 10.4297 6.12891 10.4609 6 10.4609C5.8125 10.4609 5.65234 10.3945 5.51953 10.2617L0.955078 5.79688C0.876953 5.71875 0.818359 5.63672 0.779297 5.55078C0.744141 5.46484 0.726562 5.37109 0.726562 5.26953Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        {getPaginationRange().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`pagination-index ${
              currentPage === page ? "active" : ""
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`flex items-center justify-center w-[25px] h-[25px] rounded-full border border-secondPrimary bg-gradient-to-r from-secondPrimary to-[#1a1a1a] duration-300 active:scale-95 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        >
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.23242 5.26953C6.23242 5.37109 6.21289 5.46484 6.17383 5.55078C6.13477 5.63672 6.07617 5.71875 5.99805 5.79688L1.43359 10.2617C1.30469 10.3945 1.14453 10.4609 0.953125 10.4609C0.828125 10.4609 0.712891 10.4297 0.607422 10.3672C0.501953 10.3086 0.417969 10.2266 0.355469 10.1211C0.296875 10.0195 0.267578 9.90625 0.267578 9.78125C0.267578 9.59375 0.337891 9.42773 0.478516 9.2832L4.5918 5.26953L0.478516 1.25586C0.337891 1.11133 0.267578 0.947266 0.267578 0.763672C0.267578 0.634766 0.296875 0.519531 0.355469 0.417969C0.417969 0.316406 0.501953 0.236328 0.607422 0.177734C0.712891 0.115234 0.828125 0.0839844 0.953125 0.0839844C1.14453 0.0839844 1.30469 0.148438 1.43359 0.277344L5.99805 4.74219C6.07617 4.82031 6.13477 4.90234 6.17383 4.98828C6.21289 5.07422 6.23242 5.16797 6.23242 5.26953Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

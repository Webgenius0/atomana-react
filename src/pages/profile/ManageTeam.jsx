import AgentSkeleton from '@/components/profile/manage-team/AgentSkeleton';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import MailSvg from '@/components/svgs/MailSvg';
import MessageSvg from '@/components/svgs/MessageSvg';
import PhoneSvg from '@/components/svgs/PhoneSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import SearchGraySvg from '@/components/svgs/SearchGraySvg';
import { useGetAgents } from '@/hooks/agent.hook';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ManageTeam() {
  const [searchMember, setSearchMember] = useState('');
  const [page, setPage] = useState(1); // Track pagination

  const { agents, isLoading, isError, error, totalPages, currentPage } =
    useGetAgents(page, 10); // Fetch paginated data

  const handleSearch = (e) => {
    setSearchMember(e.target.value);
  };

  const filteredAgents = agents.filter((agent) => {
    const searchTerms = searchMember.toLowerCase().split(' ');

    return searchTerms.every(
      (term) =>
        agent.first_name.toLowerCase().includes(term) ||
        agent.last_name.toLowerCase().includes(term) ||
        agent.email.toLowerCase().includes(term)
    );
  });

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center justify-between gap-x-1 gap-y-3 flex-wrap">
          <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
            <Link to="/profile">
              <ArrowLeftSvg />
            </Link>
            <h2 className="section-title">Manage Team & Permissions</h2>
          </div>
          <Link
            to="/profile/add-team-member"
            className="flex items-center gap-2.5 text-sm leading-6 tracking-[-0.14px] text-light hover:opacity-60 duration-300 ml-auto"
          >
            Add team member
            <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
              <PlusSvg />
            </span>
          </Link>
        </div>

        {/* Search Bar */}
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

        {/* Agents List */}
        <div className="mt-4 md:mt-[25px]">
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <AgentSkeleton key={index} />
            ))
          ) : isError ? (
            <p className="text-red-500 text-sm">Error: {error.message}</p>
          ) : filteredAgents.length === 0 ? (
            <p className="text-light/70 text-2xl text-center py-20">
              No members found
            </p>
          ) : (
            filteredAgents.map((agent) => (
              <div
                key={agent.id}
                className="border-b border-secondPrimary py-4 flex items-center justify-between pr-0 md:pr-5"
              >
                <div className="flex items-center gap-1">
                  <img
                    src={agent.avatar}
                    alt={agent.first_name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="space-y-[2px]">
                    <p className="text-light text-sm sm:text-[15px] md:text-base font-medium leading-[18px] tracking-[-0.16px]">
                      {agent.first_name} {agent.last_name}
                    </p>
                    <p className="text-sm font-medium leading-5 text-light">
                      {agent.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5">
                  <PhoneSvg />
                  <MessageSvg />
                  <MailSvg />
                  <Link
                    to={`/profile/edit-team-member/${agent.handle}`}
                    className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase"
                  >
                    EDIT
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {agents?.length > 0 && (
          <div className="mt-8 flex justify-center items-center gap-2">
            <button
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all',
                {
                  'bg-gray-700 text-gray-400 cursor-not-allowed':
                    currentPage === 1,
                  'bg-[#009696] text-white hover:bg-[#007f7f] active:scale-95':
                    currentPage !== 1,
                }
              )}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ⬅ Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    className={cn(
                      'px-3 py-2 text-sm font-semibold rounded-lg transition-all',
                      {
                        'bg-[#009696] text-white': pageNumber === currentPage,
                        'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white':
                          pageNumber !== currentPage,
                      }
                    )}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>

            <button
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all',

                {
                  'bg-gray-700 text-gray-400 cursor-not-allowed':
                    currentPage === totalPages,
                  'bg-[#009696] text-white hover:bg-[#007f7f] active:scale-95':
                    currentPage !== totalPages,
                }
              )}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next ➡
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

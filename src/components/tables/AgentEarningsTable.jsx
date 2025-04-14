import { useGetAgentEarnings } from '@/hooks/expense.hook';
import { useDebouncedState } from '@/hooks/useDebouncedState';
import { useState } from 'react';
import Pagination from '../Pagination';
import SearchIconSvg from '../svgs/SearchIconSvg';
import DataTable from '../table/DataTable';
import { columns } from './AgentEarningsColumns';

export default function AgentEarningTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName, debouncedName] = useDebouncedState('', 500);

  // Fetch table data
  const { agentEarnings, totalItems, isLoading, isFetching } =
    useGetAgentEarnings({
      perPage,
      currentPage,
      name: debouncedName,
    });

  return (
    <>
      <div className="my-4 sm:my-5 md:my-6">
        <div className="flex justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              className="border rounded-full bg-transparent pl-10 pr-4 py-1 w-full text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search expenses"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <SearchIconSvg />
            </div>
          </div>

          {/* Dropdown */}
          <div className="ml-4">
            {/* GET OPTIONS FROM BELOW */}
            {/* <Dropdown options={heightoptions} onSelect={handleSelect} /> */}
          </div>
        </div>
      </div>

      <div>
        <DataTable
          data={agentEarnings}
          columns={columns}
          isLoading={isLoading}
          perPage={perPage}
        />
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={perPage}
          onPageChange={setCurrentPage}
          isLoading={isLoading || isFetching}
        />
      </div>
    </>
  );
}

//   const heightoptions = [
//     { value: 'highestsales', label: 'Time Range: YTD 2024' },
//     { value: 'quater', label: 'Quater' },
//     { value: 'year', label: 'Yearly' },
//   ];

//   const handleSelect = (option) => {
//     console.table('Selected option:', option);
//   };

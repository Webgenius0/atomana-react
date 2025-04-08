import { useGetAgentEarnings } from '@/hooks/expense.hook';
import { useState } from 'react';
import Pagination from '../Pagination';
import DataTable from '../table/DataTable';
import { columns } from './AgentEarningsColumns';

export default function AgentEarningTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { agentEarnings, totalItems, isLoading, isFetching } =
    useGetAgentEarnings({
      perPage,
      currentPage,
    });

  return (
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
  );
}

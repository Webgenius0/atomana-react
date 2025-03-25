import { useGetAgentEarnings } from '@/hooks/expense.hook';
import { useState } from 'react';
import { columns } from './AgentEarningsColumns';
import DataTable from './DataTable';

export default function AgentEarningTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [page] = useState(1);

  //   Fetch table data
  const { agentEarnings, isLoading } = useGetAgentEarnings({
    per_page: perPage,
    page,
  });

  return (
    <div>
      <DataTable
        data={agentEarnings}
        columns={columns}
        isLoading={isLoading}
        perPage={perPage}
      />
    </div>
  );
}

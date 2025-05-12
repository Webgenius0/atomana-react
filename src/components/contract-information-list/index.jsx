import Pagination from '@/components/Pagination';
import { useGetContractInformation } from '@/hooks/new-contract-information';
import { useState } from 'react';
import DataViewTable from '../table/DataViewTable';
import { columns } from './ColumnDefs';

export default function ContractInformationTable({
  rowSelection,
  setRowSelection,
}) {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { contractInformation, totalItems, isLoading } =
    useGetContractInformation({
      perPage,
      currentPage,
    });

  return (
    <div>
      <DataViewTable
        data={contractInformation}
        columns={columns}
        isLoading={isLoading}
        perPage={perPage}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={perPage}
        onPageChange={setCurrentPage}
        isLoading={isLoading}
      />
    </div>
  );
}

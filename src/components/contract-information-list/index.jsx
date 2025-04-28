import Pagination from '@/components/Pagination';
import { useGetContractInformation } from '@/hooks/new-contract-information';
import { useState } from 'react';
import DataViewTable from '../table/DataViewTable';
import { columns } from './ColumnDefs';

export default function ContractInformationTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { listingInformation, totalItems, isLoading } =
    useGetContractInformation({
      perPage,
      currentPage,
    });

  return (
    <div>
      <DataViewTable
        data={listingInformation}
        columns={columns}
        isLoading={isLoading}
        perPage={perPage}
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

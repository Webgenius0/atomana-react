import Pagination from '@/components/Pagination';
import { useGetListingInformation } from '@/hooks/new-listing-information';
import { useState } from 'react';
import DataViewTable from '../table/DataViewTable';
import { columns } from './ColumnDefs';

export default function ListingInformationTable({
  rowSelection,
  setRowSelection,
}) {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { listingInformation, totalItems, isLoading } =
    useGetListingInformation({
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

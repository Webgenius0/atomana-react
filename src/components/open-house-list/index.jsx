import Pagination from '@/components/Pagination';
import { useGetOpenHouses } from '@/hooks/open-house.hook';
import { useState } from 'react';
import DataViewTable from '../table/DataViewTable';
import { columns } from './ColumnDefs';

export default function OpenHouseTable({ rowSelection, setRowSelection }) {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { openHouses, totalItems, isLoading } = useGetOpenHouses({
    perPage,
    currentPage,
  });

  return (
    <div>
      <DataViewTable
        data={openHouses}
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

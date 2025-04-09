import Pagination from '@/components/Pagination';
import { useGetAccessInstructions } from '@/hooks/access-instructions.hook';
import { useState } from 'react';
import DataViewTable from '../table/DataViewTable';
import { columns } from './ColumnDefs';

export default function AccessInstructionList() {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { accessInstructions, totalItems, isLoading } =
    useGetAccessInstructions({
      perPage,
      currentPage,
    });

  return (
    <div>
      <DataViewTable
        data={accessInstructions}
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

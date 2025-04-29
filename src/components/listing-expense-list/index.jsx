import Pagination from '@/components/Pagination';
import DataTable from '@/components/table/DataTable';
import {
  useGetMyListingExpenses,
  useStoreMyListingExpenses,
} from '@/hooks/expense.hook';
import { useState } from 'react';
import { columns } from './ColumnDefs';

export default function MyListingExpenseTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { myListingExpenses, totalItems, isLoading } = useGetMyListingExpenses({
    perPage,
    currentPage,
  });

  // Store new row
  const { mutate, showInputs, setShowInputs, isPending, form } =
    useStoreMyListingExpenses();

  // Form instance
  const onSubmit = (data) => {
    const _data = {};
    Object.entries(data).forEach(([key, value]) => {
      _data[key] = value || '';
    });
    if (showInputs) mutate({ ..._data, recept: _data?.recept?.[0] || null });
  };

  return (
    <div>
      <DataTable
        form={form}
        onSubmit={onSubmit}
        data={myListingExpenses}
        columns={columns}
        isLoading={isLoading}
        isPending={isPending}
        showInputs={showInputs}
        setShowInputs={setShowInputs}
        perPage={perPage}
        addButtonText="Add a Listing"
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

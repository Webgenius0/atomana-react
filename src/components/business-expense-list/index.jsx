import Pagination from '@/components/Pagination';
import DataTable from '@/components/table/DataTable';
import {
  useGetMyBusinessExpenses,
  useStoreMyBusinessExpenses,
} from '@/hooks/expense.hook';
import { useState } from 'react';
import { columns } from './ColumnDefs';

export default function MyBusinessExpenseTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch table data
  const { myBusinessExpenses, totalItems, isLoading } =
    useGetMyBusinessExpenses({
      perPage,
      currentPage,
    });

  // Store new row
  const { mutate, showInputs, setShowInputs, isPending, form } =
    useStoreMyBusinessExpenses();

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
        data={myBusinessExpenses}
        columns={columns}
        isLoading={isLoading}
        isPending={isPending}
        showInputs={showInputs}
        setShowInputs={setShowInputs}
        perPage={perPage}
        addButtonText="Add an Expense"
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

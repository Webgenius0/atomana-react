import {
  useGetMyBusinessExpenses,
  useStoreMyBusinessExpenses,
} from '@/hooks/expense.hook';
import { useState } from 'react';
import Pagination from '../Pagination';
import DataTable from './DataTable';
import { columns } from './MyBusinessExpenseColumns';

export default function MyBusinessExpenseTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  //   Fetch table data
  const { myBusinessExpenses, totalItems, isLoading, isFetching } =
    useGetMyBusinessExpenses({
      perPage,
      currentPage,
    });

  // Store new row
  const { mutate, showInputs, setShowInputs, isPending, form } =
    useStoreMyBusinessExpenses();

  console.log(showInputs);

  // Form instance
  const onSubmit = (data) => {
    mutate({ ...data, recept: data.recept[0] });
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

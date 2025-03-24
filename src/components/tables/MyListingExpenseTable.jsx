import {
  useGetMyListingExpenses,
  useStoreMyListingExpenses,
} from '@/hooks/expense.hook';
import { useState } from 'react';
import DataTable from './DataTable';
import { columns } from './MyListingExpenseColumns';

export default function MyListingExpenseTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [page] = useState(1);

  //   Fetch table data
  const { myListingExpenses, isLoading } = useGetMyListingExpenses({
    per_page: perPage,
    page,
  });

  // Store new row
  const {
    mutate: storeListingExpense,
    showInputs,
    setShowInputs,
    isPending,
    form,
  } = useStoreMyListingExpenses();

  // Form instance

  const onSubmit = (data) => {
    storeListingExpense({ ...data, recept: data.recept[0] });
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
      />
    </div>
  );
}

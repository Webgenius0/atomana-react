import {
  useGetMyBusinessExpenses,
  useStoreMyBusinessExpenses,
} from '@/hooks/expense.hook';
import { useState } from 'react';
import DataTable from './DataTable';
import { columns } from './MyBusinessExpenseColumns';

export default function MyBusinessExpenseTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [page] = useState(1);

  //   Fetch table data
  const { myBusinessExpenses, isLoading } = useGetMyBusinessExpenses({
    per_page: perPage,
    page,
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
    </div>
  );
}

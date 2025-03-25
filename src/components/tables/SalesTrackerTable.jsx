import { useGetSalesTrack, useStoreSalesTrack } from '@/hooks/expense.hook';
import { useState } from 'react';
import DataTable from './DataTable';
import { columns } from './SalesTrackerColumns';

export default function SalesTrackerTable() {
  // Pagination states
  const [perPage] = useState(10);
  const [page] = useState(1);

  //   Fetch table data
  const { salesTrack, isLoading } = useGetSalesTrack({
    per_page: perPage,
    page,
  });

  console.log(salesTrack);

  // Store new row
  const { mutate, showInputs, setShowInputs, isPending, form } =
    useStoreSalesTrack();

  // Form instance
  const onSubmit = (data) => {
    mutate({ ...data, recept: data.recept[0] });
  };

  return (
    <div>
      <DataTable
        form={form}
        onSubmit={onSubmit}
        data={salesTrack}
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

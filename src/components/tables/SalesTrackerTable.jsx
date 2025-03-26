import { useGetSalesTrack, useStoreSalesTrack } from '@/hooks/expense.hook';
import { format } from 'date-fns';
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
    new Date().toLocaleDateString;
    console.log({
      original: data?.date_under_contract,
      formatted: format(data.date_under_contract, 'yyyy-MM-dd'),
    });
    mutate({
      ...data,
      date_under_contract: format(data.date_under_contract, 'yyyy-MM-dd'),
      closing_date: format(data.closing_date, 'yyyy-MM-dd'),
    });
  };

  //   console.log({ error: form.formState.errors });

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

import { useGetSalesTrack, useStoreSalesTrack } from '@/hooks/expense.hook';
import { format } from 'date-fns';
import { useState } from 'react';
import Pagination from '../Pagination';
import DataTable from '../table/DataTable';
import { columns } from './SalesTrackerColumns';

export default function SalesTrackerTable({ rowSelection, setRowSelection }) {
  // Pagination states
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  //   Fetch table data
  const { salesTrack, totalItems, isLoading, isFetching } = useGetSalesTrack({
    perPage,
    currentPage,
  });

  // Store new row
  const { mutate, showInputs, setShowInputs, isPending, form } =
    useStoreSalesTrack();

  // Form instance
  const onSubmit = (data) => {
    const _data = {};
    Object.entries(data).forEach(([key, value]) => {
      _data[key] = value || '';
    });
    if (showInputs)
      mutate({
        ..._data,
        date_under_contract: data.date_under_contract
          ? format(data.date_under_contract, 'yyyy-MM-dd')
          : '',
        closing_date: data.closing_date
          ? format(data.closing_date, 'yyyy-MM-dd')
          : '',
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
        addButtonText="Add a Sale"
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
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

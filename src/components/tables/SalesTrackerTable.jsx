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

  // Store new row
  const { mutate, showInputs, setShowInputs, isPending, form } =
    useStoreSalesTrack();

  // Form instance
  const onSubmit = (data) => {
    mutate({ ...data, recept: data.recept[0] });
  };

  const data = [
    {
      user_id: 'Hubert Lindgren',
      property_id: 1,
      price: 500,
      status: 'active',
      date_under_contract: '2025-06-05',
      closing_date: '2025-06-05',
      purchase_price: 59.5,
      referral_fee_pct: 6.32,
      buyer_seller: 'hlksd',
      commission_on_sale: 5,
      note: 'w2ewlrj',
    },
  ];

  return (
    <div>
      <DataTable
        form={form}
        onSubmit={onSubmit}
        data={data}
        columns={columns}
        // isLoading={isLoading}
        isPending={isPending}
        showInputs={showInputs}
        setShowInputs={setShowInputs}
        perPage={perPage}
      />
    </div>
  );
}

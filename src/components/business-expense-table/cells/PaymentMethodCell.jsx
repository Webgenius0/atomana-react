import { useDataTable } from '@/components/table/DataTableContext';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { useUpdateBusinessExpense } from '@/hooks/expense.hook';
import { useGetPaymentMethods } from '@/hooks/payment.hook';
import { useQueryClient } from '@tanstack/react-query';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

export default function PaymentMethodCell({ getValue, row, column }) {
  const rowId = row?.original?.id;
  const columnId = column?.id;
  const value = getValue();

  const [editableCell, setEditableCell] = useDataTable();
  const { paymentMethods, isLoading } = useGetPaymentMethods();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useUpdateBusinessExpense(
    rowId,
    'payment-method'
  );
  const form = useForm({
    defaultValues: {
      [columnId]: value,
    },
  });

  const displayedValue = paymentMethods?.find(
    (method) => method.id === value
  )?.name;

  const categoryOptions = paymentMethods?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        if (data?.success) {
          queryClient.invalidateQueries(['business_expense']);
          setEditableCell(null);
        }
      },
    });
  };

  // Editable Cell
  if (editableCell === `${columnId}-${rowId}`) {
    return (
      <div className="flex items-center gap-2 relative">
        <Controller
          name="payment_method_id"
          control={form.control}
          render={({ field }) => (
            <Select
              value={
                paymentMethods?.find((item) => item.id === field.value)?.name
              }
              setValue={(value) =>
                field.onChange(
                  paymentMethods?.find((item) => item.name === value).id
                )
              }
              disabled={isLoading}
              options={categoryOptions}
              placeholder="Select Payment Method"
            />
          )}
        />

        <div className="flex items-center absolute bottom-full right-0">
          <Button
            size="icon"
            className="bg-red-500 hover:bg-red-400 opacity-70 hover:opacity-100"
            onClick={() => setEditableCell(null)}
            type="button"
            disabled={isPending}
          >
            <XIcon className="size-4" />
          </Button>
          <Button
            size="icon"
            className="opacity-70 hover:opacity-100"
            onClick={form.handleSubmit(onSubmit)}
            type="button"
            disabled={isPending}
          >
            <CheckIcon className="size-4" />
          </Button>
        </div>
      </div>
    );
  }

  // View Only Cell

  return (
    <div
      className="px-[10px] py-[6.5px] relative group"
      onClick={() => setEditableCell(null)}
      onDoubleClick={() => setEditableCell(`${columnId}-${rowId}`)}
    >
      {displayedValue || '-'}
      <button
        className="hidden group-hover:flex absolute top-1/2 right-2 -translate-y-1/2 text-white/60 hover:text-white"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setEditableCell(`${columnId}-${rowId}`);
        }}
      >
        <PencilIcon className="size-4" />
      </button>
    </div>
  );
}

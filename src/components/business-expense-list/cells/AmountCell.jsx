import { useDataTable } from '@/components/table/DataTableContext';
import { Button } from '@/components/ui/button';
import { useUpdateBusinessExpense } from '@/hooks/expense.hook';
import { formatCurrency } from '@/lib/utils/formatCurrency';
import { useQueryClient } from '@tanstack/react-query';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function AmountCell({ getValue, row, column }) {
  const rowId = row?.original?.id;
  const columnId = column?.id;
  const value = getValue();

  const [editableCell, setEditableCell] = useDataTable();
  const { mutate, isPending } = useUpdateBusinessExpense(rowId, columnId);
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      [columnId]: getValue(),
    },
  });

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
      <div className="relative">
        <input
          type="number"
          autoFocus
          {...form.register(columnId)}
          className="bg-transparent w-full text-white px-3 py-2 border border-white focus:rounded-none outline-none"
          placeholder="Enter Amount"
          disabled={isPending}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === 'Enter') {
              form.handleSubmit(onSubmit)();
            }
          }}
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
      title={value}
      onClick={() => setEditableCell(null)}
      onDoubleClick={() => setEditableCell(`${columnId}-${rowId}`)}
    >
      {value ? formatCurrency(value) : '-'}

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

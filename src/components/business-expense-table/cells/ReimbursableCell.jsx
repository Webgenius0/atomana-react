import { useDataTable } from '@/components/table/DataTableContext';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { useUpdateBusinessExpense } from '@/hooks/expense.hook';
import { useQueryClient } from '@tanstack/react-query';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

export default function ReimbursableCell({ getValue, row, column }) {
  const rowId = row?.original?.id;
  const columnId = column?.id;
  const value = getValue();

  const [editableCell, setEditableCell] = useDataTable();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useUpdateBusinessExpense(rowId, columnId);
  const form = useForm({
    defaultValues: {
      [columnId]: value === undefined ? undefined : value === true ? '1' : '0',
    },
  });

  const options = [
    {
      id: '1',
      value: 'Yes',
      label: 'Yes',
    },
    {
      id: '0',
      value: 'No',
      label: 'No',
    },
  ];

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
          name="reimbursable"
          control={form.control}
          render={({ field }) => {
            return (
              <Select
                value={options?.find((item) => item?.id === field.value)?.value}
                setValue={(value) =>
                  field.onChange(
                    options?.find((item) => item?.value === value)?.id
                  )
                }
                options={options}
                placeholder="Select Reimbursable"
              />
            );
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
      onClick={() => setEditableCell(null)}
      onDoubleClick={() => setEditableCell(`${columnId}-${rowId}`)}
      className={`px-[10px] py-[6.5px] relative group ${
        !value ? 'bg-[#b91b1b33]' : ''
      }`}
    >
      {value === undefined ? '-' : value === true ? 'Yes' : 'No'}
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

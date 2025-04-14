import { useDataTable } from '@/components/table/DataTableContext';
import { useGetAgents } from '@/hooks/expense.hook';

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { useUpdateBusinessExpense } from '@/hooks/expense.hook';
import { useQueryClient } from '@tanstack/react-query';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

export default function UserCell({ getValue, row, column }) {
  const rowId = row?.original?.id;
  const columnId = column?.id;
  const value = getValue();

  const [editableCell, setEditableCell] = useDataTable();
  const { agents, isLoading } = useGetAgents();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useUpdateBusinessExpense(rowId, 'user');
  const form = useForm({
    defaultValues: {
      [columnId]: value,
    },
  });

  const agentOptions = agents?.map((item) => ({
    value: `${item.first_name} ${item.last_name}`,
    label: `${item.first_name} ${item.last_name}`,
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
          name="user_id"
          control={form.control}
          render={({ field }) => {
            const currentValue = agents?.find(
              (item) => item.id === field.value
            );
            return (
              <Select
                value={
                  currentValue &&
                  `${currentValue?.first_name} ${currentValue?.last_name}`
                }
                setValue={(value) =>
                  field.onChange(
                    agents?.find(
                      (item) => `${item.first_name} ${item.last_name}` === value
                    ).id
                  )
                }
                disabled={isLoading}
                options={agentOptions}
                placeholder="Select Owner"
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
      className="px-[10px] py-[6.5px] first-letter:uppercase relative group"
      onClick={() => setEditableCell(null)}
      onDoubleClick={() => setEditableCell(`${columnId}-${rowId}`)}
    >
      {value || '-'}

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

import { useDataTable } from '@/components/table/DataTableContext';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import {
  useGetExpenseCategories,
  useUpdateBusinessExpense,
} from '@/hooks/expense.hook';
import { useQueryClient } from '@tanstack/react-query';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import NewCategoryDialog from '../dialogs/NewCategoryDialog';

export default function CategoryCell({ getValue, row, column }) {
  const rowId = row?.original?.id;
  const columnId = column?.id;
  const expense_category_id = getValue();

  const [editableCell, setEditableCell] = useDataTable();
  const { expenseCategories, isLoading } = useGetExpenseCategories();
  const queryClient = useQueryClient();

  const categoryOptions = expenseCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const value = expenseCategories?.find(
    (category) => category.id === expense_category_id
  )?.name;

  const { mutate, isPending } = useUpdateBusinessExpense(rowId, 'category');

  const form = useForm({
    defaultValues: {
      category_id: getValue(),
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
      <div className="flex items-center gap-2 relative">
        <Controller
          name="category_id"
          control={form.control}
          render={({ field }) => (
            <Select
              value={
                expenseCategories?.find((item) => item.id === field.value)?.name
              }
              setValue={(value) =>
                field.onChange(
                  expenseCategories?.find((item) => item.name === value)?.id
                )
              }
              disabled={isLoading}
              options={categoryOptions}
              placeholder="Select Category"
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

        <NewCategoryDialog />
      </div>
    );
  }

  // View Only Cell
  return (
    <div
      onClick={() => setEditableCell(null)}
      onDoubleClick={() => setEditableCell(`${columnId}-${rowId}`)}
      className={`w-full px-[10px] py-[6.5px] relative group ${
        expense_category_id === 1
          ? 'bg-[#80CBC3] text-dark'
          : expense_category_id === 2
          ? 'bg-[#9AE4A7] text-dark'
          : expense_category_id === 3
          ? 'bg-[#F286FE] text-dark'
          : expense_category_id === 4
          ? 'bg-[#80CBC3] text-dark'
          : expense_category_id === 5
          ? 'bg-[#F286FE] text-dark'
          : expense_category_id === 6
          ? 'bg-[#86B2FE] text-dark'
          : 'text-light'
      }`}
    >
      {value || '-'}

      <button
        className="hidden group-hover:flex absolute top-1/2 right-2 -translate-y-1/2 text-black/60 hover:text-black"
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

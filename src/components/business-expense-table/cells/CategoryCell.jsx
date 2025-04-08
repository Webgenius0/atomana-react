import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import {
  useGetExpenseCategories,
  useUpdateBusinessExpense,
} from '@/hooks/expense.hook';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import NewCategoryDialog from '../dialogs/NewCategoryDialog';

export default function CategoryCell({ getValue, row }) {
  const expense_category_id = getValue();
  const { expenseCategories, isLoading } = useGetExpenseCategories();

  const categoryOptions = expenseCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const value = expenseCategories?.find(
    (category) => category.id === expense_category_id
  )?.name;

  const rowId = row?.original?.id;

  const { mutate, showInput, setShowInput, isPending } =
    useUpdateBusinessExpense(rowId, 'category');

  const form = useForm({
    defaultValues: {
      category_id: getValue(),
    },
  });

  //   handle hide input field on outside click
  useEffect(() => {
    const hideInput = (e) => {
      if (!isPending && !e?.target?.className?.includes?.('exclude'))
        setShowInput(false);
    };

    document.body.addEventListener('click', hideInput);
    return () => document.body.removeEventListener('click', hideInput);
  }, [isPending]);

  // Render input conditionally
  if (showInput) {
    return (
      <div
        className="flex items-center gap-2 relative"
        onClick={(e) => e.stopPropagation()}
      >
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
            onClick={() => setShowInput(false)}
            type="button"
            disabled={isPending}
          >
            <XIcon className="size-4" />
          </Button>
          <Button
            size="icon"
            className="opacity-70 hover:opacity-100"
            onClick={form.handleSubmit(mutate)}
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

  // Table Cell
  return (
    <div
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
        onClick={() => {
          setTimeout(() => {
            setShowInput(true);
          }, 0);
        }}
      >
        <PencilIcon className="size-4" />
      </button>
    </div>
  );
}

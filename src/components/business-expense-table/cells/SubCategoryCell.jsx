import { useDataTable } from '@/components/table/DataTableContext';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import {
  useGetExpenseCategories,
  useGetExpenseSubCategories,
  useUpdateBusinessExpense,
} from '@/hooks/expense.hook';
import { useQueryClient } from '@tanstack/react-query';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import NewSubcategoryDialog from '../dialogs/NewSubcategoryDialog';

export default function SubcategoryCell({ row, getValue, column }) {
  const rowId = row?.original?.id;
  const columnId = column?.id;
  const subCategoryId = getValue();
  const categoryId = row.original.expense_category_id;

  const [editableCell, setEditableCell] = useDataTable();
  const queryClient = useQueryClient();
  const { expenseCategories, isLoading: isCategoryLoading } =
    useGetExpenseCategories();

  const categorySlug = expenseCategories?.find(
    (category) => category.id == categoryId
  )?.slug;

  const {
    expenseSubCategories,
    isLoading: isSubcategoryLoading,
    isFetching: isSubcategoryFetching,
  } = useGetExpenseSubCategories(categorySlug);

  const expenseSubCategoryOptions = expenseSubCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const value = expenseSubCategories?.find(
    (subCategory) => subCategory.id === subCategoryId
  )?.name;

  const { mutate, isPending } = useUpdateBusinessExpense(rowId, 'sub-category');

  const form = useForm({
    defaultValues: {
      sub_category_id: subCategoryId,
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
          name="sub_category_id"
          control={form.control}
          render={({ field }) => (
            <Select
              value={
                expenseSubCategories?.find((item) => item.id === field.value)
                  ?.name
              }
              setValue={(value) =>
                field.onChange(
                  expenseSubCategories?.find((item) => item.name === value)?.id
                )
              }
              disabled={
                isCategoryLoading ||
                isSubcategoryLoading ||
                isSubcategoryFetching ||
                isPending
              }
              options={expenseSubCategoryOptions}
              placeholder="Select Subcategory"
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

        <NewSubcategoryDialog />
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

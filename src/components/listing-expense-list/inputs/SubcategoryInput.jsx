import { Select } from '@/components/ui/select';
import {
  useGetExpenseCategories,
  useGetExpenseSubCategories,
} from '@/hooks/expense.hook';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import NewSubcategoryDialog from '../dialogs/NewSubcategoryDialog';

export default function SubcategoryInput() {
  const form = useFormContext();
  const expense_category_id = form.watch('expense_category_id');

  const { expenseCategories, isLoading: isCategoryLoading } =
    useGetExpenseCategories();

  const categorySlug = expenseCategories?.find(
    (category) => category.id == expense_category_id
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

  useEffect(() => {
    form.setValue('expense_sub_category_id', undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expense_category_id]);

  return (
    <div className="flex items-center gap-2">
      <Controller
        name="expense_sub_category_id"
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
              isCategoryLoading || isSubcategoryLoading || isSubcategoryFetching
            }
            options={expenseSubCategoryOptions}
            placeholder="Select Subcategory"
          />
        )}
      />
      <NewSubcategoryDialog />
    </div>
  );
}

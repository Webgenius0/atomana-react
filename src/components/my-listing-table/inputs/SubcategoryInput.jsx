import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import {
  useGetExpenseCategories,
  useGetExpenseSubCategories,
} from '@/hooks/expense.hook';
import { Plus } from 'lucide-react';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export default function SubcategoryInput() {
  const form = useFormContext();

  const categoryId = form.watch('expense_category_id');

  const { expenseCategories, isLoading: isCategoryLoading } =
    useGetExpenseCategories();

  const categorySlug = expenseCategories?.find(
    (category) => category.id == categoryId
  )?.slug;

  const { expenseSubCategories, isLoading: isSubcategoryLoading } =
    useGetExpenseSubCategories(categorySlug);

  const expenseSubCategoryOptions = expenseSubCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  useEffect(() => {
    form.setValue('expense_sub_category_id', undefined);
  }, [categoryId]);

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
            disabled={isCategoryLoading || isSubcategoryLoading}
            options={expenseSubCategoryOptions}
            placeholder="Select Subcategory"
          />
        )}
      />
      <Button size="icon" variant="ghost" type="button">
        <Plus />
      </Button>
    </div>
  );
}

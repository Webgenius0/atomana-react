import { Select } from '@/components/ui/select';
import { useGetExpenseCategories } from '@/hooks/expense.hook';
import { Controller, useFormContext } from 'react-hook-form';
import NewCategoryDialog from '../dialogs/NewCategoryDialog';

export default function CategoryInput() {
  const form = useFormContext();
  const { expenseCategories, isLoading } = useGetExpenseCategories();

  const categoryOptions = expenseCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  return (
    <div className="flex items-center gap-2">
      <Controller
        name="expense_category_id"
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

      <NewCategoryDialog />
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { useGetExpenseCategories } from '@/hooks/expense.hook';
import { Plus } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

export default function SubcategoryInput() {
  const { expenseCategories, isLoading } = useGetExpenseCategories();
  const form = useFormContext();

  if (isLoading) return null;

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
              expenseCategories.find((item) => item.id === field.value)?.name
            }
            setValue={(value) =>
              field.onChange(
                expenseCategories.find((item) => item.name === value).id
              )
            }
            options={categoryOptions}
            placeholder="Select Category"
          />
        )}
      />
      <Button size="icon" variant="ghost" type="button">
        <Plus />
      </Button>
    </div>
  );
}

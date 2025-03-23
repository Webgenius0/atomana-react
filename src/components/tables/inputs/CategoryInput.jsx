import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select } from '@/components/ui/select';
import {
  useGetExpenseCategories,
  useStoreCategory,
} from '@/hooks/expense.hook';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export default function CategoryInput() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const form = useFormContext();
  const { expenseCategories, isLoading } = useGetExpenseCategories();
  const {
    mutate: storeCategory,
    open,
    setOpen,
    isPending,
  } = useStoreCategory();

  const categoryOptions = expenseCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const handleSubmit = () => {
    setError('');

    if (!name.trim()) {
      return setError('Name is required');
    }

    storeCategory({ name });
  };

  const handleChange = (e) => setName(e.target.value);

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
                expenseCategories?.find((item) => item.name === value).id
              )
            }
            disabled={isLoading}
            options={categoryOptions}
            placeholder="Select Category"
          />
        )}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost" type="button">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="mb-2">
            <DialogTitle>New Category</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3 w-full mb-3">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Category Name
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Category Name"
              value={name}
              onChange={handleChange}
            />
            <p className="text-red-400">{error}</p>
          </div>

          <div className="flex justify-end">
            <Button type="button" onClick={handleSubmit} disabled={isPending}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

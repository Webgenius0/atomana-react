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
  useGetExpenseSubCategories,
  useStoreSubCategory,
} from '@/hooks/expense.hook';
import { Plus } from 'lucide-react';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export default function SubcategoryInput() {
  const form = useFormContext();
  const expense_category_id = form.watch('expense_category_id');

  const { expenseCategories, isLoading: isCategoryLoading } =
    useGetExpenseCategories();

  const categorySlug = expenseCategories?.find(
    (category) => category.id == expense_category_id
  )?.slug;

  const categoryOptions = expenseCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const {
    expenseSubCategories,
    isLoading: isSubcategoryLoading,
    isFetching: isSubcategoryFetching,
  } = useGetExpenseSubCategories(categorySlug);

  const {
    mutate: storeCategory,
    open,
    setOpen,
    isPending,
    name,
    setName,
    categoryId,
    setCategoryId,
    nameError,
    setNameError,
    categoryError,
    setCategoryError,
  } = useStoreSubCategory();

  const expenseSubCategoryOptions = expenseSubCategories?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  useEffect(() => {
    form.setValue('expense_sub_category_id', undefined);
  }, [expense_category_id]);

  const handleSubmit = () => {
    setCategoryError('');
    setNameError('');

    if (name.trim() && categoryId) {
      storeCategory({ name, expense_category_id: categoryId });
    } else {
      if (!categoryId) {
        setCategoryError('Category is required');
      }

      if (!name.trim()) {
        setNameError('Name is required');
      }
    }
  };

  const handleChange = (e) => setName(e.target.value);

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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost" type="button">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="mb-2">
            <DialogTitle>New Subcategory</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3 w-full mb-3">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Category
            </label>
            <Select
              value={
                expenseCategories?.find((item) => item.id === categoryId)?.name
              }
              setValue={(value) =>
                setCategoryId(
                  expenseCategories?.find((item) => item.name === value)?.id
                )
              }
              disabled={isCategoryLoading}
              options={categoryOptions}
              placeholder="Select Category"
              className="h-12 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
            />
            <p className="text-red-400">{categoryError}</p>
          </div>

          <div className="flex flex-col gap-3 w-full mb-3">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Subcategory Name
            </label>
            <input
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
              placeholder="Subcategory Name"
              value={name}
              onChange={handleChange}
            />
            <p className="text-red-400">{nameError}</p>
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

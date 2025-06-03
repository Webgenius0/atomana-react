import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Select from '@/components/ui/react-select';
import {
  useGetExpenseCategories,
  useStoreSubCategory,
} from '@/hooks/expense.hook';
import { Plus } from 'lucide-react';

export default function NewSubcategoryDialog() {
  const { expenseCategories, isLoading: isCategoryLoading } =
    useGetExpenseCategories();

  const categoryOptions = expenseCategories?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

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
            options={categoryOptions}
            value={categoryOptions?.find(
              (option) => option?.value == categoryId
            )}
            onChange={(option) => setCategoryId(option?.value)}
            isDisabled={isCategoryLoading}
            isLoading={isCategoryLoading}
            placeholder="Select Category"
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
  );
}

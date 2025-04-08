import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useStoreCategory } from '@/hooks/expense.hook';
import { Plus } from 'lucide-react';

export default function NewCategoryDialog() {
  const {
    mutate: storeCategory,
    open,
    setOpen,
    isPending,
    name,
    setName,
    nameError,
    setNameError,
  } = useStoreCategory();

  const handleSubmit = () => {
    setNameError('');

    if (!name.trim()) {
      return setNameError('Name is required');
    }

    storeCategory({ name });
  };

  const handleChange = (e) => setName(e.target.value);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" type="button">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] exclude">
        <DialogHeader className="mb-2 exclude">
          <DialogTitle>New Category</DialogTitle>
        </DialogHeader>

        <div
          className="flex flex-col gap-3 w-full mb-3"
          onClick={(e) => e.stopPropagation()}
        >
          <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
            Category Name
          </label>
          <input
            className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
            placeholder="Category Name"
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

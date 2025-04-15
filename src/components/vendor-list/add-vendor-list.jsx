import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCreateVendorCategories } from '@/hooks/vendor.hook';
import FileSvg from '../svgs/FileSvg';
import PlusSvg from '../svgs/PlusSvg';

export default function AddVendorList() {
  const {
    mutate: createVendorCategories,
    isPending,
    open,
    setOpen,
    form,
  } = useCreateVendorCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form data:', data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('icon', data.icon[0]); // Make sure this matches your API expectation

    // Verify FormData content
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Send FormData directly, not wrapped in an object
    createVendorCategories(formData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2.5 text-xs leading-6 tracking-[-0.14px] text-light hover:opacity-60 duration-300 ml-auto cursor-pointer">
          <p className="sm:block hidden">Add Vendor List</p>
          <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
            <PlusSvg />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-2">
          <DialogTitle>New Vendor List</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Category Name"
              className="px-4 py-3 outline-none bg-transparent border border-secondPrimary rounded text-sm font-medium leading-5 text-light"
              {...register('name')}
            />
            {errors?.name?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.name?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              Icon
            </label>

            <label
              htmlFor="icon"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
            >
              <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px] truncate max-w-[80%]">
                {watch('icon')?.[0]?.name || 'Choose File'}
              </span>
              <FileSvg />
              <input
                id="icon"
                type="file"
                accept="image/jpeg, image/png, image/webp"
                className="hidden"
                {...register('icon')}
              />
            </label>
            {errors?.icon?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.icon?.message}
              </p>
            )}
          </div>
          <Button type="submit" disabled={isPending} size="lg">
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useEditProfile, useGetProfile } from '@/hooks/profile.hook';
import { profileSchema } from '@/schema/profile.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function EditHomeAddress() {
  const { profile } = useGetProfile();
  const { mutate: editProfile, isPending, open, setOpen } = useEditProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      address: profile?.address || '',
    },
  });

  useEffect(() => {
    reset({
      address: profile?.address || '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  // Handle form submission
  const onSubmit = (data) => {
    editProfile({ data, field: 'address' });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase">
          EDIT
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-2">
          <DialogTitle>Home Address</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            id="address"
            className="px-4 py-3 outline-none bg-transparent border border-secondPrimary rounded text-sm font-medium leading-5 text-light"
            {...register('address')}
          />
          {errors?.address?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.address?.message}
            </p>
          )}
          <Button type="submit" disabled={isPending} size="lg">
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

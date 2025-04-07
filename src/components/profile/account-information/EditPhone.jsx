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

export default function EditPhone() {
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
      phone: profile?.phone || '',
    },
  });

  useEffect(() => {
    reset({
      phone: profile?.phone || '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  // Handle form submission
  const onSubmit = (data) => {
    editProfile({ data, field: 'phone' });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-xs md:text-sm font-bold tracking-[-0.408] text-[#009696] duration-300 hover:opacity-60 uppercase">
          MANAGE
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-2">
          <DialogTitle>Phone Number</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            id="phone"
            className="px-4 py-3 outline-none bg-transparent border border-secondPrimary rounded text-sm font-medium leading-5 text-light"
            {...register('phone')}
          />
          {errors?.phone?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.phone?.message}
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

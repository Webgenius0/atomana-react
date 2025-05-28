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

export default function EditEmail() {
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
      email: profile?.email || '',
    },
  });

  useEffect(() => {
    reset({
      email: profile?.email || '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  // Handle form submission
  const onSubmit = (data) => {
    editProfile({ data, field: 'email' });
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
          <DialogTitle>Email</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            id="email"
            className="px-4 py-3 outline-none bg-transparent border border-secondPrimary rounded text-sm font-medium leading-5 text-light"
            {...register('email')}
          />
          {errors?.email?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.email?.message}
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

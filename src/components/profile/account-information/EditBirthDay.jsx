import CustomDatePicker from '@/components/CustomDatePicker';
import CalenderSvg from '@/components/svgs/CalenderSvg';
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
import { format } from 'date-fns';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function EditBirthDay() {
  const { profile } = useGetProfile();
  const { mutate: editProfile, isPending, open, setOpen } = useEditProfile();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      date_of_birth: profile?.date_of_birth || '',
    },
  });

  useEffect(() => {
    reset({
      date_of_birth: profile?.date_of_birth || '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  // Handle form submission
  const onSubmit = (data) => {
    editProfile({ data, field: 'birthday' });
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
          <DialogTitle>Birthday</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
            <Controller
              name="date_of_birth"
              control={control}
              render={({ field }) => (
                <CustomDatePicker
                  value={field.value}
                  onChange={(date) => {
                    field.onChange(format(date, 'MM-dd-yyyy'));
                  }}
                  className="py-[7px]"
                />
              )}
            />
            <CalenderSvg />
          </label>
          {errors?.date_of_birth?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.date_of_birth?.message}
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

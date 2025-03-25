import CustomDatePicker from '@/components/CustomDatePicker';
import CalenderSvg from '@/components/svgs/CalenderSvg';
import { Controller, useFormContext } from 'react-hook-form';

export default function ClosingDateInput() {
  const form = useFormContext();

  return (
    <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
      <Controller
        name="closing_date"
        control={form.control}
        render={({ field }) => (
          <CustomDatePicker
            value={field.value}
            onChange={field.onChange}
            className="py-[7px]"
          />
        )}
      />
      <CalenderSvg />
    </label>
  );
}

import { Select } from '@/components/ui/select';
import { Controller, useFormContext } from 'react-hook-form';

export default function StatusInput() {
  const form = useFormContext();

  const options = [
    {
      value: 'active',
      label: 'Active',
    },
    {
      value: 'pending',
      label: 'Pending',
    },
    {
      value: 'close',
      label: 'Close',
    },
    {
      value: 'expired',
      label: 'Expired',
    },
  ];

  return (
    <Controller
      name="status"
      control={form.control}
      render={({ field }) => {
        return (
          <Select
            value={field.value}
            setValue={field.onChange}
            options={options}
            placeholder="Select Status"
            className="w-[150px]"
          />
        );
      }}
    />
  );
}

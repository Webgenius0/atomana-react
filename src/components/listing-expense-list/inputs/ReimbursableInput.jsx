import { Select } from '@/components/ui/select';
import { Controller, useFormContext } from 'react-hook-form';

export default function ReimbursableInput() {
  const form = useFormContext();

  const options = [
    {
      id: '1',
      value: 'Yes',
      label: 'Yes',
    },
    {
      id: '0',
      value: 'No',
      label: 'No',
    },
  ];

  return (
    <Controller
      name="reimbursable"
      control={form.control}
      render={({ field }) => {
        return (
          <Select
            value={options?.find((item) => item?.id === field.value)?.value}
            setValue={(value) =>
              field.onChange(options?.find((item) => item?.value === value)?.id)
            }
            options={options}
            placeholder="Select Reimbursable"
          />
        );
      }}
    />
  );
}

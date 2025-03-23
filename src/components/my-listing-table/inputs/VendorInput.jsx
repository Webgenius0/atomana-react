import { Select } from '@/components/ui/select';
import { useGetAgents } from '@/hooks/expense.hook';
import { Controller, useFormContext } from 'react-hook-form';

export default function VendorInput() {
  const { agents, isLoading } = useGetAgents();
  const form = useFormContext();

  const categoryOptions = agents?.map((item) => ({
    value: `${item.first_name} ${item.last_name}`,
    label: `${item.first_name} ${item.last_name}`,
  }));

  return (
    <Controller
      name="user_id"
      control={form.control}
      render={({ field }) => {
        const currentValue = agents?.find((item) => item.id === field.value);
        return (
          <Select
            value={
              currentValue &&
              `${currentValue?.first_name} ${currentValue?.last_name}`
            }
            setValue={(value) =>
              field.onChange(
                agents?.find(
                  (item) => `${item.first_name} ${item.last_name}` === value
                ).id
              )
            }
            disabled={isLoading}
            options={categoryOptions}
            placeholder="Select Vendor/Payee"
          />
        );
      }}
    />
  );
}

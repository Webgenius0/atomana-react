import { Select } from '@/components/ui/select';
import { useGetProperties } from '@/hooks/property.hook';
import { Controller, useFormContext } from 'react-hook-form';

export default function PropertyInput() {
  const { properties, isLoading } = useGetProperties();
  const form = useFormContext();

  const propertyOptions = properties?.map((item) => ({
    value: item.address,
    label: item.address,
  }));

  return (
    <Controller
      name="property_id"
      control={form.control}
      render={({ field }) => {
        return (
          <Select
            value={properties?.find((item) => item.id === field.value)?.address}
            setValue={(value) =>
              field.onChange(
                properties?.find((item) => item.address === value)?.id
              )
            }
            disabled={isLoading}
            options={propertyOptions}
            placeholder="Select Property Address"
          />
        );
      }}
    />
  );
}

import Select from '@/components/ui/react-select';
import { useGetProperties } from '@/hooks/property.hook';
import { useDebouncedState } from '@/hooks/useDebouncedState';
import { Controller, useFormContext } from 'react-hook-form';

export default function PropertyInput() {
  const [search, setSearch, debouncedSearch] = useDebouncedState('', 400);
  const { properties, isLoading } = useGetProperties({
    search: debouncedSearch,
  });
  const form = useFormContext();

  const propertyOptions = properties?.map((item) => ({
    value: item.id,
    label: item.address,
  }));

  return (
    <Controller
      name="property_id"
      control={form.control}
      render={({ field }) => {
        return (
          <Select
            options={propertyOptions}
            value={propertyOptions?.find(
              (option) => option?.value == field?.value
            )}
            onChange={(option) => field.onChange(option?.value)}
            //   isDisabled={isPropertiesLoading}
            isLoading={isLoading}
            placeholder="Select Property Address"
            inputValue={search}
            onInputChange={(value) => setSearch(value)}
            className="w-[200px]"
            height={24}
            width={200}
            borderRadius={6}
          />
        );
      }}
    />
  );
}

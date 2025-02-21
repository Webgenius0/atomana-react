import { useGetProperties } from '@/hooks/property.hook';

export default function PropertyInput({ value, onChange }) {
  const { properties, isLoading } = useGetProperties();

  return (
    <td className="border border-[#5E5E5E] p-2 text-light">
      <select
        className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer w-full"
        value={value}
        onChange={(e) => onChange(e, 'property_id')}
        disabled={isLoading}
      >
        <option value="" className="bg-dark">
          Property Address
        </option>

        {properties?.map((property) => (
          <option key={property.id} value={property.id} className="bg-dark">
            {property.address}
          </option>
        ))}
      </select>
    </td>
  );
}

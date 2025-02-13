import { useGetVendors } from '@/hooks/expense.hook';

export default function VendorInput({ value, onChange }) {
  const { vendors, isLoading } = useGetVendors();

  return (
    <td className="border border-[#5E5E5E] p-2">
      <select
        className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer"
        value={value}
        onChange={(e) => onChange(e, 'vendor_id')}
        disabled={isLoading}
      >
        <option value="" className="bg-dark">
          Vendor / Payee
        </option>
        {vendors?.map((vendor) => (
          <option key={vendor.id} value={vendor.id} className="bg-dark">
            {vendor.name}
          </option>
        ))}
      </select>
    </td>
  );
}

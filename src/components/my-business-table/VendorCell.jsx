import { useGetVendors } from '@/hooks/expense.hook';

export default function VendorCell({ row }) {
  const { vendors } = useGetVendors();

  const value = vendors?.find((vendor) => vendor.id === row.vendor_id)?.name;

  return (
    <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[150px]">
      {value}
    </td>
  );
}

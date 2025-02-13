import { formatCurrency } from '@/lib/utils/formatCurrency';

export default function AmountCell({ row }) {
  const value = formatCurrency(row.amount);

  return (
    <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[75px]">
      {value}
    </td>
  );
}

import { formatCurrency } from '@/lib/utils/formatCurrency';

export default function CurrencyCell({ getValue, cell }) {
  const amount = formatCurrency(getValue());
  return (
    <div
      className="px-[10px] py-[6.5px]"
      style={{
        width: `${cell.column.getSize()}px`,
      }}
    >
      {amount}
    </div>
  );
}

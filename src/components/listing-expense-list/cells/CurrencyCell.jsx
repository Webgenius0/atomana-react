import { formatCurrency } from '@/lib/utils/formatCurrency';

export default function CurrencyCell({ getValue }) {
  const amount = formatCurrency(getValue());
  return <div className="px-[10px] py-[6.5px]">{amount}</div>;
}

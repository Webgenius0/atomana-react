import { useFormContext } from 'react-hook-form';

export default function CommissionOnSaleInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('commission_on_sale')}
      type="number"
      step="any"
      className="bg-transparent w-full text-white px-3 py-2 border border-white rounded-md"
      placeholder="Enter Commission"
    />
  );
}

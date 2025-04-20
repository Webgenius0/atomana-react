import { useFormContext } from 'react-hook-form';

export default function AmountInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('amount')}
      type="number"
      step="any"
      className="bg-transparent w-full text-white px-3 py-2 border border-white rounded-md"
      placeholder="Enter Amount"
    />
  );
}

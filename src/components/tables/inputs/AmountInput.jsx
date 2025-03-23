import { useFormContext } from 'react-hook-form';

export default function AmountInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('amount')}
      type="number"
      className="bg-transparent w-full text-white px-3 py-2 border border-white/60 rounded-md"
      placeholder="Enter description"
    />
  );
}

import { useFormContext } from 'react-hook-form';

export default function PurchasePriceInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('purchase_price')}
      type="number"
      className="bg-transparent w-full text-white px-3 py-2 border border-white rounded-md"
      placeholder="Enter Purchase Price"
    />
  );
}

import { useFormContext } from 'react-hook-form';

export default function VendorInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('payee')}
      className="bg-transparent w-full text-white px-3 py-2 border border-white rounded-md"
      placeholder="Vendor / Payee"
    />
  );
}

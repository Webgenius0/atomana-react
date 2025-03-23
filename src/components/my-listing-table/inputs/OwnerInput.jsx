import { useFormContext } from 'react-hook-form';

export default function OwnerInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('owner')}
      className="bg-transparent w-full text-white px-3 py-2 border border-white/60 rounded-md"
      placeholder="Owner Name"
    />
  );
}

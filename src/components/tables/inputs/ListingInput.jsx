import { useFormContext } from 'react-hook-form';

export default function ListingInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('listing')}
      className="bg-transparent w-full text-white px-3 py-2 border border-white/60 rounded-md"
      placeholder="Enter Listing"
    />
  );
}

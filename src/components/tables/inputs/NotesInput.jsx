import { useFormContext } from 'react-hook-form';

export default function NotesInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('note')}
      className="bg-transparent w-full text-white px-3 py-2 border border-white rounded-md"
      placeholder="Enter Notes"
    />
  );
}

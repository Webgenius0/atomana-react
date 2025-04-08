import { Button } from '@/components/ui/button';
import { useUpdateBusinessExpense } from '@/hooks/expense.hook';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function ListingCell({ getValue, row, column }) {
  const rowId = row?.original?.id;
  const columnId = column?.id;
  const value = getValue();

  const { mutate, showInput, setShowInput, isPending } =
    useUpdateBusinessExpense(rowId, columnId);

  const form = useForm({
    defaultValues: {
      [columnId]: getValue(),
    },
  });

  // handle hide input field on outside click
  useEffect(() => {
    const hideInput = () => {
      if (!isPending) setShowInput(false);
    };

    document.body.addEventListener('click', hideInput);
    return () => document.body.removeEventListener('click', hideInput);
  }, [isPending]);

  // Render input conditionally
  if (showInput) {
    return (
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          {...form.register(columnId)}
          className="bg-transparent w-full text-white px-3 py-2 border border-white focus:rounded-none outline-none"
          placeholder="Enter Listing"
          disabled={isPending}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === 'Enter') {
              form.handleSubmit(mutate)();
            }
          }}
        />
        <div className="flex items-center absolute bottom-full right-0">
          <Button
            size="icon"
            className="bg-red-500 hover:bg-red-400 opacity-70 hover:opacity-100"
            onClick={() => setShowInput(false)}
            type="button"
            disabled={isPending}
          >
            <XIcon className="size-4" />
          </Button>
          <Button
            size="icon"
            className="opacity-70 hover:opacity-100"
            onClick={form.handleSubmit(mutate)}
            type="button"
            disabled={isPending}
          >
            <CheckIcon className="size-4" />
          </Button>
        </div>
      </div>
    );
  }

  // Table Cell
  return (
    <div
      className="px-[10px] py-[6.5px] relative group"
      title={value}
      onDoubleClick={() => setShowInput(true)}
    >
      {value || '-'}

      <button
        className="hidden group-hover:flex absolute top-1/2 right-2 -translate-y-1/2 text-white/60 hover:text-white"
        type="button"
        onClick={() => {
          setTimeout(() => {
            setShowInput(true);
          }, 0);
        }}
      >
        <PencilIcon className="size-4" />
      </button>
    </div>
  );
}

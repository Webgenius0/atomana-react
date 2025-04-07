import { Button } from '@/components/ui/button';
import { CheckIcon, PencilIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NoteCell({ getValue }) {
  const [showInput, setShowInput] = useState(false);

  const form = useForm({
    defaultValues: {
      note: getValue(),
    },
  });

  useEffect(() => {
    const hideInput = () => setShowInput(false);
    document.body.addEventListener('click', hideInput);
    return () => document.body.removeEventListener('click', hideInput);
  }, []);

  //   useEffect(() => {
  //     if (showInput && inputRef.current) {
  //       inputRef.current.focus();
  //     }
  //   }, [showInput]);

  if (showInput) {
    return (
      <form
        className="relative"
        onClick={(e) => e.stopPropagation()}
        onSubmit={form.handleSubmit((e) => {
          e.stopPropagation();
          e.preventDefault();
        })}
      >
        <input
          autoFocus
          {...form.register('note')}
          className="bg-transparent w-full text-white px-3 py-2 border border-white focus:rounded-none outline-none"
          placeholder="Enter Notes"
        />
        <div className="flex items-center absolute bottom-full right-0">
          <Button
            size="icon"
            className="bg-red-500 hover:bg-red-400 opacity-70 hover:opacity-100"
            onClick={() => setShowInput(false)}
            type="button"
          >
            <XIcon className="size-4" />
          </Button>
          <Button
            size="icon"
            className="opacity-70 hover:opacity-100"
            onClick={() => setShowInput(true)}
            type="button"
          >
            <CheckIcon className="size-4" />
          </Button>
        </div>
      </form>
    );
  }

  return (
    <div
      className="px-[10px] py-[6.5px] relative group"
      title={getValue()}
      onDoubleClick={() => setShowInput(true)}
    >
      {getValue() ? getValue()?.slice(0, 22) + '...' : '-'}

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

import DocumentSvg from '@/components/svgs/DocumentSvg';

export default function SharedNotesHome() {
  return (
    <div className="px-5 py-[25px] overflow-y-auto scrollbar-none text-center flex-1 w-full">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <button className="w-12 h-12 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#1d9aaa] shadow-[0px_0px_0px_1px_#000]">
          <DocumentSvg />
        </button>
        <h2 className="font-bold text-lg tracking-[-0.24px] text-[#ffffff80]">
          Select a note or create a new one
        </h2>
        <p className="text-sm text-[#ffffff80] max-w-lg">
          Select a note and pick up right where you left off or create a new{' '}
          note.
        </p>
      </div>
    </div>
  );
}

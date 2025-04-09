export default function NoteCell({ getValue }) {
  return (
    <div className="px-[10px] py-[6.5px]" title={getValue()}>
      {getValue() ? getValue()?.slice(0, 22) + '...' : '-'}
    </div>
  );
}

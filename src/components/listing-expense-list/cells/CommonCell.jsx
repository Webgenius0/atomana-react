export default function CommonCell({ getValue }) {
  return (
    <div className="px-[10px] py-[6.5px] first-letter:uppercase">
      {getValue() || '-'}
    </div>
  );
}

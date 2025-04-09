export default function CommonCell({ getValue, cell }) {
  const value = getValue();
  return (
    <div
      title={value}
      className="px-[10px] py-[6.5px] first-letter:uppercase truncate"
      style={{
        width: `${cell.column.getSize()}px`,
      }}
    >
      {value || '-'}
    </div>
  );
}

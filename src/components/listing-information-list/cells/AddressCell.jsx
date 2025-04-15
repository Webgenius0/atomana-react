export default function AddressCell({ getValue }) {
  const value = getValue();
  return (
    <div
      title={value}
      className="px-[10px] py-[6.5px] first-letter:uppercase"
      //   style={{
      //     width: `${cell.column.getSize()}px`,
      //   }}
    >
      {value || '-'}
    </div>
  );
}

export default function ReimbursableCell({ getValue }) {
  const reimbursable = getValue();
  return (
    <div
      className={`px-[10px] py-[6.5px] ${
        !reimbursable ? 'bg-[#b91b1b33]' : ''
      }`}
    >
      {reimbursable === undefined ? '-' : reimbursable === true ? 'Yes' : 'No'}
    </div>
  );
}

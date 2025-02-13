import { useGetExpenseTypes } from '@/hooks/expense.hook';

export default function TypeInput({ value, onChange }) {
  const { expenseTypes, isLoading } = useGetExpenseTypes();

  return (
    <td className="border border-[#5E5E5E] p-2 text-light">
      <select
        className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer w-full"
        value={value}
        onChange={(e) => onChange(e, 'type')}
        disabled={isLoading}
      >
        <option value="" className="bg-dark">
          Type
        </option>

        {expenseTypes?.map((type) => (
          <option key={type.id} value={type.id} className="bg-dark">
            {type.name}
          </option>
        ))}
      </select>
    </td>
  );
}

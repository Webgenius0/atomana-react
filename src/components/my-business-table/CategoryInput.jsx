import { useGetExpenseCategories } from '@/hooks/expense.hook';

export default function CategoryInput({ value, onChange }) {
  const { expenseCategories, isLoading } = useGetExpenseCategories();

  return (
    <td className="border border-[#5E5E5E] p-2 text-light">
      <select
        className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer w-full"
        value={value}
        onChange={(e) => onChange(e, 'category')}
        disabled={isLoading}
      >
        <option value="" className="bg-dark">
          Category
        </option>

        {expenseCategories?.map((category) => (
          <option key={category.id} value={category.id} className="bg-dark">
            {category.name}
          </option>
        ))}
      </select>
    </td>
  );
}

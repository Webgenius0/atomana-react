import {
  useGetExpenseCategories,
  useGetExpenseSubCategories,
} from '@/hooks/expense.hook';

export default function SubCategoryInput({ value, onChange, categoryId }) {
  const { expenseCategories } = useGetExpenseCategories();
  const categorySlug = expenseCategories?.find(
    (category) => category.id == categoryId
  )?.slug;
  console.log({ categorySlug });
  const { expenseSubCategories, isLoading } =
    useGetExpenseSubCategories(categorySlug);

  return (
    <td className="border border-[#5E5E5E] p-2 text-light">
      <select
        className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer w-full"
        value={value}
        onChange={(e) => onChange(e, 'subcategory')}
        disabled={isLoading}
      >
        <option value="" className="bg-dark">
          Subcategory
        </option>

        {expenseSubCategories?.map((subcategory) => (
          <option
            key={subcategory.id}
            value={subcategory.id}
            className="bg-dark"
          >
            {subcategory.name}
          </option>
        ))}
      </select>
    </td>
  );
}

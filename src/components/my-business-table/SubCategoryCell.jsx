import {
  useGetExpenseCategories,
  useGetExpenseSubCategories,
} from '@/hooks/expense.hook';

export default function SubCategoryCell({ row }) {
  const categoryId = row.expense_category_id;
  const { expenseCategories } = useGetExpenseCategories();

  const categorySlug = expenseCategories?.find(
    (category) => category.id == categoryId
  )?.slug;

  const { expenseSubCategories } = useGetExpenseSubCategories(categorySlug);
  console.log(row.expense_sub_category_id);

  const value = expenseSubCategories?.find(
    (subCategory) => subCategory.id === row.expense_sub_category_id
  )?.name;

  return (
    <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center">
      {value}
    </td>
  );
}

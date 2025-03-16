import {
  useGetExpenseCategories,
  useGetExpenseSubCategories,
} from '@/hooks/expense.hook';

export default function SubCategoryCell({ row, getValue }) {
  console.log({ row, value: getValue() });
  const categoryId = row.original.expense_category_id;
  const { expenseCategories } = useGetExpenseCategories();

  const categorySlug = expenseCategories?.find(
    (category) => category.id == categoryId
  )?.slug;

  const { expenseSubCategories } = useGetExpenseSubCategories(categorySlug);

  const value = expenseSubCategories?.find(
    (subCategory) => subCategory.id === getValue()
  )?.name;

  return <div className="px-[10px] py-[6.5px]">{value || '-'}</div>;
}

import { useGetExpenseCategories } from '@/hooks/expense.hook';

export default function CategoryCell({ getValue }) {
  const expense_category_id = getValue() || 1;
  const { expenseCategories } = useGetExpenseCategories();

  const value = expenseCategories?.find(
    (category) => category.id === expense_category_id
  )?.name;

  return (
    <div
      className={`w-full px-[10px] py-[6.5px] ${
        expense_category_id === 1
          ? 'bg-[#80CBC3] text-dark'
          : expense_category_id === 2
          ? 'bg-[#9AE4A7] text-dark'
          : expense_category_id === 3
          ? 'bg-[#F286FE] text-dark'
          : expense_category_id === 4
          ? 'bg-[#80CBC3] text-dark'
          : expense_category_id === 5
          ? 'bg-[#F286FE] text-dark'
          : expense_category_id === 6
          ? 'bg-[#86B2FE] text-dark'
          : 'text-light'
      }`}
    >
      {value || '-'}
    </div>
  );
}

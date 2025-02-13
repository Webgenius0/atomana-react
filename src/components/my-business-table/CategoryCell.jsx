import { useGetExpenseCategories } from '@/hooks/expense.hook';

export default function CategoryCell({ row }) {
  const { expenseCategories } = useGetExpenseCategories();

  const value = expenseCategories?.find(
    (category) => category.id === row.expense_category_id
  )?.name;

  return (
    <td
      className={`border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] tracking-[0.25px] font-normal min-w-[135px] ${
        row?.expense_category_id === 1
          ? 'bg-[#80CBC3] text-dark'
          : row?.expense_category_id === 2
          ? 'bg-[#9AE4A7] text-dark'
          : row?.expense_category_id === 3
          ? 'bg-[#F286FE] text-dark'
          : row?.expense_category_id === 4
          ? 'bg-[#80CBC3] text-dark'
          : row?.expense_category_id === 5
          ? 'bg-[#F286FE] text-dark'
          : row?.expense_category_id === 6
          ? 'bg-[#86B2FE] text-dark'
          : 'text-light'
      }`}
    >
      {value || '-'}
    </td>
  );
}

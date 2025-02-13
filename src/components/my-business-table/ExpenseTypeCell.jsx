import { useGetExpenseTypes } from '@/hooks/expense.hook';

export default function ExpenseTypeCell({ row }) {
  const { expenseTypes } = useGetExpenseTypes();

  const value = expenseTypes?.find(
    (type) => type.id === row.expense_type_id
  )?.name;

  return (
    <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[140px]">
      {value || '-'}
    </td>
  );
}

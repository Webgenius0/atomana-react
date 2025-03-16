import CategoryCell from './cells/CategoryCell';
import CommonCell from './cells/CommonCell';
import CurrencyCell from './cells/CurrencyCell';
import DescriptionCell from './cells/DescriptionCell';
import NoteCell from './cells/NoteCell';
import PaymentMethodCell from './cells/PaymentMethodCell';
import ReceiptCell from './cells/ReceiptCell';
import ReimbursableCell from './cells/ReimbursableCell';
import SubCategoryCell from './cells/SubCategoryCell';

export const columns = [
  {
    id: 'select-col',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        // indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
    size: 10,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: CommonCell,
    size: 75,
  },
  {
    accessorKey: 'expense_category_id',
    header: 'Category',
    cell: CategoryCell,
    size: 135,
  },
  {
    accessorKey: 'expense_sub_category_id',
    header: 'Subcategory',
    cell: SubCategoryCell,
    size: 125,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: DescriptionCell,
    size: 200,
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: CurrencyCell,
    size: 75,
  },
  {
    accessorKey: 'payment_method_id',
    header: 'Payment Method',
    cell: PaymentMethodCell,
    size: 100,
  },
  {
    accessorKey: 'payee',
    header: 'Vendor / Payee',
    cell: CommonCell,
    size: 150,
  },
  {
    accessorKey: 'recept',
    header: 'Receipt',
    cell: ReceiptCell,
    size: 125,
  },
  {
    accessorKey: 'owner',
    header: 'Owner',
    cell: CommonCell,
    size: 110,
  },
  {
    accessorKey: 'reimbursable',
    header: 'Reimbursable',
    cell: ReimbursableCell,
    size: 75,
  },
  {
    accessorKey: 'listing',
    header: 'Listing',
    cell: CommonCell,
    size: 100,
  },
  {
    accessorKey: 'note',
    header: 'Notes',
    cell: NoteCell,
    size: 150,
  },
];

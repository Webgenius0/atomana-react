import CategoryCell from './cells/CategoryCell';
import CommonCell from './cells/CommonCell';
import CurrencyCell from './cells/CurrencyCell';
import DescriptionCell from './cells/DescriptionCell';
import NoteCell from './cells/NoteCell';
import PaymentMethodCell from './cells/PaymentMethodCell';
import ReceiptCell from './cells/ReceiptCell';
import ReimbursableCell from './cells/ReimbursableCell';
import SubCategoryCell from './cells/SubCategoryCell';
import AmountInput from './inputs/AmountInput';
import CategoryInput from './inputs/CategoryInput';
import CommonInput from './inputs/CommonInput';
import DateInput from './inputs/DateInput';
import DescriptionInput from './inputs/DescriptionInput';
import PaymentMethodInput from './inputs/PaymentMethodInput';
import ReceiptInput from './inputs/ReceiptInput';
import SubcategoryInput from './inputs/SubcategoryInput';
import VendorInput from './inputs/VendorInput';

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
    footer: DateInput,
  },
  {
    accessorKey: 'expense_category_id',
    header: 'Category',
    cell: CategoryCell,
    size: 135,
    footer: CategoryInput,
  },
  {
    accessorKey: 'expense_sub_category_id',
    header: 'Subcategory',
    cell: SubCategoryCell,
    size: 125,
    footer: SubcategoryInput,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: DescriptionCell,
    size: 200,
    footer: DescriptionInput,
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: CurrencyCell,
    size: 100,
    footer: AmountInput,
  },
  {
    accessorKey: 'payment_method_id',
    header: 'Payment Method',
    cell: PaymentMethodCell,
    size: 100,
    footer: PaymentMethodInput,
  },
  {
    accessorKey: 'user_id',
    header: 'Vendor / Payee',
    cell: CommonCell,
    size: 150,
    footer: VendorInput,
  },
  {
    accessorKey: 'recept',
    header: 'Receipt',
    cell: ReceiptCell,
    size: 150,
    footer: ReceiptInput,
  },
  {
    accessorKey: 'owner',
    header: 'Owner',
    cell: CommonCell,
    size: 110,
    footer: CommonInput,
  },
  {
    accessorKey: 'reimbursable',
    header: 'Reimbursable',
    cell: ReimbursableCell,
    size: 75,
    footer: CommonInput,
  },
  {
    accessorKey: 'listing',
    header: 'Listing',
    cell: CommonCell,
    size: 100,
    footer: CommonInput,
  },
  {
    accessorKey: 'note',
    header: 'Notes',
    cell: NoteCell,
    size: 150,
    footer: CommonInput,
  },
];

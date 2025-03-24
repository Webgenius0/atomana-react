import CommonCell from './cells/CommonCell';
import DateInput from './inputs/DateInput';

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
  //   {
  //     accessorKey: 'expense_category_id',
  //     header: 'Category',
  //     cell: CategoryCell,
  //     size: 135,
  //     footer: CategoryInput,
  //   },
  //   {
  //     accessorKey: 'expense_sub_category_id',
  //     header: 'Subcategory',
  //     cell: SubCategoryCell,
  //     size: 125,
  //     footer: SubcategoryInput,
  //   },
  //   {
  //     accessorKey: 'description',
  //     header: 'Description',
  //     cell: DescriptionCell,
  //     size: 200,
  //     footer: DescriptionInput,
  //   },
  //   {
  //     accessorKey: 'amount',
  //     header: 'Amount',
  //     cell: CurrencyCell,
  //     size: 100,
  //     footer: AmountInput,
  //   },
  //   {
  //     accessorKey: 'payment_method_id',
  //     header: 'Payment Method',
  //     cell: PaymentMethodCell,
  //     size: 100,
  //     footer: PaymentMethodInput,
  //   },
  //   {
  //     accessorKey: 'payee',
  //     header: 'Vendor / Payee',
  //     cell: CommonCell,
  //     size: 150,
  //     footer: VendorInput,
  //   },
  //   {
  //     accessorKey: 'recept',
  //     header: 'Receipt',
  //     cell: ReceiptCell,
  //     size: 150,
  //     footer: ReceiptInput,
  //   },
  //   {
  //     accessorKey: 'user_id',
  //     header: 'Owner',
  //     cell: CommonCell,
  //     size: 110,
  //     footer: OwnerInput,
  //   },
  //   {
  //     accessorKey: 'reimbursable',
  //     header: 'Reimbursable',
  //     cell: ReimbursableCell,
  //     size: 75,
  //     footer: ReimbursableInput,
  //   },
  //   {
  //     accessorKey: 'listing',
  //     header: 'Listing',
  //     cell: CommonCell,
  //     size: 100,
  //     footer: ListingInput,
  //   },
  //   {
  //     accessorKey: 'note',
  //     header: 'Notes',
  //     cell: NoteCell,
  //     size: 150,
  //     footer: NotesInput,
  //   },
];

import CommonCell from './cells/CommonCell';
import CurrencyCell from './cells/CurrencyCell';
import NoteCell from './cells/NoteCell';
import PropertyAddressCell from './cells/PropertyAddressCell';
import ReferralFeeCell from './cells/ReferralFeeCell';
import UserNameCell from './cells/UserNameCell';
import BuyerSellerInput from './inputs/BuyerSellerInput';
import ClosingDateInput from './inputs/ClosingDateInput';
import CommissionOnSaleInput from './inputs/CommissionOnSaleInput';
import DateUnderContractInput from './inputs/DateUnderContractInput';
import NotesInput from './inputs/NotesInput';
import OverrideSplitInput from './inputs/OverrideSplitInput';
import PriceInput from './inputs/PriceInput';
import PropertyInput from './inputs/PropertyInput';
import PurchasePriceInput from './inputs/PurchasePriceInput';
import ReferralFeeInput from './inputs/ReferralFeeInput';
import StatusInput from './inputs/StatusInput';
import UserInput from './inputs/UserInput';

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
    accessorKey: 'user_id',
    header: 'Agent',
    cell: UserNameCell,
    size: 110,
    footer: UserInput,
  },
  {
    accessorKey: 'address',
    header: 'Property Address',
    cell: PropertyAddressCell,
    size: 180,
    footer: PropertyInput,
  },
  {
    accessorKey: 'list_price',
    header: 'Price',
    cell: CurrencyCell,
    size: 125,
    footer: PriceInput,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: CommonCell,
    size: 125,
    footer: StatusInput,
  },
  {
    accessorKey: 'date_under_contract',
    header: 'Date Under Contract',
    cell: CommonCell,
    size: 160,
    footer: DateUnderContractInput,
  },
  {
    accessorKey: 'closing_date',
    header: 'Closing Date',
    cell: CommonCell,
    size: 160,
    footer: ClosingDateInput,
  },
  {
    accessorKey: 'purchase_price',
    header: 'Purchase Price',
    cell: CurrencyCell,
    size: 125,
    footer: PurchasePriceInput,
  },
  {
    accessorKey: 'referral_fee_pct',
    header: 'Referral Fee',
    cell: ReferralFeeCell,
    size: 125,
    footer: ReferralFeeInput,
  },
  {
    accessorKey: 'buyer_seller',
    header: 'Buyer Seller',
    cell: CommonCell,
    size: 125,
    footer: BuyerSellerInput,
  },
  {
    accessorKey: 'commission_on_sale',
    header: 'Commission On Sale',
    cell: CommonCell,
    size: 125,
    footer: CommissionOnSaleInput,
  },
  {
    accessorKey: 'note',
    header: 'Note',
    cell: NoteCell,
    size: 180,
    footer: NotesInput,
  },
  {
    accessorKey: 'override_split',
    header: 'Override Split',
    cell: CommonCell,
    size: 125,
    footer: OverrideSplitInput,
  },
  //   {
  //     accessorKey: 'date',
  //     header: 'Date',
  //     cell: CommonCell,
  //     size: 75,
  //     footer: DateInput,
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

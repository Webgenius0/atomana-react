import CommonCell from './cells/CommonCell';
import CurrencyCell from './cells/CurrencyCell';
import BuyerSellerInput from './inputs/BuyerSellerInput';
import ClosingDateInput from './inputs/ClosingDateInput';
import CommissionOnSaleInput from './inputs/CommissionOnSaleInput';
import DateUnderContractInput from './inputs/DateUnderContractInput';
import OwnerInput from './inputs/OwnerInput';
import PriceInput from './inputs/PriceInput';
import PropertyInput from './inputs/PropertyInput';
import PurchasePriceInput from './inputs/PurchasePriceInput';
import ReferralFeeInput from './inputs/ReferralFeeInput';
import StatusInput from './inputs/StatusInput';

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
    accessorKey: 'user_name',
    header: 'Agent Name',
    cell: CommonCell,
    size: 110,
    footer: OwnerInput,
  },
  {
    accessorKey: 'sales_closed',
    header: '# of Sales Closed (YTD)',
    cell: CommonCell,
    size: 110,
    footer: OwnerInput,
  },
  {
    accessorKey: 'dollars_on_closed_deals_ytd',
    header: 'Dollars on Closed Deals (YTD)',
    cell: CurrencyCell,
    size: 135,
    footer: PropertyInput,
  },
  {
    accessorKey: 'percentage_total_dollars_on_close_deal',
    header: '% of Total Dollars on Closed Deals',
    cell: CommonCell,
    size: 125,
    footer: PriceInput,
  },
  {
    accessorKey: 'current_year_start',
    header: "Agent's Current Contract Year",
    cell: CommonCell,
    size: 125,
    footer: StatusInput,
  },
  {
    accessorKey: 'gross_commission_income_ytd',
    header: 'Gross Commission Income (YTD)',
    cell: CurrencyCell,
    size: 125,
    footer: StatusInput,
  },
  {
    accessorKey: 'brokerage_cut_ytd',
    header: 'Brokerage Cut (YTD)',
    cell: CurrencyCell,
    size: 160,
    footer: DateUnderContractInput,
  },
  {
    accessorKey: 'net_commission_ytd',
    header: 'Net Commission (YTD)',
    cell: CurrencyCell,
    size: 125,
    footer: ClosingDateInput,
  },
  {
    accessorKey: 'agent_net_income_ytd',
    header: 'Agent Net Income (YTD)',
    cell: CurrencyCell,
    size: 125,
    footer: PurchasePriceInput,
  },
  {
    accessorKey: 'group_gross_income_ytd',
    header: 'Group Gross Income (YTD)',
    cell: CurrencyCell,
    size: 125,
    footer: ReferralFeeInput,
  },
  {
    accessorKey: 'group_net_ytd',
    header: 'Group Net Income (YTD)',
    cell: CurrencyCell,
    size: 125,
    footer: BuyerSellerInput,
  },
  {
    accessorKey: 'percentage_group_gross_income_ytd',
    header: '% of Total Group Net Income',
    cell: CommonCell,
    size: 125,
    footer: CommissionOnSaleInput,
  },
];

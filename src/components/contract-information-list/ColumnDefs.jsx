import ActionCell from './cells/ActionCell';
import AddressCell from './cells/AddressCell';

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
    accessorKey: 'address',
    header: 'Property Address',
    cell: AddressCell,
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ActionCell,
    size: 10,
  },
];

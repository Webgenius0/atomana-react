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
  //   {
  //     accessorKey: 'property_type',
  //     header: 'Property Type',
  //     cell: CommonCell,
  //     size: 125,
  //   },
  //   {
  //     accessorKey: 'price',
  //     header: 'Price',
  //     cell: CurrencyCell,
  //     size: 125,
  //   },
  //   {
  //     accessorKey: 'size',
  //     header: 'Size',
  //     cell: CommonCell,
  //     size: 125,
  //   },
  //   {
  //     accessorKey: 'key_access_code',
  //     header: 'Key Access Code',
  //     cell: CommonCell,
  //     size: 180,
  //   },
  //   {
  //     accessorKey: 'lockbox_location',
  //     header: 'Lockbox Location',
  //     cell: CommonCell,
  //     size: 180,
  //   },
  //   {
  //     accessorKey: 'key_pickup_instructions',
  //     header: 'Key Pickup Instructions',
  //     cell: CommonCell,
  //     size: 180,
  //   },
  //   {
  //     accessorKey: 'gate_code',
  //     header: 'Gate Code',
  //     cell: CommonCell,
  //     size: 180,
  //   },
  //   {
  //     accessorKey: 'gate_access_location',
  //     header: 'Gate Access Location',
  //     cell: CommonCell,
  //     size: 180,
  //   },
  //   {
  //     accessorKey: 'visitor_parking',
  //     header: 'Visitor Parking',
  //     cell: CommonCell,
  //     size: 180,
  //   },
  //   {
  //     accessorKey: 'notes',
  //     header: 'Notes',
  //     cell: NoteCell,
  //     size: 180,
  //   },
];

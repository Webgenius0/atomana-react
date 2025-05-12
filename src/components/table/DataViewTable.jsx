import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import { DataTableProvider } from './DataTableContext';

export default function DataViewTable({
  columns,
  data = [],
  isLoading,
  perPage,
  rowSelection,
  setRowSelection,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  const navigate = useNavigate();

  return (
    <DataTableProvider>
      <div className="mt-12 overflow-x-auto">
        <table className="border-collapse font-Roboto text-[10px] text-center tracking-[0.25px] font-normal rounded-2xl overflow-x-auto min-w-full">
          {/* Header */}
          <thead className="text-white/60 rounded-2xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="border border-[#5E5E5E] px-[10px] py-[6.5px]"
                      style={{ minWidth: `${header.getSize()}px` }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          {/* Body */}
          <tbody>
            {table.getRowModel().rows?.length > 0 &&
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={`${row?.original?.path && 'cursor-pointer group'}`}
                  onClick={() => {
                    if (row?.original?.path) {
                      navigate(row?.original?.path);
                    }
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={
                        'border border-[#5E5E5E] text-white group-hover:text-white/70'
                      }
                      onClick={(e) => {
                        cell.column.id === 'select-col' && e.stopPropagation();
                      }}
                      style={{
                        minWidth: `${cell.column.getSize()}px`,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}

            {isLoading &&
              [...Array(perPage || 10)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {table
                    .getHeaderGroups()[0]
                    .headers.map((header, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-[#5E5E5E] text-white animate-pulse px-[10px] py-[6.5px] "
                        style={{
                          minWidth: `${header.column.getSize()}px`,
                        }}
                      >
                        <div className="bg-[#5E5E5E] rounded h-[20px]" />
                      </td>
                    ))}
                </tr>
              ))}

            {!isLoading && table.getRowModel().rows?.length < 1 && (
              <tr className="border border-[#5E5E5E]">
                <td
                  colSpan={columns.length}
                  className="h-24 text-center text-sm text-white/60"
                >
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DataTableProvider>
  );
}

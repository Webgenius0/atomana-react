import { cn } from '@/lib/utils';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FormProvider } from 'react-hook-form';
import { DataTableProvider } from './DataTableContext';

export default function DataTable({
  form = {},
  onSubmit,
  columns,
  data = [],
  isLoading,
  isPending,
  showInputs,
  setShowInputs,
  perPage,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DataTableProvider>
      <FormProvider {...form}>
        <form
          className="mt-12 overflow-x-auto"
          onSubmit={form?.handleSubmit?.(onSubmit)}
        >
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
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={'border border-[#5E5E5E] text-white'}
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
                [...Array(perPage)].map((_, rowIndex) => (
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

            {/* Footer (Inputs) */}
            {!isLoading && onSubmit && (
              <tfoot>
                {showInputs &&
                  table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          colSpan={header.colSpan}
                          className="text-center text-white/60 border border-[#5E5E5E] px-[10px] py-[6.5px]"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}

                {/* Action Buttons */}
                <tr>
                  <td className="text-center text-white/60 border border-[#5E5E5E] px-[10px] py-[6.5px]"></td>
                  {showInputs ? (
                    <td
                      colSpan={13}
                      className="cursor-pointer px-4 py-2 border border-[#5E5E5E] text-[11px] font-Roboto text-[#ffffff4d]"
                    >
                      <div className="flex items-center space-x-4">
                        <button
                          className={cn(
                            'px-3 py-2 bg-green-600 hover:bg-green-700 border border-green-600 rounded-lg text-white text-xs font-medium font-Roboto transition duration-200 ease-in-out shadow-md',
                            { 'opacity-60': isPending }
                          )}
                          disabled={isPending}
                        >
                          Confirm
                        </button>
                        <button
                          className={cn(
                            'px-3 py-2 bg-red-600 hover:bg-red-700 border border-red-600 rounded-lg text-white text-xs font-medium font-Roboto transition duration-200 ease-in-out shadow-md',
                            { 'opacity-60': isPending }
                          )}
                          onClick={() => setShowInputs(false)}
                          disabled={isPending}
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  ) : (
                    <td
                      className="text-white/60 border border-[#5E5E5E] px-3 py-2 text-left cursor-pointer"
                      colSpan="100%"
                      onClick={() => setShowInputs(true)}
                    >
                      + Add an Expense
                    </td>
                  )}
                </tr>
              </tfoot>
            )}
          </table>
        </form>
      </FormProvider>
    </DataTableProvider>
  );
}

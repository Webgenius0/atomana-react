import { useStoreMyListingExpenses } from '@/hooks/expense.hook';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const getDefaultRow = (columnDef) => {
  const row = { selected: false };
  columnDef.forEach((column) => (row[column.key] = column.defaultValue));
  return row;
};

const Table = ({ columnDef = [], data = [] }) => {
  const [columns] = useState(columnDef);
  const [tableData, setTableData] = useState(
    data?.map((item) => ({ ...item, selected: false }))
  );
  const [newRow, setNewRow] = useState(getDefaultRow(columns));
  const [showDynamicRow, setShowDynamicRow] = useState(false);

  const {
    mutate: storeListingExpense,
    data: storeResponse,
    isPending,
    isSuccess,
  } = useStoreMyListingExpenses();

  useEffect(() => {
    setTableData(data?.map((item) => ({ ...item, selected: false })));
  }, [data]);

  const handleInputChange = (e, field) => {
    if (e.target?.files?.[0]?.name) {
      setNewRow({ ...newRow, [field]: e.target?.files[0] });
    } else {
      setNewRow({ ...newRow, [field]: e.target.value });
    }
  };

  const handleAddExpense = () => {
    setShowDynamicRow(true);
    setNewRow(getDefaultRow(columns));
  };

  const handleConfirmExpense = () => {
    storeListingExpense(newRow);
  };

  useEffect(() => {
    if (storeResponse?.success && !isPending && isSuccess) {
      setShowDynamicRow(false);
    }
  }, [storeResponse, isPending, isSuccess]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-[#5E5E5E]">
        <thead>
          <tr>
            <th className="border border-[#5E5E5E] text-center">
              <input
                type="checkbox"
                onChange={(e) => {
                  const checked = e.target.checked;
                  setTableData(
                    tableData?.map((row) => ({ ...row, selected: checked }))
                  );
                }}
              />
            </th>
            {columns
              .map((column) => column.header)
              .map((header) => (
                <th
                  className="border border-[#5E5E5E] py-2 font-Roboto text-[11px] text-[#ffffff99] tracking-[0.25px] font-normal text-center"
                  key={header}
                >
                  {header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={index} className="">
              <td className="border border-[#5E5E5E] p-2">
                <input
                  type="checkbox"
                  checked={row.selected || false}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setTableData(
                      tableData?.map((r, i) =>
                        i === index ? { ...r, selected: checked } : r
                      )
                    );
                  }}
                />
              </td>

              {columns.map((column) => {
                if (column.cell && typeof column.cell === 'function') {
                  return column.cell(row);
                } else {
                  return (
                    <td
                      key={column.key}
                      className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center"
                      style={{
                        minWidth: column.width,
                      }}
                    >
                      {column.cell || row[column.key] || '-'}
                    </td>
                  );
                }
              })}
            </tr>
          ))}

          {/* new dynamic row */}

          {showDynamicRow && (
            <tr>
              <td className="border border-[#5E5E5E] p-2">
                <input
                  type="checkbox"
                  checked={newRow.selected}
                  onChange={(e) =>
                    setNewRow({ ...newRow, selected: e.target.checked })
                  }
                />
              </td>
              {columns.map((column) => {
                if (column.input && typeof column.input === 'function') {
                  return column.input(
                    newRow[column.key],
                    handleInputChange,
                    newRow
                  );
                } else {
                  return (
                    <td
                      key={column.key}
                      className="border border-[#5E5E5E] p-2"
                    >
                      <input
                        className="w-full border bg-transparent p-2 text-[11px] text-light tracking-[0.25px] rounded"
                        placeholder={column.placeholder || 'Write here'}
                        value={newRow[column.key]}
                        onChange={(e) => handleInputChange(e, column.key)}
                      />
                    </td>
                  );
                }
              })}
            </tr>
          )}

          <tr>
            <td className="border border-[#5E5E5E] p-2">
              <input
                type="checkbox"
                checked={newRow.selected}
                onChange={(e) =>
                  setNewRow({ ...newRow, selected: e.target.checked })
                }
              />
            </td>
            {!showDynamicRow && (
              <td
                colSpan={13}
                className="cursor-pointer px-4 py-2 border border-[#5E5E5E] text-[11px] font-Roboto text-[#ffffff4d]"
                onClick={handleAddExpense}
              >
                + Add an Expense
              </td>
            )}
            {showDynamicRow && (
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
                    onClick={handleConfirmExpense}
                    disabled={isPending}
                  >
                    Confirm
                  </button>
                  <button
                    className={cn(
                      'px-3 py-2 bg-red-600 hover:bg-red-700 border border-red-600 rounded-lg text-white text-xs font-medium font-Roboto transition duration-200 ease-in-out shadow-md',
                      { 'opacity-60': isPending }
                    )}
                    onClick={() => setShowDynamicRow(false)}
                    disabled={isPending}
                  >
                    Cancel
                  </button>
                </div>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

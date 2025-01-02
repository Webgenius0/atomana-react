import React from "react";
import { FileText, User } from "lucide-react";

const TableRow = ({ transaction }) => {
  const getTypeStyle = (type) => {
    return type === "Income"
      ? "bg-green-900/50 text-green-400"
      : type === "Expense"
      ? "bg-red-900/50 text-red-400"
      : "bg-purple-900/50 text-purple-400";
  };

  return (
    <tr className="hover:bg-gray-750/50 transition-colors duration-200">
      <td className="p-3">
        <input
          type="checkbox"
          className="rounded bg-gray-700 border-gray-600"
        />
      </td>
      <td className="p-3 text-sm text-gray-300">{transaction.date}</td>
      <td className="p-3">
        <span
          className={`px-2 py-1 text-xs rounded-full ${getTypeStyle(
            transaction.type
          )}`}
        >
          {transaction.type}
        </span>
      </td>
      <td className="p-3">
        <span className="px-2 py-1 text-xs rounded-full bg-teal-900/50 text-teal-400">
          {transaction.category}
        </span>
      </td>
      <td className="p-3 text-sm text-gray-300">{transaction.description}</td>
      <td className="p-3 text-right text-sm font-medium text-gray-300">
        $
        {transaction.amount.toLocaleString("en-US", {
          minimumFractionDigits: 2,
        })}
      </td>
      <td className="p-3 text-sm text-gray-300">{transaction.paymentMethod}</td>
      <td className="p-3 text-sm text-gray-300">{transaction.vendorPayee}</td>
      <td className="p-3">
        <div className="flex items-center space-x-1 text-blue-400">
          <FileText size={16} />
          <span className="text-sm">{transaction.receipt}</span>
        </div>
      </td>
      <td className="p-3">
        <div className="flex items-center space-x-1 text-gray-300">
          <User size={16} />
          <span className="text-sm">{transaction.owner}</span>
        </div>
      </td>
      <td className="p-3 text-center">
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            transaction.reimbursable
              ? "bg-green-900/50 text-green-400"
              : "bg-red-900/50 text-red-400"
          }`}
        >
          {transaction.reimbursable ? "Yes" : "No"}
        </span>
      </td>
      <td className="p-3 text-sm text-gray-300">{transaction.listing}</td>
      <td className="p-3 text-sm text-gray-300">{transaction.notes}</td>
    </tr>
  );
};

export default TableRow;

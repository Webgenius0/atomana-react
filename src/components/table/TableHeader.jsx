import React from "react";

const TableHeader = () => (
  <thead>
    <tr className="bg-gray-800">
      <th className="w-10 p-3">
        <input
          type="checkbox"
          className="rounded bg-gray-700 border-gray-600"
        />
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Date
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Type
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Category
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Description
      </th>
      <th className="p-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
        Amount
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Payment Method
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Vendor/Payee
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Receipt
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Owner
      </th>
      <th className="p-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
        Reimbursable
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Listing
      </th>
      <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
        Notes
      </th>
    </tr>
  </thead>
);

export default TableHeader;

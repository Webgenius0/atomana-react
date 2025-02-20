import { useGetMyListingExpenses } from '@/hooks/expense.hook';
import { format } from 'date-fns';
import { useState } from 'react';
import AmountCell from './AmountCell';
import Table from './Table';

const columnDef = [
  {
    key: 'owner',
    header: 'Agent',
    defaultValue: '',
    cell: (row) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-[#009696] tracking-[0.25px] font-normal text-center min-w-[110px]">
          {row.owner ? (
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clipPath="url(#clip0_2401_11593)">
                  <path
                    d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5C1.25 10.95 4.05 13.75 7.5 13.75C10.95 13.75 13.75 10.95 13.75 7.5C13.75 4.05 10.95 1.25 7.5 1.25ZM4.41875 11.425C4.6875 10.8625 6.325 10.3125 7.5 10.3125C8.675 10.3125 10.3188 10.8625 10.5813 11.425C9.73125 12.1 8.6625 12.5 7.5 12.5C6.3375 12.5 5.26875 12.1 4.41875 11.425ZM11.475 10.5188C10.5813 9.43125 8.4125 9.0625 7.5 9.0625C6.5875 9.0625 4.41875 9.43125 3.525 10.5188C2.8875 9.68125 2.5 8.6375 2.5 7.5C2.5 4.74375 4.74375 2.5 7.5 2.5C10.2563 2.5 12.5 4.74375 12.5 7.5C12.5 8.6375 12.1125 9.68125 11.475 10.5188ZM7.5 3.75C6.2875 3.75 5.3125 4.725 5.3125 5.9375C5.3125 7.15 6.2875 8.125 7.5 8.125C8.7125 8.125 9.6875 7.15 9.6875 5.9375C9.6875 4.725 8.7125 3.75 7.5 3.75ZM7.5 6.875C6.98125 6.875 6.5625 6.45625 6.5625 5.9375C6.5625 5.41875 6.98125 5 7.5 5C8.01875 5 8.4375 5.41875 8.4375 5.9375C8.4375 6.45625 8.01875 6.875 7.5 6.875Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2401_11593">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {row.owner}
            </div>
          ) : (
            <div>-</div>
          )}
        </td>
      );
    },
    placeholder: 'Enter Agent Name',
  },
  {
    key: 'listing',
    header: 'Property Address',
    width: 100,
    defaultValue: '',
    placeholder: 'Enter Property Address',
  },
  {
    key: 'date',
    header: 'List Date',
    width: 73,
    defaultValue: format(new Date(), 'dd/MM/yyyy'),
    input: (value, onChange) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center">
          <input
            type="date"
            value={value}
            className="w-full border bg-transparent p-2 text-[11px] text-light tracking-[0.25px] rounded"
            onChange={(e) => onChange(e, 'date')}
          />
        </td>
      );
    },
  },
  {
    key: 'amount',
    header: 'List Price',
    defaultValue: '',
    placeholder: 'Enter List Price',
    cell: (row) => {
      return <AmountCell row={row} />;
    },
  },
  {
    key: 'date',
    header: 'Expiration Date',
    width: 73,
    defaultValue: format(new Date(), 'dd/MM/yyyy'),
    input: (value, onChange) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center">
          <input
            type="date"
            value={value}
            className="w-full border bg-transparent p-2 text-[11px] text-light tracking-[0.25px] rounded"
            onChange={(e) => onChange(e, 'date')}
          />
        </td>
      );
    },
  },
  {
    key: 'reimbursable',
    header: 'Listing Status',
    defaultValue: '',
    cell: (row) => {
      return (
        <td
          className={`border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[75px] ${
            !row?.reimbursable ? 'bg-[#b91b1b33]' : ''
          }`}
        >
          {row.reimbursable === undefined
            ? '-'
            : row.reimbursable === true
            ? 'Yes'
            : 'No'}
        </td>
      );
    },
    input: (value, onChange) => {
      return (
        <td className="border border-[#5E5E5E] p-2">
          <select
            className="w-fit py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer"
            value={value}
            onChange={(e) => onChange(e, 'reimbursable')}
          >
            <option value="" className="bg-dark">
              Reimbursable
            </option>
            <option value="1" className="bg-dark">
              Yes
            </option>
            <option value="0" className="bg-dark">
              No
            </option>
          </select>
        </td>
      );
    },
  },
  {
    key: 'note',
    header: 'Notes',
    defaultValue: '',
    placeholder: 'Enter notes',
    cell: (row) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[150px]">
          {row?.note ? row?.note?.slice(0, 40) + '...' : '-'}
        </td>
      );
    },
  },
];

export default function SalesTrackerTable() {
  const [perPage] = useState(25);
  const [page] = useState(1);

  const { myListingExpenses } = useGetMyListingExpenses({
    per_page: perPage,
    page,
  });

  return <Table columnDef={columnDef} data={myListingExpenses} />;
}

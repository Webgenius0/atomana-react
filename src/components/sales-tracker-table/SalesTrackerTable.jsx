import { useGetSalesTrack } from '@/hooks/expense.hook';
import { format } from 'date-fns';
import { useState } from 'react';
import AgentCell from './AgentCell';
import AgentInput from './AgentInput';
import PriceCell from './PriceCell';
import PropertyInput from './PropertyInput';
import Table from './Table';

const columnDef = [
  {
    key: 'user_id',
    header: 'Agent',
    defaultValue: '',
    cell: (row) => {
      return <AgentCell row={row} />;
    },
    input: (value, onChange) => {
      return <AgentInput value={value} onChange={onChange} />;
    },
  },
  {
    key: 'address',
    header: 'Property Address',
    width: 100,
    defaultValue: '',
    input: (value, onChange) => {
      return <PropertyInput value={value} onChange={onChange} />;
    },
  },
  {
    key: 'date',
    header: 'List Date',
    width: 73,
    defaultValue: format(new Date(), 'dd/MM/yyyy'),
    cell: () => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center">
          {format(new Date(), 'dd/MM/yyyy')}
        </td>
      );
    },
    input: (value) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center">
          <span className="w-full">{value || '-'}</span>
        </td>
      );
    },
  },
  {
    key: 'price',
    header: 'List Price',
    defaultValue: '',
    placeholder: 'Enter List Price',
    cell: (row) => {
      return <PriceCell row={row} />;
    },
  },
  {
    key: 'expiration_date',
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
            onChange={(e) => onChange(e, 'expiration_date')}
          />
        </td>
      );
    },
  },
  {
    key: 'status',
    header: 'Listing Status',
    defaultValue: '',
    cell: (row) => {
      return (
        <td
          className={`border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[75px] ${
            !row?.status ? 'bg-[#b91b1b33]' : ''
          }`}
        >
          {row.status === undefined ? '-' : row.status === true ? 'Yes' : 'No'}
        </td>
      );
    },
    input: (value, onChange) => {
      return (
        <td className="border border-[#5E5E5E] p-2">
          <select
            className="w-fit py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer"
            value={value}
            onChange={(e) => onChange(e, 'status')}
          >
            <option value="" className="bg-dark">
              Status
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

  const { salesTrack } = useGetSalesTrack({
    per_page: perPage,
    page,
  });

  return <Table columnDef={columnDef} data={salesTrack} />;
}

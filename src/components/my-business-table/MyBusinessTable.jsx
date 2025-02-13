import { useGetMyBusinessExpenses } from '@/hooks/expense.hook';
import { useState } from 'react';
import AmountCell from './AmountCell';
import CategoryCell from './CategoryCell';
import CategoryInput from './CategoryInput';
import ExpenseTypeCell from './ExpenseTypeCell';
import PaymentMethodCell from './PaymentMethodCell';
import PaymentMethodInput from './PaymentMethodInput';
import ReceiptCell from './ReceiptCell';
import SubCategoryCell from './SubCategoryCell';
import SubCategoryInput from './SubCategoryInput';
import Table from './Table';
import TypeInput from './TypeInput';
import VendorCell from './VendorCell';

const columnDef = [
  {
    key: 'date',
    header: 'Date',
    width: 73,
    defaultValue: new Date().toLocaleDateString(),
    input: (value, onChange) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center">
          <span className="w-full" onChange={(e) => onChange(e, 'date')}>
            {value}
          </span>
        </td>
      );
    },
  },
  {
    key: 'expense_type_id',
    header: 'Type',
    defaultValue: '',
    cell: (row) => {
      return <ExpenseTypeCell row={row} />;
    },
    input: (value, onChange) => {
      return <TypeInput value={value} onChange={onChange} />;
    },
  },
  {
    key: 'expense_category_id',
    header: 'Category',
    width: 75,
    defaultValue: '',
    cell: (row) => {
      return <CategoryCell row={row} />;
    },
    input: (value, onChange) => {
      return <CategoryInput value={value} onChange={onChange} />;
    },
  },
  {
    key: 'expense_sub_category_id',
    header: 'Subcategory',
    width: 125,
    defaultValue: '',
    cell: (row) => {
      return <SubCategoryCell row={row} />;
    },
    input: (value, onChange, row) => {
      return (
        <SubCategoryInput
          value={value}
          onChange={onChange}
          categoryId={row.category}
        />
      );
    },
  },
  {
    key: 'description',
    header: 'Description',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter description',
    cell: (row) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[200px]">
          {row?.description?.slice(0, 40) + '...'}
        </td>
      );
    },
  },
  {
    key: 'amount',
    header: 'Amount',
    defaultValue: '',
    placeholder: 'Enter amount',
    cell: (row) => {
      return <AmountCell row={row} />;
    },
  },
  {
    key: 'payment_method_id',
    header: 'Payment Method',
    defaultValue: '',
    cell: (row) => {
      return <PaymentMethodCell row={row} />;
    },
    input: (value, onChange) => {
      return <PaymentMethodInput value={value} onChange={onChange} />;
    },
  },
  {
    key: 'vendor_id',
    header: 'Payee / Client',
    defaultValue: '',
    cell: (row) => {
      return <VendorCell row={row} />;
    },
    input: (value, onChange) => {
      return (
        <td className="border border-[#5E5E5E] p-2">
          <select
            className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer"
            value={value}
            onChange={(e) => onChange(e, 'vendor_id')}
          >
            <option value="" className="bg-dark">
              Payee / Client
            </option>
            <option value="Client Payment" className="bg-dark">
              Client Payment
            </option>
            <option value="Staging Company" className="bg-dark">
              Staging Company
            </option>
            <option value="Referral Agent" className="bg-dark">
              Referral Agent
            </option>
            <option value="Google Ads" className="bg-dark">
              Google Ads
            </option>
            <option value="ISP Provider" className="bg-dark">
              ISP Provider
            </option>
            <option value="Association Inc" className="bg-dark">
              Association Inc
            </option>
          </select>
        </td>
      );
    },
  },
  {
    key: 'recept_name',
    header: 'Receipt',
    defaultValue: '',
    cell: (row) => {
      return <ReceiptCell row={row} />;
    },
    input: (value, onChange) => {
      return (
        <td className="border border-[#5E5E5E] p-2">
          <label className="flex items-center gap-1 py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer">
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.2041 5.71875C8.29525 5.63086 8.40592 5.58366 8.53613 5.57715C8.66634 5.57064 8.77539 5.61458 8.86328 5.70898C8.95768 5.79688 9.00488 5.91081 9.00488 6.05078C9.00488 6.1875 8.95931 6.2998 8.86816 6.3877L5.23047 10.0254C4.91471 10.3379 4.57292 10.569 4.20508 10.7188C3.83724 10.8717 3.46126 10.945 3.07715 10.9385C2.69629 10.9352 2.32845 10.8571 1.97363 10.7041C1.61882 10.5544 1.29818 10.3379 1.01172 10.0547C0.72526 9.76823 0.507161 9.44596 0.357422 9.08789C0.207682 8.73307 0.129557 8.36523 0.123047 7.98438C0.116536 7.60352 0.188151 7.22917 0.337891 6.86133C0.490885 6.49349 0.72526 6.15169 1.04102 5.83594L6.02148 0.845703C6.34375 0.520182 6.69206 0.306966 7.06641 0.206055C7.44076 0.105143 7.80697 0.103516 8.16504 0.201172C8.52311 0.298828 8.84049 0.486003 9.11719 0.762695C9.40365 1.04915 9.59408 1.37142 9.68848 1.72949C9.78613 2.08431 9.78125 2.44727 9.67383 2.81836C9.56966 3.1862 9.35645 3.53125 9.03418 3.85352L4.13672 8.75586C3.95443 8.9349 3.7526 9.05534 3.53125 9.11719C3.3099 9.18229 3.08854 9.18717 2.86719 9.13184C2.64583 9.0765 2.44889 8.96094 2.27637 8.78516C2.11686 8.62565 2.00781 8.43522 1.94922 8.21387C1.89388 7.99251 1.89551 7.7679 1.9541 7.54004C2.0127 7.31217 2.13151 7.10872 2.31055 6.92969L5.72363 3.52148C5.81478 3.42708 5.9222 3.37826 6.0459 3.375C6.1696 3.37174 6.27702 3.41406 6.36816 3.50195C6.45931 3.5931 6.50326 3.70052 6.5 3.82422C6.49674 3.94466 6.44792 4.05371 6.35352 4.15137L2.95508 7.54004C2.85417 7.64095 2.81022 7.74512 2.82324 7.85254C2.83952 7.95996 2.88021 8.04785 2.94531 8.11621C3.01693 8.18457 3.10482 8.22689 3.20898 8.24316C3.31641 8.25618 3.42057 8.21061 3.52148 8.10645L8.39453 3.22852C8.56706 3.05599 8.69238 2.86068 8.77051 2.64258C8.84863 2.42448 8.86654 2.20801 8.82422 1.99316C8.78516 1.77832 8.67936 1.58301 8.50684 1.40723C8.33757 1.2347 8.14388 1.12891 7.92578 1.08984C7.70768 1.05078 7.48958 1.07031 7.27148 1.14844C7.05339 1.22331 6.85807 1.34701 6.68555 1.51953L1.72949 6.4707C1.43001 6.77344 1.23307 7.10059 1.13867 7.45215C1.04753 7.80046 1.05078 8.14225 1.14844 8.47754C1.24935 8.81283 1.43001 9.11068 1.69043 9.37109C1.94759 9.63477 2.24382 9.81543 2.5791 9.91309C2.91764 10.0107 3.26107 10.014 3.60938 9.92285C3.96094 9.83171 4.28809 9.63477 4.59082 9.33203L8.2041 5.71875Z"
                fill="white"
              />
            </svg>

            <input
              type="file"
              className="w-full hidden"
              onChange={(e) => onChange(e, 'recept')}
            />

            <span>{value || 'Add Receipt'}</span>
          </label>
        </td>
      );
    },
  },
  {
    key: 'owner',
    header: 'Owner',
    defaultValue: '',
    cell: (row) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-[#009696] tracking-[0.25px] font-normal text-center min-w-[110px]">
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
        </td>
      );
    },
    placeholder: 'Enter owner',
  },
  {
    key: 'reimbursable',
    header: 'Reimbursable',
    defaultValue: '',
    cell: (row) => {
      return (
        <td
          className={`border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[75px] ${
            !row?.reimbursable ? 'bg-[#b91b1b33]' : ''
          }`}
        >
          {row.reimbursable ? 'Yes' : 'No'}
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
    key: 'listing',
    header: 'Listing',
    width: 100,
    defaultValue: '',
    placeholder: 'Enter listing',
  },
  {
    key: 'note',
    header: 'Notes',
    defaultValue: '',
    placeholder: 'Enter notes',
    cell: (row) => {
      return (
        <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[150px]">
          {row?.note?.slice(0, 40) + '...'}
        </td>
      );
    },
  },
];

export default function MyBusinessTable() {
  const [perPage] = useState(25);
  const [page] = useState(1);

  const { myBusinessExpenses } = useGetMyBusinessExpenses({
    per_page: perPage,
    page,
  });

  return <Table columnDef={columnDef} data={myBusinessExpenses} />;
}

import Table from '../table/Table';

const columnDef = [
  {
    key: 'agent',
    header: 'Agent',
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
            {row.agent}
          </div>
        </td>
      );
    },
    placeholder: 'Enter owner',
  },
  {
    key: 'salesClosed24',
    header: 'Sales Closed YTD 2024mount',
    width: 180,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'salesClosedTotal',
    header: 'Closed Sales Total',
    width: 110,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'totalDollars',
    header: '% of Total Dollars on Closed Deals',
    width: 220,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'agentCommission',
    header: 'Agent Specific Commission Split',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'grossCommissionIncome',
    header: 'Gross Commission Income',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'brokerageCut',
    header: 'Brokerage Cut',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'netCommission',
    header: 'Net Commission',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'netCommissionRate',
    header: '% of Total Net Commission',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'agentNetIncome',
    header: 'Agent Net Income',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'agentNetIncomeRate',
    header: '% of Total Agent Net Income',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'spearsGroupGrossIncome',
    header: 'Spears Group Gross Income',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'agentExpenses',
    header: 'Agent Expenses ',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'sgNetIncome',
    header: 'SG Net Income ',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
  {
    key: 'sgNetIncomeRate',
    header: '% of Total SG Net Income',
    width: 200,
    defaultValue: '',
    placeholder: 'Enter amount',
  },
];

const data = [
  {
    agent: 'Dave M.',
    salesClosed24: '$10,000.00',
    salesClosedTotal: '$10,000.00',
    totalDollars: '12.0%',
    agentCommission: '9.0%',
    grossCommissionIncome: '$10,000.00',
    brokerageCut: '$10,000.00',
    netCommission: '$10,000.00',
    netCommissionRate: '9.0%',
    agentNetIncome: '$10,000.00',
    agentNetIncomeRate: '9.0%',
    spearsGroupGrossIncome: '$10,000.00',
    agentExpenses: '$10,000.00',
    sgNetIncome: '$10,000.00',
    sgNetIncomeRate: '9.0%',
  },
  {
    agent: 'Dave M.',
    salesClosed24: '$10,000.00',
    salesClosedTotal: '$10,000.00',
    totalDollars: '12.0%',
    agentCommission: '9.0%',
    grossCommissionIncome: '$10,000.00',
    brokerageCut: '$10,000.00',
    netCommission: '$10,000.00',
    netCommissionRate: '9.0%',
    agentNetIncome: '$10,000.00',
    agentNetIncomeRate: '9.0%',
    spearsGroupGrossIncome: '$10,000.00',
    agentExpenses: '$10,000.00',
    sgNetIncome: '$10,000.00',
    sgNetIncomeRate: '9.0%',
  },
  {
    agent: 'Dave M.',
    salesClosed24: '$10,000.00',
    salesClosedTotal: '$10,000.00',
    totalDollars: '12.0%',
    agentCommission: '9.0%',
    grossCommissionIncome: '$10,000.00',
    brokerageCut: '$10,000.00',
    netCommission: '$10,000.00',
    netCommissionRate: '9.0%',
    agentNetIncome: '$10,000.00',
    agentNetIncomeRate: '9.0%',
    spearsGroupGrossIncome: '$10,000.00',
    agentExpenses: '$10,000.00',
    sgNetIncome: '$10,000.00',
    sgNetIncomeRate: '9.0%',
  },
];

export default function MyAgentTable() {
  return <Table columnDef={columnDef} data={data} />;
}

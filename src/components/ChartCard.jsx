import { cn } from '@/lib/utils';
import BarCharts from './BarChart';
import Dropdown from './Dropdown';

const ChartCard = ({
  data,
  xKey,
  yKey,
  yDomain,
  total,
  title,
  percent = 0,
}) => {
  const options = [
    { value: 'This Month', label: ' This Month' },
    { value: 'This Year', label: 'This Year' },
    { value: 'option3', label: 'Option 3' },
  ];
  const handleSelect = (option) => {
    console.table({ option });
  };

  return (
    <>
      <div className="w-full rounded-lg shadow bg-[#242424] p-4 md:p-6">
        <div className="flex justify-between items-start gap-x-1 gap-y-3 flex-wrap mb-1">
          {/* Large Number */}
          <div className="flex flex-col gap-1">
            <h2 className="text-light text-lg md:text-xl lg:text-2xl">
              ${total || '17,182,291.21'}
            </h2>
            <span
              className={cn(
                'text-[#9AE4A7] text-sm leading-5 tracking-[0.25px]',
                {
                  'text-red-400': percent < 0,
                }
              )}
            >
              {percent >= 0
                ? `+${percent}% of target`
                : `-${percent}% of target`}
            </span>
          </div>

          {/* Dropdown */}
          <div>
            <Dropdown options={options} onSelect={handleSelect} />
          </div>
        </div>

        <div className="mt-7">
          <BarCharts data={data} xKey={xKey} yKey={yKey} yDomain={yDomain} />
          <p className="text-sm text-[#ffffff99] mt-4 text-center">{title}</p>
        </div>
      </div>
    </>
  );
};

export default ChartCard;

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
  options = [],
  onSelect,
}) => {
  return (
    <>
      <div className="w-full rounded-lg shadow bg-[#242424] p-4 md:p-6">
        <div className="flex justify-between items-start gap-x-1 gap-y-3 flex-wrap mb-1">
          {/* Large Number */}
          <div className="flex flex-col gap-1">
            <h2 className="text-light text-lg md:text-xl lg:text-2xl">
              {total}
            </h2>
            <span
              className={cn(
                'text-[#9AE4A7] text-sm leading-5 tracking-[0.25px]',
                {
                  'text-red-400': percent < 0,
                }
              )}
            >
              {percent < 0
                ? `-${percent || 0}% of target`
                : `+${percent || 0}% of target`}
            </span>
          </div>

          {/* Dropdown */}
          <div>
            <Dropdown options={options} onSelect={onSelect} />
          </div>
        </div>

        <div className="mt-7">
          <BarCharts data={data} xKey={xKey} yKey={yKey} yDomain={yDomain} />
          <p className="text-lg text-[#ffffff99] mt-4 text-center">{title}</p>
        </div>
      </div>
    </>
  );
};

export default ChartCard;

export default function ReferralFeeCell({ getValue }) {
  return <div className="px-[10px] py-[6.5px]">{getValue()}%</div>;
}

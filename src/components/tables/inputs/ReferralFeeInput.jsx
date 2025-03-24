import { useFormContext } from 'react-hook-form';

export default function ReferralFeeInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('referral_fee_pct')}
      type="number"
      className="bg-transparent w-full text-white px-3 py-2 border border-white rounded-md"
      placeholder="Enter Referral Fee"
    />
  );
}

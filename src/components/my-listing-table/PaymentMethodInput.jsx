import { useGetPaymentMethods } from '@/hooks/payment.hook';

export default function PaymentMethodInput({ value, onChange }) {
  const { paymentMethods, isLoading } = useGetPaymentMethods();

  return (
    <td className="border border-[#5E5E5E] p-2">
      <select
        className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer"
        value={value}
        onChange={(e) => onChange(e, 'payment_method_id')}
        disabled={isLoading}
      >
        <option value="" className="bg-dark">
          Payment Method
        </option>
        {paymentMethods?.map((method) => (
          <option key={method.id} value={method.id} className="bg-dark">
            {method.name}
          </option>
        ))}
      </select>
    </td>
  );
}

import { useGetPaymentMethods } from '@/hooks/payment.hook';

export default function PaymentMethodCell({ row }) {
  const { paymentMethods } = useGetPaymentMethods();

  const value = paymentMethods?.find(
    (method) => method.id === row.payment_method_id
  )?.name;

  return (
    <td className="border border-[#5E5E5E] py-2 px-2.5 font-Roboto text-[11px] text-light tracking-[0.25px] font-normal text-center min-w-[100px]">
      {value}
    </td>
  );
}

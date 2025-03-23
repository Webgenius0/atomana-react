import { useGetPaymentMethods } from '@/hooks/payment.hook';

export default function PaymentMethodCell({ getValue }) {
  const { paymentMethods } = useGetPaymentMethods();

  const value = paymentMethods?.find(
    (method) => method.id === getValue()
  )?.name;

  return <div className="px-[10px] py-[6.5px]">{value || '-'}</div>;
}

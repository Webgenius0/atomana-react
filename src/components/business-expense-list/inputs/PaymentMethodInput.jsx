import { Select } from '@/components/ui/select';
import { useGetPaymentMethods } from '@/hooks/payment.hook';
import { Controller, useFormContext } from 'react-hook-form';

export default function PaymentMethodInput() {
  const { paymentMethods, isLoading } = useGetPaymentMethods();
  const form = useFormContext();

  const categoryOptions = paymentMethods?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  return (
    <Controller
      name="payment_method_id"
      control={form.control}
      render={({ field }) => (
        <Select
          value={paymentMethods?.find((item) => item.id === field.value)?.name}
          setValue={(value) =>
            field.onChange(
              paymentMethods?.find((item) => item.name === value).id
            )
          }
          disabled={isLoading}
          options={categoryOptions}
          placeholder="Select Payment Method"
        />
      )}
    />
  );
}

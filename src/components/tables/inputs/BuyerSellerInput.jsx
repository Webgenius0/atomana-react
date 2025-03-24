import { useFormContext } from 'react-hook-form';

export default function BuyerSellerInput() {
  const form = useFormContext();
  return (
    <input
      {...form.register('buyer_seller')}
      className="bg-transparent w-full text-white px-3 py-2 border border-white rounded-md"
      placeholder="Enter Buyer Seller"
    />
  );
}

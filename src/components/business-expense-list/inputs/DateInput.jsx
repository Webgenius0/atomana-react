import { format } from 'date-fns';

export default function DateInput() {
  const today = new Date();
  const formatted = format(today, 'MM/dd/yyyy');
  return <div>{formatted}</div>;
}

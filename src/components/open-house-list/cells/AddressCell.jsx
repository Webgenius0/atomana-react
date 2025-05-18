import { useNavigate } from 'react-router-dom';

export default function AddressCell({ getValue, row }) {
  const value = getValue();
  const navigate = useNavigate();

  return (
    <div
      title={value}
      className="px-[10px] py-[6.5px] first-letter:uppercase cursor-pointer hover:text-light/60"
      onClick={() => {
        if (row?.original?.path) {
          navigate(row?.original?.path);
        }
      }}
    >
      {value || '-'}
    </div>
  );
}

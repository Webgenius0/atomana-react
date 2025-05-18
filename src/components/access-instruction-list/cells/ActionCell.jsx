import { EditIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ActionCell({ row }) {
  return (
    <div className="flex items-center justify-center">
      <Link to={`edit/${row.original.id}`}>
        <EditIcon className="text-light/60 hover:text-light size-4" />
      </Link>
    </div>
  );
}

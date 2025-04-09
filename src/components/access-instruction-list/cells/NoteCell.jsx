import DOMPurify from 'dompurify';
import { stripHtml } from 'string-strip-html';

export default function NoteCell({ getValue, cell }) {
  const value = getValue();
  const painValue = value ? DOMPurify.sanitize(stripHtml(value).result) : '';

  return (
    <div
      title={painValue}
      className="px-[10px] py-[6.5px] first-letter:uppercase truncate"
      style={{
        width: `${cell.column.getSize()}px`,
      }}
    >
      {painValue || '-'}
    </div>
  );
}

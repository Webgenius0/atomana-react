export default function UserNameCell({ row }) {
  const { user_first_name, user_last_name } = row.original;
  return (
    <div className="px-[10px] py-[6.5px]">
      {user_first_name ? `${user_first_name} ${user_last_name}` : '-'}
    </div>
  );
}

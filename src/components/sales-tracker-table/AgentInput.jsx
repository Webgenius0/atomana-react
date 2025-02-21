import { useGetAgents } from '@/hooks/expense.hook';

export default function AgentInput({ value, onChange }) {
  const { agents, isLoading } = useGetAgents();

  return (
    <td className="border border-[#5E5E5E] p-2 text-light">
      <select
        className="py-2 px-2.5 font-Roboto text-[11px] text-light border border-light bg-transparent tracking-[0.25px] rounded cursor-pointer w-full"
        value={value}
        onChange={(e) => onChange(e, 'user_id')}
        disabled={isLoading}
      >
        <option value="" className="bg-dark">
          Select Agent
        </option>

        {agents?.map((agent) => (
          <option key={agent.id} value={agent.id} className="bg-dark">
            {agent.first_name} {agent.last_name}
          </option>
        ))}
      </select>
    </td>
  );
}

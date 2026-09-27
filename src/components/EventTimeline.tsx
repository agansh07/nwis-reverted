import type { DrillEvent } from '../types';
import RiskBadge from './RiskBadge';

const dot: Record<string, string> = {
  'Mud Loss': 'bg-orange-500',
  'Kick': 'bg-rose-600',
  'Stuck Pipe': 'bg-stone-900',
  'Torque Spike': 'bg-amber-500',
  'Fishing': 'bg-sky-500',
  'NPT': 'bg-stone-400',
  'Cement Issue': 'bg-violet-500',
  'Overpressure': 'bg-red-500',
  'Drag Increase': 'bg-teal-500',
};

export default function EventTimeline({ events }: { events: DrillEvent[] }) {
  return (
    <ol className="relative space-y-0 border-l border-stone-200 ml-1.5">
      {events.map((e) => (
        <li key={e.id} className="relative pb-5 pl-5 last:pb-0">
          <span className={`absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white ${dot[e.type] ?? 'bg-stone-400'}`} />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-semibold text-stone-900">{e.type}</span>
            <RiskBadge level={e.severity} size="xs" />
            <span className="ml-auto text-[11px] tabular-nums text-stone-400">{e.depthM.toLocaleString()} m · {e.date}</span>
          </div>
          <p className="mt-0.5 text-xs text-stone-500">{e.wellName} · {e.formation} — {e.cause}</p>
          <p className="mt-1.5 rounded-lg bg-stone-50 px-2.5 py-1.5 text-[11.5px] leading-5 text-stone-600">
            <span className="font-medium text-stone-800">Mitigation:</span> {e.mitigation} → {e.outcome}
          </p>
        </li>
      ))}
    </ol>
  );
}

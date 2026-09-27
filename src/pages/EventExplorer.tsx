import { useMemo, useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import EventTimeline from '../components/EventTimeline';
import { events } from '../data/events';

const types = ['All', 'Mud Loss', 'Kick', 'Stuck Pipe', 'Torque Spike', 'Cement Issue', 'Overpressure'];

export default function EventExplorer() {
  const [t, setT] = useState('All');
  const [q, setQ] = useState('');
  const list = useMemo(() => events.filter((e) =>
    (t === 'All' || e.type === t) &&
    (!q || (e.wellName + e.formation + e.cause + e.mitigation).toLowerCase().includes(q.toLowerCase()))
  ), [t, q]);
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">Institutional memory</p>
      <h1 className="text-[22px] font-semibold tracking-tight">Event explorer</h1>
      <DashboardCard title="Filters" subtitle={`${list.length} events from DDR / WCR / mud logs`}>
        <div className="flex flex-wrap gap-1.5">
          {types.map((x) => (
            <button key={x} onClick={() => setT(x)} className={`rounded-full border px-3 py-1 text-[12px] ${t === x ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 text-stone-500'}`}>{x}</button>
          ))}
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by well, cause…" className="ml-auto rounded-full border border-stone-200 px-3 py-1 text-[12px] outline-none placeholder:text-stone-400" />
        </div>
      </DashboardCard>
      <DashboardCard title="Timeline" subtitle="Cause → mitigation → outcome with source">
        <EventTimeline events={list} />
      </DashboardCard>
    </div>
  );
}

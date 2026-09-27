import { useParams } from 'react-router-dom';
import DashboardCard from '../components/DashboardCard';
import EventTimeline from '../components/EventTimeline';
import RiskBadge from '../components/RiskBadge';
import { wells } from '../data/wells';
import { events } from '../data/events';

export default function WellIntelligence() {
  const { id } = useParams();
  const well = wells.find((w) => w.id === id) ?? wells[1];
  const ev = events.filter((e) => e.wellId === well.id);
  const counts = ['Mud Loss', 'Kick', 'Stuck Pipe', 'Fishing', 'NPT', 'Cement Issue'].map((t) => ({
    t, n: events.filter((e) => e.wellId === well.id && e.type === t).length || (t === 'Mud Loss' ? 1 : 0),
  }));
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">Well intelligence profile</p>
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-[22px] font-semibold tracking-tight">{well.name}</h1>
        <RiskBadge level={well.risk} />
        <span className="text-[13px] text-stone-500">{well.field} · {well.formation} · {well.status}</span>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        <DashboardCard title="Overview" subtitle="Location Assam · trajectory vertical">
          <dl className="space-y-2 text-[13px]">
            {[['Final depth', `${well.depthM.toLocaleString()} m`], ['Formation', well.formation], ['Duration', `${well.durationDays} days`], ['Mud weight', `${well.mudWeight} SG`], ['Distance', `${well.distanceKm.toFixed(1)} km from active`]].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-stone-50 pb-2 last:border-0"><dt className="text-stone-500">{k}</dt><dd className="font-medium">{v}</dd></div>
            ))}
          </dl>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {counts.map((c) => (
              <div key={c.t} className="rounded-lg bg-stone-50 px-2 py-1.5 text-center"><div className="text-[14px] font-semibold">{c.n}</div><div className="text-[10px] text-stone-500">{c.t}</div></div>
            ))}
          </div>
        </DashboardCard>
        <div className="xl:col-span-2">
          <DashboardCard title="Historical events" subtitle={`${ev.length || 3} records from WCR / DDR / mud logs`}>
            <EventTimeline events={ev.length ? ev : events.slice(0, 4)} />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

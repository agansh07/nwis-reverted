import { useMemo, useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import WellMap from '../components/WellMap';
import WellCard from '../components/WellCard';
import type { Well } from '../types';
import { wells } from '../data/wells';
import { events } from '../data/events';
import EventTimeline from '../components/EventTimeline';

export default function NearbyWells() {
  const [radius, setRadius] = useState(16);
  const [risk, setRisk] = useState('ALL');
  const [selected, setSelected] = useState<Well>(wells[1]);

  const filtered = useMemo(() => wells.filter((w) => w.distanceKm <= radius && (risk === 'ALL' || w.risk === risk)), [radius, risk]);
  const selEvents = events.filter((e) => e.wellId === selected.id);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">Geospatial intelligence</p>
        <h1 className="mt-1 text-[22px] font-semibold tracking-tight">Nearby wells</h1>
      </div>
      <DashboardCard title="Filters" subtitle="Radius · risk · formation">
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-[13px] text-stone-600">
            Radius <input type="range" min={2} max={16} value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="accent-stone-900" />
            <span className="rounded-full bg-stone-100 px-2 py-0.5 font-medium">{radius} km</span>
          </label>
          <div className="flex gap-1.5">
            {['ALL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map((r) => (
              <button key={r} onClick={() => setRisk(r)}
                className={`rounded-full border px-3 py-1 text-[12px] ${risk === r ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-500'}`}>{r}</button>
            ))}
          </div>
          <span className="ml-auto text-xs text-stone-400">{filtered.length} wells shown</span>
        </div>
      </DashboardCard>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <WellMap wells={filtered} onSelect={setSelected} selectedId={selected.id} height={480} />
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.filter((w) => !w.isActive).slice(0, 6).map((w) => (
              <WellCard key={w.id} well={w} onOpen={setSelected} />
            ))}
          </div>
        </div>
        <div>
          <DashboardCard title={selected.name} subtitle={`${selected.field} · ${selected.distanceKm.toFixed(1)} km · ${selected.formation}`}>
            <div className="grid grid-cols-2 gap-2 text-center">
              {[['Depth', `${selected.depthM.toLocaleString()} m`], ['Duration', `${selected.durationDays} days`], ['ROP', `${selected.rop}`], ['Torque', `${selected.torque}`]].map(([l, v]) => (
                <div key={l} className="rounded-xl bg-stone-50 py-2"><div className="text-[14px] font-semibold">{v}</div><div className="text-[10.5px] uppercase tracking-wide text-stone-400">{l}</div></div>
              ))}
            </div>
            <div className="mt-4">
              <p className="mb-2 text-xs font-medium text-stone-500">Historical events ({selEvents.length || 'none listed — showing field pattern'})</p>
              <EventTimeline events={(selEvents.length ? selEvents : events.slice(0, 3))} />
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

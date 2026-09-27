import { formations } from '../data/formations';
import { events } from '../data/events';
import RiskBadge from './RiskBadge';

export default function WellTimeline({ currentDepth = 3420 }: { currentDepth?: number }) {
  const min = 2900; const max = 3800;
  const pct = (d: number) => ((d - min) / (max - min)) * 100;
  return (
    <div>
      <div className="relative h-[300px] rounded-xl bg-stone-50/80 p-3">
        <div className="relative mx-auto h-full w-40">
          {formations.filter((f) => f.baseM > min && f.topM < max).map((f) => {
            const top = pct(Math.max(f.topM, min)); const h = pct(Math.min(f.baseM, max)) - top;
            return (
              <div key={f.name} className="absolute left-8 right-8 rounded-md border border-stone-200 bg-white px-2 py-1"
                style={{ top: `${top}%`, height: `${h}%` }}>
                <div className="text-[10px] font-semibold text-stone-700">{f.name}</div>
              </div>
            );
          })}
          {/* events */}
          {events.filter((e) => e.depthM >= min && e.depthM <= max).map((e) => (
            <span key={e.id} title={`${e.wellName} ${e.type} ${e.depthM}m`}
              className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${e.severity === 'CRITICAL' ? 'bg-rose-600' : e.severity === 'HIGH' ? 'bg-orange-600' : 'bg-amber-400'}`}
              style={{ top: `${pct(e.depthM)}%` }} />
          ))}
          {/* current */}
          <div className="absolute left-0 right-0 border-t-2 border-dashed border-stone-900" style={{ top: `${pct(currentDepth)}%` }}>
            <span className="absolute -top-2.5 right-0 rounded-full bg-stone-900 px-2 py-0.5 text-[10px] font-medium text-white">{currentDepth} m</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-stone-500">
        <RiskBadge level="HIGH" size="xs" />
        <span>4 events clustered 3400–3460 m</span>
      </div>
    </div>
  );
}

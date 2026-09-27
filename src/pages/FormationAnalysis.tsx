import DashboardCard from '../components/DashboardCard';
import RiskBadge from '../components/RiskBadge';
import { formations } from '../data/formations';

export default function FormationAnalysis() {
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">Geology × events</p>
      <h1 className="text-[22px] font-semibold tracking-tight">Formation analysis</h1>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {formations.map((f) => (
          <div key={f.name} className="rounded-2xl border border-stone-200/80 bg-white p-4">
            <div className="flex items-center justify-between"><span className="text-[13px] font-semibold">{f.name}</span><RiskBadge level={f.risk} size="xs" /></div>
            <p className="mt-1 text-[11px] tabular-nums text-stone-400">{f.topM.toLocaleString()}–{f.baseM.toLocaleString()} m · {f.lithology}</p>
            <p className="mt-2 text-xs leading-5 text-stone-500">{f.description}</p>
            <div className="mt-2 text-[11px] text-stone-500">{f.events} historical events</div>
          </div>
        ))}
      </div>
      <DashboardCard title="Correlation note" subtitle="Tipam Sand carries 60% of offset risk">
        <p className="text-[13px] leading-6 text-stone-600">
          Active well at 3,420 m sits mid-Tipam where mud-loss and stuck-pipe cluster (3,400–3,460 m).
          Girujan–Tipam transition at ~2,980 m showed channeling — plan centralizers if sidetrack considered.
          Barail below 3,720 m is overpressured; keep kill sheet ready before drilling ahead.
        </p>
      </DashboardCard>
    </div>
  );
}

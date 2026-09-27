import DashboardCard from '../components/DashboardCard';
import ParameterChart from '../components/ParameterChart';
import WellTimeline from '../components/WellTimeline';
import AIInsightCard from '../components/AIInsightCard';
import OffsetComparison from '../components/OffsetComparison';
import RiskBadge from '../components/RiskBadge';
import { activeWell, wells } from '../data/wells';
import { liveParams } from '../data/drillingData';

export default function ActiveWell() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">Active well intelligence</p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <h1 className="text-[22px] font-semibold tracking-tight">{activeWell.name}</h1>
          <RiskBadge level={activeWell.risk} />
          <span className="text-[13px] text-stone-500">{activeWell.field} · Assam · {activeWell.formation}</span>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-4">
          <DashboardCard title="Live parameters" subtitle="eRTMAC stream · 5s refresh (simulated)">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ['Depth', `${liveParams.depthM.toLocaleString()} m`],
                ['ROP', `${liveParams.rop} m/hr`],
                ['WOB', `${liveParams.wob} klbf`],
                ['Torque', `${liveParams.torque} kNm`],
                ['MW', `${liveParams.mudWeight} SG`],
                ['Pump', `${liveParams.pumpPressure} psi`],
                ['Flow', `${liveParams.flowRate} gpm`],
                ['Gas', `${liveParams.gas} %`],
              ].map(([l, v]) => (
                <div key={l} className="rounded-xl border border-stone-100 bg-stone-50/60 px-3 py-2.5">
                  <div className="text-[15px] font-semibold tabular-nums">{v}</div>
                  <div className="text-[10.5px] uppercase tracking-wide text-stone-400">{l}</div>
                </div>
              ))}
            </div>
          </DashboardCard>
          <DashboardCard title="Depth trends" subtitle="ROP · torque · pressure vs measured depth">
            <div className="grid gap-4 md:grid-cols-2">
              <div><p className="mb-1 text-xs font-medium text-stone-500">Torque (kNm)</p><ParameterChart metric="torque" /></div>
              <div><p className="mb-1 text-xs font-medium text-stone-500">ROP (m/hr)</p><ParameterChart metric="rop" /></div>
            </div>
          </DashboardCard>
          <DashboardCard title="Offset comparison" subtitle="Active vs 3 closest offsets">
            <OffsetComparison wells={wells.filter((w) => !w.isActive)} />
          </DashboardCard>
        </div>
        <div className="space-y-4">
          <AIInsightCard />
          <DashboardCard title="Risk zone" subtitle="3400–3460 m · 4 historical events">
            <WellTimeline currentDepth={activeWell.depthM} />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

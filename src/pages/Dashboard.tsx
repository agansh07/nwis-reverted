import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardCard from '../components/DashboardCard';
import WellMap from '../components/WellMap';
import AlertPanel from '../components/AlertPanel';
import AIInsightCard from '../components/AIInsightCard';
import ParameterChart from '../components/ParameterChart';
import RiskBadge from '../components/RiskBadge';
import { activeWell, wells } from '../data/wells';
import { alerts, events } from '../data/events';

const stats = [
  { label: 'Current depth', value: `${activeWell.depthM.toLocaleString()} m`, sub: activeWell.formation },
  { label: 'Overall risk', value: '68 / 100', sub: 'Medium · 4 active alerts' },
  { label: 'Nearby wells', value: `${wells.length - 1}`, sub: 'within 16 km' },
  { label: 'Historical events', value: `${events.length * 2 + 1}`, sub: '37 incl. NPT' },
];

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">Oil India Limited · Naharkatiya</p>
          <h1 className="mt-1 text-[22px] font-semibold tracking-tight text-stone-900">Good morning — here's drilling intelligence.</h1>
          <p className="mt-1 text-[13px] text-stone-500">Active well {activeWell.name} at {activeWell.depthM.toLocaleString()} m · approaching historical risk zone.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/active" className="rounded-full bg-stone-900 px-4 py-2 text-[13px] font-medium text-white hover:bg-stone-800">Open active well</Link>
          <Link to="/assistant" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-[13px] font-medium text-stone-700 hover:border-stone-300">Ask AI</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-stone-200/80 bg-white p-4">
            <div className="text-[11px] uppercase tracking-wide text-stone-400">{s.label}</div>
            <div className="mt-1 text-[20px] font-semibold tracking-tight text-stone-900">{s.value}</div>
            <div className="mt-0.5 text-xs text-stone-500">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-4">
          <DashboardCard title="Active well" subtitle={`${activeWell.name} · ${activeWell.field} · ROP ${activeWell.rop} m/hr`}
            action={<RiskBadge level={activeWell.risk} />}>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {[
                ['Depth', `${activeWell.depthM.toLocaleString()} m`],
                ['ROP', `${activeWell.rop} m/hr`],
                ['WOB', `${activeWell.wob} klbf`],
                ['Torque', `${activeWell.torque} kNm`],
                ['MW', `${activeWell.mudWeight} SG`],
                ['RPM', `${activeWell.rpm}`],
              ].map(([l, v]) => (
                <div key={l} className="rounded-xl bg-stone-50 px-2 py-2.5 text-center">
                  <div className="text-[13px] font-semibold text-stone-900">{v}</div>
                  <div className="text-[10.5px] uppercase tracking-wide text-stone-400">{l}</div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Nearby wells map" subtitle="14 offsets · Tipam Sand focus · click a well"
            action={<Link to="/nearby" className="flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-900">View all <ArrowRight className="h-3.5 w-3.5" /></Link>}>
            <WellMap wells={wells} height={360} />
          </DashboardCard>

          <DashboardCard title="Torque vs depth" subtitle="Active vs offset average — divergence flags stuck-pipe risk">
            <ParameterChart metric="torque" />
          </DashboardCard>
        </div>

        <div className="space-y-4">
          <AIInsightCard />
          <DashboardCard title="Historical risk alerts" subtitle="From offset behaviour + live params"
            action={<Link to="/risk" className="flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-900">All <ArrowRight className="h-3.5 w-3.5" /></Link>}>
            <AlertPanel alerts={alerts.slice(0, 3)} compact />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

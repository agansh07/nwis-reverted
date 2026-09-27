import DashboardCard from '../components/DashboardCard';
import AlertPanel from '../components/AlertPanel';
import WellTimeline from '../components/WellTimeline';
import { alerts } from '../data/events';

export default function RiskMonitor() {
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">Proactive monitoring</p>
      <h1 className="text-[22px] font-semibold tracking-tight">Risk monitor</h1>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DashboardCard title="Alert center" subtitle="5 active · sorted by severity">
            <AlertPanel alerts={alerts} />
          </DashboardCard>
        </div>
        <div className="space-y-4">
          <DashboardCard title="Depth risk strip" subtitle="Current 3420 m in Tipam Sand">
            <WellTimeline currentDepth={3420} />
          </DashboardCard>
          <DashboardCard title="Risk categories" subtitle="Probability next 100 m">
            <div className="space-y-2.5">
              {[['Mud loss', 72, 'bg-orange-500'], ['Stuck pipe', 58, 'bg-stone-900'], ['Kick', 41, 'bg-rose-500'], ['Torque anomaly', 35, 'bg-amber-400']].map(([l, v, c]) => (
                <div key={l as string}>
                  <div className="mb-1 flex justify-between text-xs"><span className="text-stone-600">{l}</span><span className="font-medium">{v}%</span></div>
                  <div className="h-1.5 rounded-full bg-stone-100"><div className={`h-full rounded-full ${c}`} style={{ width: `${v}%` }} /></div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

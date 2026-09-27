import DashboardCard from '../components/DashboardCard';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const preds = [
  { name: 'Mud loss', p: 72 },
  { name: 'Stuck pipe', p: 58 },
  { name: 'Kick', p: 41 },
  { name: 'Torque spike', p: 35 },
  { name: 'Cement risk', p: 28 },
];

export default function PredictiveAnalytics() {
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">ML on live + offset behaviour</p>
      <h1 className="text-[22px] font-semibold tracking-tight">Predictive analytics</h1>
      <div className="grid gap-4 xl:grid-cols-2">
        <DashboardCard title="Next-100 m probability" subtitle="XGBoost-style demo scores (simulated)">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={preds} layout="vertical" margin={{ left: 8, right: 24 }}>
                <CartesianGrid stroke="#f5f5f4" horizontal={false} />
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={90} />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e7e5e4', fontSize: 12 }} />
                <Bar dataKey="p" fill="#1c1917" radius={[0, 6, 6, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
        <div className="space-y-4">
          <DashboardCard title="Feature drivers" subtitle="Why mud-loss scores high">
            <ul className="space-y-2 text-[13px] text-stone-600">
              {['Torque +2.3 kNm over 40 m (precursor in 2 wells)', 'MW 1.18 SG near loss threshold 1.19', 'ROP drop 18.4 → 16.1 (bit wear pattern)', '3 offsets lost returns in same facies'].map((s) => (
                <li key={s} className="rounded-xl bg-stone-50 px-3 py-2">{s}</li>
              ))}
            </ul>
          </DashboardCard>
          <DashboardCard title="Recommended guardrails" subtitle="Decision support — engineer review required">
            <p className="text-[13px] leading-6 text-stone-600">Stage 40-ppb LCM · cap MW at 1.19 · ream each stand · fingerprint flow. If pit gain &gt; 1 bbl, shut-in per ER-44 procedure.</p>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

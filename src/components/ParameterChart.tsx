import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { drillingTrend } from '../data/formations';

export default function ParameterChart({ metric = 'torque' }: { metric?: 'torque' | 'rop' | 'pressure' }) {
  const cfg = {
    torque: { keys: ['torque', 'offsetTorque'] as const, labels: ['Active torque', 'Offset avg'], unit: 'kNm' },
    rop: { keys: ['rop'] as const, labels: ['ROP'], unit: 'm/hr' },
    pressure: { keys: ['pressure'] as const, labels: ['Standpipe'], unit: 'psi' },
  }[metric];
  return (
    <div className="h-[260px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={drillingTrend} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <CartesianGrid stroke="#f5f5f4" vertical={false} />
          <XAxis dataKey="depth" tickLine={false} axisLine={false} tick={{ fill: '#a8a29e', fontSize: 11 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: '#a8a29e', fontSize: 11 }} width={44} />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: '1px solid #e7e5e4', boxShadow: 'none', fontSize: 12 }}
            labelFormatter={(v) => `Depth ${v} m`}
          />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {cfg.keys.map((k, i) => (
            <Line key={k} type="monotone" dataKey={k} name={cfg.labels[i]} stroke={i === 0 ? '#1c1917' : '#d6d3d1'} strokeWidth={i === 0 ? 2 : 1.8} strokeDasharray={i === 0 ? undefined : '5 4'} dot={false} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

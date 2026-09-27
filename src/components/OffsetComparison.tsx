import type { Well } from '../types';
import { activeWell } from '../data/wells';

export default function OffsetComparison({ wells }: { wells: Well[] }) {
  const rows: Array<{ label: string; get: (w: Well) => string; highlight?: (w: Well) => boolean }> = [
    { label: 'Depth', get: (w) => `${w.depthM.toLocaleString()} m` },
    { label: 'ROP (m/hr)', get: (w) => w.rop.toFixed(1) },
    { label: 'Mud wt (SG)', get: (w) => w.mudWeight.toFixed(2), highlight: (w) => w.mudWeight >= 1.21 },
    { label: 'Torque (kNm)', get: (w) => w.torque.toFixed(1), highlight: (w) => w.torque >= 21 },
    { label: 'Risk', get: (w) => w.risk },
  ];
  const cols = [activeWell, ...wells.slice(0, 3)];
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-[12.5px]">
        <thead>
          <tr className="border-b border-stone-100 text-[11px] uppercase tracking-wide text-stone-400">
            <th className="py-2 pr-3 font-medium">Parameter</th>
            {cols.map((w) => (
              <th key={w.id} className="px-3 py-2 font-medium">
                <span className={w.isActive ? 'text-stone-900' : 'text-stone-500'}>{w.name}</span>
                {w.isActive && <span className="ml-1.5 rounded-full bg-stone-900 px-1.5 py-0.5 text-[9px] text-white">ACTIVE</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-stone-50 last:border-0">
              <td className="py-2.5 pr-3 text-stone-500">{r.label}</td>
              {cols.map((w) => (
                <td key={w.id} className={`px-3 py-2.5 tabular-nums ${r.highlight?.(w) ? 'font-semibold text-orange-700' : 'text-stone-800'}`}>
                  {r.get(w)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { ArrowUpRight } from 'lucide-react';
import type { Well } from '../types';
import RiskBadge from './RiskBadge';

export default function WellCard({ well, onOpen }: { well: Well; onOpen?: (w: Well) => void }) {
  return (
    <button
      onClick={() => onOpen?.(well)}
      className="group w-full rounded-2xl border border-stone-200/80 bg-white p-4 text-left transition hover:border-stone-300 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${well.isActive ? 'bg-stone-900' : 'bg-stone-300'}`} />
          <span className="text-[13px] font-semibold tracking-tight text-stone-900">{well.name}</span>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-stone-300 transition group-hover:text-stone-600" />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-stone-500">
        <span>{well.field} · {well.distanceKm === 0 ? 'active' : `${well.distanceKm.toFixed(1)} km`}</span>
        <RiskBadge level={well.risk} size="xs" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-stone-100 pt-3 text-center">
        {[
          { l: 'Depth', v: `${well.depthM.toLocaleString()} m` },
          { l: 'ROP', v: `${well.rop.toFixed(1)}` },
          { l: 'MW', v: `${well.mudWeight.toFixed(2)}` },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-[13px] font-semibold text-stone-900">{s.v}</div>
            <div className="text-[10.5px] uppercase tracking-wide text-stone-400">{s.l}</div>
          </div>
        ))}
      </div>
    </button>
  );
}

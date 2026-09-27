import { TriangleAlert, ArrowRight } from 'lucide-react';
import type { Alert } from '../types';
import RiskBadge from './RiskBadge';
import { cn } from '../utils/cn';

export default function AlertPanel({ alerts, compact = false }: { alerts: Alert[]; compact?: boolean }) {
  return (
    <div className="space-y-2.5">
      {alerts.map((a) => (
        <div key={a.id} className="rounded-xl border border-stone-200/80 bg-white p-3.5 transition hover:border-stone-300">
          <div className="flex items-start gap-3">
            <span className={cn(
              'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
              a.severity === 'CRITICAL' ? 'border-rose-200 bg-rose-50 text-rose-600'
              : a.severity === 'HIGH' ? 'border-orange-200 bg-orange-50 text-orange-600'
              : a.severity === 'MEDIUM' ? 'border-amber-200 bg-amber-50 text-amber-600'
              : 'border-stone-200 bg-stone-50 text-stone-500'
            )}>
              <TriangleAlert className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-[13px] font-semibold text-stone-900">{a.title}</p>
                <RiskBadge level={a.severity} size="xs" />
              </div>
              {!compact && <p className="mt-1 text-xs leading-5 text-stone-500">{a.detail}</p>}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-stone-400">
                {a.depthRange && <span className="font-medium text-stone-600">{a.depthRange}</span>}
                <span>{a.confidence}% confidence</span>
                <span>{a.time}</span>
              </div>
              {!compact && (
                <div className="mt-2.5 flex items-center justify-between rounded-lg bg-stone-50 px-2.5 py-2 text-[11.5px]">
                  <span className="text-stone-600">{a.action}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-stone-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

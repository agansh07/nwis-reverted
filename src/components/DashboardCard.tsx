import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export default function DashboardCard({ title, subtitle, action, children, className }: {
  title: string; subtitle?: string; action?: ReactNode; children: ReactNode; className?: string;
}) {
  return (
    <section className={cn('rounded-2xl border border-stone-200/80 bg-white p-5', className)}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[13px] font-semibold tracking-tight text-stone-900">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs leading-5 text-stone-500">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

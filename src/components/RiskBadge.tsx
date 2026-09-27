import { riskColor } from '../utils/riskCalculator';
import { cn } from '../utils/cn';

export default function RiskBadge({ level, size = 'sm' }: { level: string; size?: 'xs' | 'sm' }) {
  const c = riskColor(level);
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 rounded-full border font-medium',
      c.bg, c.border, c.text,
      size === 'xs' ? 'px-2 py-0.5 text-[10.5px]' : 'px-2.5 py-1 text-[11px]'
    )}>
      <span className={cn('h-1.5 w-1.5 rounded-full', c.dot)} />
      {level}
    </span>
  );
}

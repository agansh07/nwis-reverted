import { Sparkles } from 'lucide-react';

export default function AIInsightCard({ confidence = 87, sources = ['OIL-NK-04', 'OIL-NK-07'] }: { confidence?: number; sources?: string[] }) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-900 text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <h3 className="text-[13px] font-semibold text-stone-900">AI recommendation</h3>
        <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">{confidence}% confidence</span>
      </div>
      <p className="mt-3 text-[13px] leading-6 text-stone-600">
        Active well is approaching <span className="font-semibold text-stone-900">3,400–3,460 m</span> where
        two offsets lost circulation. Keep MW ≤ 1.19 SG, stage LCM, and limit ROP below 17 m/hr through the transition.
      </p>
      <div className="mt-3 rounded-xl bg-stone-50 p-3 text-xs leading-5 text-stone-600">
        <span className="font-medium text-stone-800">Historical mitigation:</span> LCM pill · reduced rate · controlled pump
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-stone-400">
        Source wells:
        {sources.map((s) => (
          <span key={s} className="rounded-full border border-stone-200 bg-white px-2 py-0.5 text-stone-600">{s}</span>
        ))}
      </div>
    </div>
  );
}

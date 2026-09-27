import { useMemo, useState } from 'react';
import { Search, FileText } from 'lucide-react';
import { documents } from '../data/events';

const suggestions = [
  'Show stuck pipe incidents around 3000–3500 m',
  'Which nearby wells had mud losses in Tipam Sand?',
  'Show wells with kick incidents in this field',
  'What mud weight worked in nearby wells?',
  'Show cementing problems in Girujan Clay',
];

export default function SearchPanel({ onQuery }: { onQuery?: (q: string) => void }) {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    if (!q.trim()) return documents.slice(0, 3);
    const s = q.toLowerCase();
    return documents.filter((d) =>
      (d.title + d.excerpt + d.tags.join(' ') + d.well).toLowerCase().includes(s) ||
      (s.includes('mud') && d.tags.includes('mud loss')) ||
      (s.includes('stuck') && d.tags.includes('stuck pipe')) ||
      (s.includes('kick') && d.tags.includes('kick'))
    ).slice(0, 4);
  }, [q]);

  return (
    <div>
      <div className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2.5 focus-within:border-stone-400">
        <Search className="h-4 w-4 text-stone-400" />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); onQuery?.(e.target.value); }}
          placeholder="Ask about offset wells, events, mud weight…"
          className="w-full bg-transparent text-[13px] text-stone-900 outline-none placeholder:text-stone-400"
        />
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {suggestions.slice(0, 3).map((s) => (
          <button key={s} onClick={() => { setQ(s); onQuery?.(s); }}
            className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[11px] text-stone-500 hover:border-stone-300 hover:text-stone-800">
            {s.slice(0, 38)}…
          </button>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {results.map((d) => (
          <div key={d.id} className="rounded-xl border border-stone-200/70 bg-white p-3">
            <div className="flex items-center gap-2 text-[11px] text-stone-400">
              <FileText className="h-3.5 w-3.5" />
              <span>{d.type}</span><span>·</span><span>{d.well}</span>
            </div>
            <p className="mt-1 text-[13px] font-medium text-stone-900">{d.title}</p>
            <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-stone-500">{d.excerpt}</p>
          </div>
        ))}
        {results.length === 0 && <p className="rounded-xl bg-stone-50 p-3 text-xs text-stone-500">No matches. Try “mud loss” or “kick”.</p>}
      </div>
    </div>
  );
}

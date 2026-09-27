import { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import SearchPanel from '../components/SearchPanel';
import { documents } from '../data/events';
import { FileText } from 'lucide-react';

export default function DocumentSearch() {
  const [, setQ] = useState('');
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">RAG over WCR / DDR / mud logs</p>
      <h1 className="text-[22px] font-semibold tracking-tight">Document search</h1>
      <div className="grid gap-4 xl:grid-cols-2">
        <DashboardCard title="Ask in plain English" subtitle="Semantic search with source traceability">
          <SearchPanel onQuery={setQ} />
        </DashboardCard>
        <DashboardCard title="Knowledge base" subtitle="6 collections · OCR + NLP parsed">
          <div className="space-y-2">
            {documents.map((d) => (
              <div key={d.id} className="flex gap-3 rounded-xl border border-stone-200/70 p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-50 text-stone-500"><FileText className="h-4 w-4" /></span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium">{d.title}</p>
                  <p className="text-[11px] text-stone-400">{d.type} · {d.pages} pages · {d.date}</p>
                  <div className="mt-1 flex flex-wrap gap-1">{d.tags.map((tg) => <span key={tg} className="rounded-full bg-stone-50 px-2 py-0.5 text-[10.5px] text-stone-500">{tg}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-stone-900 p-3 text-[11.5px] leading-5 text-stone-200">
            Pipeline: PDF → OCR → entity extraction → event classification → vector DB → answer with citations.
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}

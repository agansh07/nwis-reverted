import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';

const canned: Record<string, string> = {
  'mud': 'Two offsets (OIL-NK-04 at 3280 m, OIL-NK-09 at 3432 m) lost returns in Tipam Sand. Both restored with LCM + reduced ROP. Keep MW ≤ 1.19 SG. Sources: DDR NK-04, WCR NK-11.',
  'stuck': 'OIL-NK-07 stuck at 3145 m (differential) and OIL-NK-11 at 3475 m (keyseat). Precursor was torque +2 kNm over 30–40 m. Recommend circulation + reaming. Source: DDR_NK_07_2022.pdf.',
  'kick': 'OIL-NK-04 kicked at 3355 m with 2.1 bbl gain, SIDPP 320 psi. Pore pressure rises below 3500 m. Pre-mix kill mud before drilling ahead. Source: ER-44.',
  'cement': 'OIL-NK-25 channeled across 2840–2890 m in Girujan Clay. Squeeze restored bond to 82%. Plan centralizers + caliper. Source: CR-18.',
};

export default function AIAssistant() {
  const [msgs, setMsgs] = useState<Array<{ me: boolean; text: string }>>([
    { me: false, text: 'Hi — I read 37 offset events + 6 report collections. Ask about mud loss, stuck pipe, kick, or cementing at current depth (3420 m).' },
  ]);
  const [inp, setInp] = useState('');
  const send = (t: string) => {
    if (!t.trim()) return;
    const s = t.toLowerCase();
    const key = Object.keys(canned).find((k) => s.includes(k)) ?? 'mud';
    setMsgs((m) => [...m, { me: true, text: t }, { me: false, text: canned[key] }]);
    setInp('');
  };
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">RAG engineering copilot</p>
      <h1 className="text-[22px] font-semibold tracking-tight">AI assistant</h1>
      <div className="grid gap-4 xl:grid-cols-3">
        <DashboardCard title="Chat" subtitle="Grounded in offset wells with citations" className="xl:col-span-2">
          <div className="flex h-[380px] flex-col">
            <div className="flex-1 space-y-2 overflow-y-auto pr-1">
              {msgs.map((m, i) => (
                <div key={i} className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-6 ${m.me ? 'ml-auto bg-stone-900 text-white' : 'bg-stone-50 text-stone-700'}`}>{m.text}</div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <input value={inp} onChange={(e) => setInp(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send(inp)}
                placeholder="e.g. What mud weight worked nearby?" className="flex-1 rounded-full border border-stone-200 px-4 py-2 text-[13px] outline-none focus:border-stone-400" />
              <button onClick={() => send(inp)} className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white"><Send className="h-4 w-4" /></button>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard title="Try" subtitle="One-click prompts">
          <div className="space-y-2">
            {['Show mud losses around 3400 m', 'Stuck pipe precursors?', 'Kick risk below current depth?', 'Cementing lessons in Girujan?'].map((p) => (
              <button key={p} onClick={() => send(p)} className="flex w-full items-center gap-2 rounded-xl border border-stone-200 px-3 py-2 text-left text-[13px] text-stone-600 hover:border-stone-300">
                <Sparkles className="h-3.5 w-3.5 text-stone-400" />{p}
              </button>
            ))}
          </div>
          <p className="mt-3 rounded-xl bg-amber-50 p-3 text-[11.5px] leading-5 text-amber-800">Outputs are decision support only — verify against WCR/DDR and engineering judgement.</p>
        </DashboardCard>
      </div>
    </div>
  );
}

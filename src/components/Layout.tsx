import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Crosshair, Map as MapIcon, TriangleAlert,
  Layers, FileSearch, Mountain, BrainCircuit, Bot, Activity
} from 'lucide-react';
import { activeWell } from '../data/wells';
import { cn } from '../utils/cn';

const nav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/active', label: 'Active Well', icon: Crosshair },
  { to: '/nearby', label: 'Nearby Wells', icon: MapIcon },
  { to: '/risk', label: 'Risk Monitor', icon: TriangleAlert },
  { to: '/events', label: 'Events', icon: Layers },
  { to: '/documents', label: 'Documents', icon: FileSearch },
  { to: '/formation', label: 'Formation', icon: Mountain },
  { to: '/predict', label: 'Predictive', icon: BrainCircuit },
  { to: '/assistant', label: 'AI Assistant', icon: Bot },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* top bar */}
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-white">
              <Activity className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold tracking-tight">NWIS</div>
              <div className="hidden text-[10.5px] text-stone-400 sm:block">Nearby Wells Intelligence · Oil India</div>
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-md items-center md:flex">
            <div className="flex w-full items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5">
              <span className="text-xs text-stone-400">Search wells, events, documents…</span>
              <kbd className="ml-auto rounded border border-stone-200 bg-white px-1.5 text-[10px] text-stone-400">⌘K</kbd>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <span className="hidden items-center gap-1.5 rounded-full border border-stone-200 px-2.5 py-1 text-[11px] text-stone-600 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> eRTMAC live
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-[11px] font-semibold text-stone-700">DE</span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1280px] gap-6 px-4 py-6 sm:px-6">
        {/* sidebar */}
        <aside className="sticky top-[72px] hidden h-fit w-52 shrink-0 lg:block">
          <div className="rounded-2xl border border-stone-200/70 bg-white p-2">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end}
                className={({ isActive }) => cn(
                  'flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] transition',
                  isActive ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                )}>
                <n.icon className="h-4 w-4" />
                {n.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-3 rounded-2xl border border-stone-200/70 bg-white p-4">
            <div className="text-[11px] uppercase tracking-wide text-stone-400">Active well</div>
            <div className="mt-1 text-[14px] font-semibold text-stone-900">{activeWell.name}</div>
            <div className="text-xs text-stone-500">{activeWell.depthM.toLocaleString()} m · {activeWell.formation}</div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-stone-100">
              <div className="h-full w-[68%] rounded-full bg-stone-900" />
            </div>
            <div className="mt-1.5 flex justify-between text-[11px] text-stone-500">
              <span>Risk 68/100</span><span>Medium</span>
            </div>
          </div>
          <p className="mt-3 px-1 text-[10.5px] leading-4 text-stone-400">Prototype · simulated data. Review with qualified personnel.</p>
        </aside>

        {/* main */}
        <main className="min-w-0 flex-1">
          {children}
          {/* mobile nav */}
          <nav className="mt-6 grid grid-cols-3 gap-2 lg:hidden">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end}
                className={({ isActive }) => cn(
                  'flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-[11px]',
                  isActive ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-600'
                )}>
                <n.icon className="h-3.5 w-3.5" />{n.label}
              </NavLink>
            ))}
          </nav>
        </main>
      </div>
    </div>
  );
}

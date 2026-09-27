import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import type { Well } from '../types';
import L from 'leaflet';

// fix default icon path issues (we only use CircleMarker, no images needed)
function FitBounds({ wells }: { wells: Well[] }) {
  const map = useMap();
  useEffect(() => {
    if (wells.length === 0) return;
    const b = L.latLngBounds(wells.map((w) => [w.lat, w.lng] as [number, number]));
    map.fitBounds(b.pad(0.35));
  }, [map, wells]);
  return null;
}

export default function WellMap({ wells, onSelect, selectedId, height = 420 }: {
  wells: Well[]; onSelect?: (w: Well) => void; selectedId?: string; height?: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white">
      <MapContainer center={[27.285, 95.335]} zoom={11} style={{ height, width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds wells={wells} />
        {wells.map((w) => {
          const isActive = !!w.isActive;
          const isSel = selectedId === w.id;
          const color = isActive ? '#111827' : w.risk === 'LOW' ? '#10b981' : w.risk === 'MEDIUM' ? '#f59e0b' : w.risk === 'HIGH' ? '#ea580c' : '#e11d48';
          return (
            <CircleMarker
              key={w.id}
              center={[w.lat, w.lng]}
              radius={isActive ? 11 : isSel ? 9 : 7}
              pathOptions={{
                color: '#ffffff',
                weight: isActive || isSel ? 3 : 2,
                fillColor: color,
                fillOpacity: 1,
              }}
              eventHandlers={{ click: () => onSelect?.(w) }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                <div className="text-[11px] leading-4">
                  <div className="font-semibold">{w.name}{isActive ? ' · active' : ''}</div>
                  <div className="text-stone-500">{w.distanceKm === 0 ? 'current location' : `${w.distanceKm.toFixed(1)} km · ${w.risk}`}</div>
                </div>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>
      <div className="flex flex-wrap items-center gap-4 border-t border-stone-100 px-4 py-2.5 text-[11px] text-stone-500">
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-stone-900" /> Active</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Low</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" /> Medium</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-orange-600" /> High</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-600" /> Critical</span>
        <span className="ml-auto hidden sm:block">OSM</span>
      </div>
    </div>
  );
}

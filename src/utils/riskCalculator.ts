export function haversineKm(aLat: number, aLng: number, bLat: number, bLng: number) {
  const R = 6371;
  const dLat = ((bLat - aLat) * Math.PI) / 180;
  const dLng = ((bLng - aLng) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((aLat * Math.PI) / 180) * Math.cos((bLat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

export function riskColor(risk: string) {
  switch (risk) {
    case 'LOW': return { dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' };
    case 'MEDIUM': return { dot: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' };
    case 'HIGH': return { dot: 'bg-orange-600', text: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200' };
    case 'CRITICAL': return { dot: 'bg-rose-600', text: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-200' };
    default: return { dot: 'bg-stone-400', text: 'text-stone-600', bg: 'bg-stone-50', border: 'border-stone-200' };
  }
}

export function riskScoreLabel(score: number) {
  if (score < 40) return 'LOW';
  if (score < 70) return 'MEDIUM';
  if (score < 85) return 'HIGH';
  return 'CRITICAL';
}

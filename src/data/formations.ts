import type { Formation, DepthPoint } from '../types';

export const formations: Formation[] = [
  { name: 'Alluvium', topM: 0, baseM: 420, lithology: 'Sand / clay', risk: 'LOW', events: 0, description: 'Surface conductor and soft clays. No major events.' },
  { name: 'Girujan Clay', topM: 420, baseM: 2980, lithology: 'Clay / shale', risk: 'MEDIUM', events: 6, description: 'Swelling clays. Channeling and pack-off risk at base.' },
  { name: 'Tipam Sand', topM: 2980, baseM: 3720, lithology: 'Sandstone reservoir', risk: 'HIGH', events: 22, description: 'Main reservoir. Mud loss, stuck pipe and kick cluster 3400–3460 m.' },
  { name: 'Barail', topM: 3720, baseM: 4100, lithology: 'Coal / shale / sand', risk: 'MEDIUM', events: 5, description: 'Overpressure compartments. Watch MW window.' },
  { name: 'Kopili', topM: 4100, baseM: 4500, lithology: 'Shale / limestone', risk: 'LOW', events: 2, description: 'Stable. Minor losses in fractured streaks.' },
];

const depths: DepthPoint[] = [];
for (let d = 3000; d <= 3420; d += 20) {
  const t = (d - 3000) / 420;
  depths.push({
    depth: d,
    rop: 22 - t * 5 + Math.sin(d / 90) * 0.9,
    torque: 14.5 + t * 4.6 + Math.sin(d / 70) * 0.7,
    wob: 10.8 + t * 2.1 + Math.cos(d / 110) * 0.4,
    mudWeight: 1.16 + t * 0.02,
    pressure: 298 + t * 62 + Math.sin(d / 120) * 4,
    offsetTorque: 14.2 + t * 5.8 + Math.sin((d - 30) / 65) * 1.1,
  });
}
export const drillingTrend = depths;

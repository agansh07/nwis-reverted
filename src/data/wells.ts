import type { Well } from '../types';

export const ACTIVE_WELL_ID = 'OIL-NK-18';

export const activeWell: Well = {
  id: ACTIVE_WELL_ID,
  name: 'OIL-NK-18',
  field: 'Naharkatiya',
  formation: 'Tipam Sand',
  status: 'Active',
  lat: 27.285,
  lng: 95.335,
  distanceKm: 0,
  depthM: 3420,
  durationDays: 48,
  risk: 'MEDIUM',
  riskScore: 68,
  rop: 18.4,
  wob: 12.5,
  torque: 18.7,
  rpm: 118,
  mudWeight: 1.18,
  isActive: true,
};

export const wells: Well[] = [
  activeWell,
  { id: 'OIL-NK-04', name: 'OIL-NK-04', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Completed', lat: 27.291, lng: 95.342, distanceKm: 1.1, depthM: 3450, durationDays: 62, risk: 'HIGH', riskScore: 82, rop: 17.8, wob: 13.1, torque: 17.2, rpm: 112, mudWeight: 1.2 },
  { id: 'OIL-NK-07', name: 'OIL-NK-07', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Completed', lat: 27.279, lng: 95.328, distanceKm: 1.4, depthM: 3380, durationDays: 74, risk: 'HIGH', riskScore: 79, rop: 19.2, wob: 11.8, torque: 16.9, rpm: 121, mudWeight: 1.17 },
  { id: 'OIL-NK-11', name: 'OIL-NK-11', field: 'Naharkatiya', formation: 'Girujan Clay', status: 'Completed', lat: 27.298, lng: 95.325, distanceKm: 2.0, depthM: 3510, durationDays: 81, risk: 'CRITICAL', riskScore: 91, rop: 15.7, wob: 14.2, torque: 23.1, rpm: 105, mudWeight: 1.22 },
  { id: 'OIL-MN-02', name: 'OIL-MN-02', field: 'Moran', formation: 'Barail', status: 'Completed', lat: 27.265, lng: 95.355, distanceKm: 3.2, depthM: 3980, durationDays: 69, risk: 'MEDIUM', riskScore: 64, rop: 16.4, wob: 12.9, torque: 19.4, rpm: 110, mudWeight: 1.19 },
  { id: 'OIL-NK-14', name: 'OIL-NK-14', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Suspended', lat: 27.312, lng: 95.348, distanceKm: 3.8, depthM: 3610, durationDays: 57, risk: 'MEDIUM', riskScore: 61, rop: 17.1, wob: 12.2, torque: 18.1, rpm: 115, mudWeight: 1.18 },
  { id: 'OIL-DG-03', name: 'OIL-DG-03', field: 'Dighoi', formation: 'Lakwa Sand', status: 'Completed', lat: 27.251, lng: 95.312, distanceKm: 4.6, depthM: 4210, durationDays: 74, risk: 'LOW', riskScore: 32, rop: 20.1, wob: 11.2, torque: 15.8, rpm: 124, mudWeight: 1.15 },
  { id: 'OIL-NK-09', name: 'OIL-NK-09', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Completed', lat: 27.305, lng: 95.361, distanceKm: 4.9, depthM: 3495, durationDays: 66, risk: 'HIGH', riskScore: 77, rop: 16.9, wob: 13.5, torque: 21.3, rpm: 108, mudWeight: 1.21 },
  { id: 'OIL-MN-05', name: 'OIL-MN-05', field: 'Moran', formation: 'Barail', status: 'Completed', lat: 27.242, lng: 95.368, distanceKm: 5.7, depthM: 3850, durationDays: 71, risk: 'LOW', riskScore: 28, rop: 21.3, wob: 10.8, torque: 15.2, rpm: 128, mudWeight: 1.14 },
  { id: 'OIL-NK-02', name: 'OIL-NK-02', field: 'Naharkatiya', formation: 'Girujan Clay', status: 'Abandoned', lat: 27.322, lng: 95.318, distanceKm: 6.1, depthM: 3720, durationDays: 88, risk: 'CRITICAL', riskScore: 88, rop: 14.9, wob: 15.1, torque: 24.6, rpm: 98, mudWeight: 1.24 },
  { id: 'OIL-DG-07', name: 'OIL-DG-07', field: 'Dighoi', formation: 'Lakwa Sand', status: 'Completed', lat: 27.238, lng: 95.295, distanceKm: 6.8, depthM: 4145, durationDays: 63, risk: 'LOW', riskScore: 35, rop: 19.8, wob: 11.5, torque: 16.4, rpm: 122, mudWeight: 1.16 },
  { id: 'OIL-NK-16', name: 'OIL-NK-16', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Completed', lat: 27.315, lng: 95.372, distanceKm: 7.2, depthM: 3560, durationDays: 59, risk: 'MEDIUM', riskScore: 58, rop: 18.1, wob: 12.4, torque: 17.9, rpm: 117, mudWeight: 1.18 },
  { id: 'OIL-MN-09', name: 'OIL-MN-09', field: 'Moran', formation: 'Kopili', status: 'Completed', lat: 27.228, lng: 95.345, distanceKm: 7.9, depthM: 4020, durationDays: 77, risk: 'MEDIUM', riskScore: 66, rop: 16.2, wob: 13.0, torque: 19.8, rpm: 109, mudWeight: 1.2 },
  { id: 'OIL-DG-11', name: 'OIL-DG-11', field: 'Dighoi', formation: 'Lakwa Sand', status: 'Completed', lat: 27.26, lng: 95.28, distanceKm: 8.4, depthM: 4290, durationDays: 68, risk: 'LOW', riskScore: 24, rop: 20.6, wob: 10.5, torque: 14.9, rpm: 130, mudWeight: 1.13 },
  { id: 'OIL-NK-21', name: 'OIL-NK-21', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Completed', lat: 27.33, lng: 95.355, distanceKm: 9.1, depthM: 3480, durationDays: 61, risk: 'MEDIUM', riskScore: 55, rop: 18.7, wob: 12.0, torque: 17.5, rpm: 119, mudWeight: 1.17 },
  { id: 'OIL-HP-01', name: 'OIL-HP-01', field: 'Hapjan', formation: 'Barail', status: 'Completed', lat: 27.21, lng: 95.38, distanceKm: 10.3, depthM: 3910, durationDays: 73, risk: 'LOW', riskScore: 31, rop: 19.5, wob: 11.0, torque: 16.1, rpm: 123, mudWeight: 1.15 },
  { id: 'OIL-NK-25', name: 'OIL-NK-25', field: 'Naharkatiya', formation: 'Girujan Clay', status: 'Completed', lat: 27.275, lng: 95.41, distanceKm: 11.2, depthM: 3650, durationDays: 70, risk: 'HIGH', riskScore: 74, rop: 17.3, wob: 13.2, torque: 20.7, rpm: 111, mudWeight: 1.21 },
  { id: 'OIL-MN-12', name: 'OIL-MN-12', field: 'Moran', formation: 'Kopili', status: 'Completed', lat: 27.35, lng: 95.29, distanceKm: 12.5, depthM: 4080, durationDays: 75, risk: 'MEDIUM', riskScore: 60, rop: 17.6, wob: 12.7, torque: 18.3, rpm: 114, mudWeight: 1.19 },
  { id: 'OIL-DG-15', name: 'OIL-DG-15', field: 'Dighoi', formation: 'Lakwa Sand', status: 'Completed', lat: 27.19, lng: 95.32, distanceKm: 13.1, depthM: 4330, durationDays: 67, risk: 'LOW', riskScore: 22, rop: 21.0, wob: 10.2, torque: 14.5, rpm: 132, mudWeight: 1.12 },
  { id: 'OIL-NK-29', name: 'OIL-NK-29', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Completed', lat: 27.295, lng: 95.43, distanceKm: 14.0, depthM: 3520, durationDays: 64, risk: 'MEDIUM', riskScore: 52, rop: 18.9, wob: 11.9, torque: 17.1, rpm: 120, mudWeight: 1.16 },
  { id: 'OIL-HP-04', name: 'OIL-HP-04', field: 'Hapjan', formation: 'Barail', status: 'Completed', lat: 27.18, lng: 95.4, distanceKm: 15.2, depthM: 3960, durationDays: 72, risk: 'LOW', riskScore: 27, rop: 20.3, wob: 10.9, torque: 15.6, rpm: 126, mudWeight: 1.14 },
  { id: 'OIL-NK-31', name: 'OIL-NK-31', field: 'Naharkatiya', formation: 'Tipam Sand', status: 'Completed', lat: 27.36, lng: 95.4, distanceKm: 16.4, depthM: 3590, durationDays: 60, risk: 'LOW', riskScore: 38, rop: 19.1, wob: 11.6, torque: 16.7, rpm: 121, mudWeight: 1.16 },
];

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type WellStatus = 'Active' | 'Completed' | 'Suspended' | 'Abandoned';
export type EventType =
  | 'Mud Loss'
  | 'Kick'
  | 'Stuck Pipe'
  | 'Torque Spike'
  | 'Fishing'
  | 'NPT'
  | 'Cement Issue'
  | 'Overpressure'
  | 'Drag Increase';

export interface Well {
  id: string;
  name: string;
  field: string;
  formation: string;
  status: WellStatus;
  lat: number;
  lng: number;
  distanceKm: number;
  depthM: number;
  durationDays: number;
  risk: RiskLevel;
  riskScore: number;
  rop: number;
  wob: number;
  torque: number;
  rpm: number;
  mudWeight: number;
  isActive?: boolean;
}

export interface DrillEvent {
  id: string;
  wellId: string;
  wellName: string;
  type: EventType;
  depthM: number;
  formation: string;
  severity: RiskLevel;
  cause: string;
  mitigation: string;
  outcome: string;
  durationHrs: number;
  date: string;
  source: string;
}

export interface Alert {
  id: string;
  title: string;
  detail: string;
  severity: RiskLevel;
  depthRange?: string;
  confidence: number;
  wells: string[];
  action: string;
  time: string;
}

export interface Formation {
  name: string;
  topM: number;
  baseM: number;
  lithology: string;
  risk: RiskLevel;
  events: number;
  description: string;
}

export interface DepthPoint {
  depth: number;
  rop: number;
  torque: number;
  wob: number;
  mudWeight: number;
  pressure: number;
  offsetTorque?: number;
}

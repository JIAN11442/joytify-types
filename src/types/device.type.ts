export interface ExpandNavigator extends Navigator {
  connection: NetworkInformation;
}

export interface SessionNavigator {
  userAgent: string;
  maxTouchPoints: number;
  onLine: boolean;
  connection: NetworkInformation;
}

interface NetworkInformation {
  effectiveType: string;
  type: string;
  downlink: number;
  downlinkMax: number;
  rtt: number;
  saveData: boolean;
}

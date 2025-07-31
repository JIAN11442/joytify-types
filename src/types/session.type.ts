// ===================== Response Types =====================
export interface SessionResponse extends SessionInfo {
  _id: string;
  user: string;
  isCurrent: boolean;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// ===================== Other Types =====================

export interface SessionInfo {
  userAgent: string;
  device: DeviceInfo;
  browser: BrowserInfo;
  network: NetworkInfo;
  location: LocationInfo;
  status: StatusInfo;
}

export interface DeviceInfo {
  name: string;
  type: string;
  os: string;
  osVersion: string;
  screen: {
    width: number;
    height: number;
    pixelRatio: number;
  };
  isTouch: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface BrowserInfo {
  name: string;
  version: string;
  engine: string;
  engineVersion: string;
}

export interface NetworkInfo {
  type: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

export interface LocationInfo {
  ipAddress: string;
  country: string;
  region: string;
  city: string;
  timezone: string;
  isp: string;
}

export interface StatusInfo {
  online: boolean;
  lastActive: string;
}

export interface DeviceStats {
  total: number;
  online: number;
  offline: number;
}

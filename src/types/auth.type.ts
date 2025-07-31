import { AuthForOptions } from "../constants/auth.constant";
import { SessionInfo } from "./session.type";

// ===================== Request Types =====================
export interface LoginRequest {
  email: string;
  password?: string;
  sessionInfo: SessionInfo;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  sessionInfo: SessionInfo;
}

// ===================== Constants Types =====================
export type AuthForType = (typeof AuthForOptions)[keyof typeof AuthForOptions];

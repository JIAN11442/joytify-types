import { HexPaletee } from "./paletee.type";
import { AuthForOptions } from "../constants/auth.constant";

// ===================== Request Types =====================
export interface LoginRequest {
  email: string;
  password?: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

// ===================== Constants Types =====================
export type AuthForType = (typeof AuthForOptions)[keyof typeof AuthForOptions];

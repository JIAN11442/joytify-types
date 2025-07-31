import {
  VerificationCodeActions,
  VerificationForOptions,
} from "../constants/verification.constant";

// ===================== Request Types =====================

export interface SendCodeRequest {
  email: string;
  shouldResendCode: boolean;
  registerFn?: () => void;
}

export interface VerifyCodeRequest {
  email: string;
  code: string;
}

// ===================== Response Types =====================

export interface SendCodeResponse {
  id: string;
  action: VerificationCodeActionType;
}

export interface VerifyCodeResponse {
  verified: boolean;
}

// ===================== Constants Types =====================

export type VerificationForType =
  (typeof VerificationForOptions)[keyof typeof VerificationForOptions];

export type VerificationCodeActionType =
  (typeof VerificationCodeActions)[keyof typeof VerificationCodeActions];

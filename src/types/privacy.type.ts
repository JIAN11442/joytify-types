import { PrivacyOptions } from "../constants/privacy.constant";

export type PrivacyType = (typeof PrivacyOptions)[keyof typeof PrivacyOptions];

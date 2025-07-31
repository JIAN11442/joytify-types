import { SupportedLocale } from "../constants/locale.constant";

// ===================== Constants Types =====================
export type SupportedLocaleType = (typeof SupportedLocale)[keyof typeof SupportedLocale];

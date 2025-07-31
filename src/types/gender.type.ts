import { GenderOptions } from "../constants/gender.constant";

export type GenderOptionsKeys = keyof typeof GenderOptions;
export type GenderOptionsType = (typeof GenderOptions)[GenderOptionsKeys];

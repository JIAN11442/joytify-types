import { AudioVolume, LoopMode } from "../constants";

export type LoopModeType = (typeof LoopMode)[keyof typeof LoopMode];
export type AudioVolumeType = (typeof AudioVolume)[number];

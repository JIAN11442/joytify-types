import { SupportedLocaleType } from "./locale.type";
import { Queue } from "./playback.type";
import { LoopModeType, AudioVolumeType } from "./player.type";
import { RefactorSongResponse } from "./song.type";

// ===================== Request Types =====================

export type UpdateUserPreferencesCookieRequest = Partial<UserPreferencesCookieParams>;

// ===================== Response Types =====================

export type VerifiedUserPreferencesCookieResponse = UserPreferencesCookieParams & {
  iat: number;
  exp: number;
  aud: string[];
};

export type RefactorVerifiedUserPreferencesCookieResponse = Omit<
  VerifiedUserPreferencesCookieResponse,
  "player"
> & {
  player: VerifiedPlayerParams;
};

// ===================== Other Types =====================

type BasePlayerParams = {
  volume: AudioVolumeType;
  shuffle: boolean;
  loop: LoopModeType;
};

export type PlayerCookieParams = BasePlayerParams & {
  playlistSongs: string[];
  playbackQueue: { queue: string[]; currentIndex: number };
};

export type VerifiedPlayerParams = BasePlayerParams & {
  playlistSongs: RefactorSongResponse[];
  playbackQueue: { queue: Queue; currentIndex: number };
};

export type UserPreferencesCookieParams = {
  sidebarCollapsed: boolean;
  locale: SupportedLocaleType;
  player: PlayerCookieParams;
};

import { PlaybackStateOptions } from "../constants/playback.constant";
import { PopulatedSongResponse, RefactorSongResponse } from "./song.type";
import { NonEmptyArray } from "./util.type";

// ===================== Request Types =====================

export interface CreatePlaybackLogRequest {
  songId: string;
  duration: number;
  state: PlaybackStateType;
  // timestamp: Date;
}

// ===================== Response Types =====================

export interface BasePlaybackLogResponse {
  _id: string;
  user: string;
  song: string;
  artist: string;
  state: PlaybackStateType;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PlaybackLogResponse {
  playbackLog: BasePlaybackLogResponse;
  shouldPrompt: boolean;
  song: RefactorSongResponse;
}

export type PopulatedPlaybackLogResponse = Omit<BasePlaybackLogResponse, "song"> & {
  song: PopulatedSongResponse;
};

export type RefactorPlaybackLogResponse = {
  _id: string;
  song: RefactorSongResponse;
};

// ===================== Constants Types =====================

export type PlaybackStateType = (typeof PlaybackStateOptions)[keyof typeof PlaybackStateOptions];

// ===================== Other Types =====================

export type PlaybackStats = {
  duration: number;
  state: PlaybackStateType;
  timestamp: Date;
};

export type PlaybackSong = {
  id: string;
  artist: string;
  playbacks: PlaybackStats[];
};

export type Queue = NonEmptyArray<RefactorSongResponse>;

export type PlaybackQueueWithObjects = {
  queue: Queue;
  currentIndex: number;
};

export type PlaybackQueueWithIds = {
  queue: string[];
  currentIndex: number;
};

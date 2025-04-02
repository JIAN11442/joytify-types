import { PlaybackStateOptions } from "../constants/playback.constant";

// ===================== Request Types =====================

export interface StorePlaybackLogRequest {
  songId: string;
  duration: number;
  state: PlaybackStateType;
  timestamp: Date;
}

// ===================== Response Types =====================

export interface PlaybackLogResponse {
  _id: string;
  user: string;
  songs: PlaybackSong[];
  createdAt: Date;
  updatedAt: Date;
}

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

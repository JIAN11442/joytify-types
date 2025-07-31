import { MusicianResponse } from "./musician.type";
import { HexPaletee } from "./paletee.type";
import { SongResponse } from "./song.type";

// ===================== Request Types =====================
export type GetMonthlyStatsRequest = {
  userId: string;
  yearMonth: string;
  timezone?: string;
};

// ===================== Response Types =====================

export type PlaybackStatResponse = {
  _id: string;
  user: string;
  stats: UserStats;
  createdAt: string;
  updatedAt: string;
};

export type PopulatedMonthlyStatsResponse = Omit<UserStats, "songs" | "artists"> & {
  songs: (Omit<SongStat, "song"> & {
    _id: string;
    title: string;
    artist: string;
    imageUrl: string;
    totalDuration: number;
    paletee: HexPaletee;
  })[];
  artists: (Omit<ArtistStat, "artist"> & MusicianResponse)[];
};

// ===================== Other Types =====================
export type SongStat = {
  song: string;
  totalDuration: number;
};

export type ArtistStat = {
  artist: string;
  totalDuration: number;
};

export type PeakHourStat = {
  hour: number;
  totalDuration: number;
  utilization: number;
};

export type MonthlySummaryStat = {
  month: number;
  totalDuration: number;
  growthPercentage: number;
  topArtist: string;
  topArtistTotalPlaybackTime: number;
};

export type UserStats = {
  songs: SongStat[];
  artists: ArtistStat[];
  peakHour: PeakHourStat[];
  summary: MonthlySummaryStat;
  createdAt: string;
  updatedAt: string;
};

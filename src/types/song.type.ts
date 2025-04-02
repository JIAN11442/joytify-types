import { HexPaletee } from "./paletee.type";

// ===================== Request Types =====================

export interface CreateSongRequest {
  title: string;
  artist: string;
  songUrl: string;
  playlist_for: string;
  duration: number;
  imageUrl?: string;
  album?: string;
  lyricists?: string[];
  composers?: string[];
  languages?: string[];
  genres?: string[];
  tags?: string[];
  lyrics?: string[];
  releaseDate?: string;
}

export interface DeleteSongRequest {
  songId: string;
}

// ===================== Response Types =====================

export interface SongResponse {
  _id: string;
  title: string;
  creator: string;
  artist: string;
  songUrl: string;
  imageUrl: string;
  duration: number;
  releaseDate: Date;
  album: string;
  composers: string[];
  lyricists: string[];
  languages: string[];
  genres: string[];
  tags: string[];
  lyrics: string[];
  playlist_for: string[];
  followers: string[];
  ratings: string[];
  activity: {
    average_rating: number;
    total_playback_count: number;
    total_playback_duration: number;
    weighted_average_playback_duration: number;
  };
  paletee: HexPaletee;
  createdAt: Date;
  updatedAt: Date;
}

export type SongsResponse = SongResponse[];

export type RefactorSongResponse = Omit<SongResponse, "lyricists" | "composers" | "languages"> & {
  lyricists: string;
  composers: string;
  languages: string;
};

// ===================== Other Types =====================

export type Song = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
};

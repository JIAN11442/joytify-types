import {
  SongDeleteStatus,
  SongAssociationAction,
  SongProfileDetailsOptions,
} from "../constants/song.constant";
import { HexPaletee } from "./paletee.type";

// ===================== Request Types =====================

export interface CreateSongRequest {
  title: string;
  artist: string;
  songUrl: string;
  playlistFor: string;
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
  shouldDeleteSongs: boolean;
}

export interface UpdateSongInfoRequest {
  songId: string;
  title?: string;
  imageUrl?: string;
}

export interface UpdateSongRateStateRequest {
  songId: string;
  rating: number;
  isLiked: boolean;
  comment: string;
}

export interface UpdateSongPlaylistsRequest {
  songId: string;
  playlistsToAdd: string[];
  playlistsToRemove: string[];
}

// ===================== Response Types =====================

export interface SongResponse {
  _id: string;
  title: string;
  creator: string;
  artist: string;
  lyricists: string[];
  composers: string[];
  songUrl: string;
  imageUrl: string;
  duration: number;
  playlistFor: string[];
  languages: string[];
  genres: string[];
  tags: string[];
  album: string;
  lyrics: string[];
  releaseDate: Date;
  paletee: HexPaletee;
  favorites: string[];
  ratings: PopulatedSongRate[];
  activities: {
    totalRatingCount: number;
    averageRating: number;
    totalPlaybackCount: number;
    totalPlaybackDuration: number;
    weightedAveragePlaybackDuration: number;
  };
  ownership: {
    isPlatformOwned: boolean;
    transferredAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type SongsResponse = SongResponse[];

export type SongStatsResponse = {
  totalSongs: number;
  totalPlaybackCount: number;
  totalWeightedPlaybackDuration: number;
  averageRating: number;
};

export type RefactorSongResponse = Omit<
  SongResponse,
  "lyricists" | "composers" | "languages" | "ratings"
> & {
  lyricists: string;
  composers: string;
  languages: string;
  ratings: RefactorPopulatedSongRate[];
};

// ===================== Other Types =====================

export type Song = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
};

export type SongRate = {
  id: string;
  rating: number;
  comment: string;
};

export type PopulatedSongRate = Omit<SongRate, "id"> & {
  id: {
    _id: string;
    username: string;
    profileImage: string;
  };
};

export interface RefactorPopulatedSongRate extends SongRate {
  username: string;
  profileImage: string;
}

export type SongDeleteStatusType = (typeof SongDeleteStatus)[keyof typeof SongDeleteStatus];

export type SongAssociationActionType =
  (typeof SongAssociationAction)[keyof typeof SongAssociationAction];

export type SongProfileDetailsType =
  (typeof SongProfileDetailsOptions)[keyof typeof SongProfileDetailsOptions];

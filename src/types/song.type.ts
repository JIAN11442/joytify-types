import {
  SongDeleteStatus,
  SongAssociationAction,
  SongProfileDetailsOptions,
} from "../constants/song.constant";
import { HexPaletee } from "./paletee.type";
import { RatingResponse } from "./rating.type";

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

export interface UpdateSongRateRequest {
  rating?: number;
  comment?: string;
  isLiked?: boolean;
}

export interface UpdateSongPlaylistsRequest {
  songId: string;
  playlistsToAdd: string[];
  playlistsToRemove: string[];
}

export interface GetSongsByQueryRequest {
  query: string;
  playlistId?: string;
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
  ratings: string[];
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

export type PopulatedSongResponse = Omit<SongResponse, "ratings" | "artist" | "album"> & {
  artist: { _id: string; name: string };
  album: { _id: string; title: string };
  ratings: PopulatedSongRate[];
};

export type RefactorSongResponse = Omit<
  SongResponse,
  "artist" | "album" | "lyricists" | "composers" | "languages" | "ratings"
> & {
  artist: { _id: string; name: string };
  album: { _id: string; title: string };
  lyricists: string;
  composers: string;
  languages: string;
  ratings: RefactorPopulatedSongRate[];
};

export type PaginatedSongsResponse = {
  page: number;
  totalDocs: number;
  docs: RefactorSongResponse[];
};

export type SongStatsResponse = {
  totalSongs: number;
  totalPlaybackCount: number;
  totalWeightedPlaybackDuration: number;
  averageRating: number;
};

// ===================== Constant Types =====================

export type SongDeleteStatusType = (typeof SongDeleteStatus)[keyof typeof SongDeleteStatus];

export type SongAssociationActionType =
  (typeof SongAssociationAction)[keyof typeof SongAssociationAction];

export type SongProfileDetailsType =
  (typeof SongProfileDetailsOptions)[keyof typeof SongProfileDetailsOptions];

// ===================== Other Types =====================

export type Song = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
};

export type PopulatedSongRate = RatingResponse & {
  user: {
    _id: string;
    username: string;
    profileImage: string;
  };
};

export type RefactorPopulatedSongRate = {
  id: string;
  username: string;
  profileImage: string;
  rating: number;
  comment: string;
};

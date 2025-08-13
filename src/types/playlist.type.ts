import { PopulatedSongResponse, RefactorSongResponse, SongResponse } from "./song.type";
import { HexPaletee } from "./paletee.type";
import { PrivacyType } from "./privacy.type";

// ===================== Request Types =====================
export interface GetPlaylistsRequest {
  search?: string;
}

export interface CreatePlaylistRequest {
  title?: string;
  description?: string;
  coverImage?: string;
  addedSongs?: string[];
}

export interface UpdatePlaylistRequest {
  playlistId: string;
  title?: string;
  description?: string;
  coverImage?: string;
  privacy?: PrivacyType;
  removedSongs?: string[];
}

export interface DeletePlaylistRequest {
  currentPlaylistId: string;
  targetPlaylistId?: string;
}

// ===================== Response Types =====================

/* basic playlist document */
export interface PlaylistResponse {
  _id: string;
  user: string;
  title: string;
  description?: string;
  coverImage: string;
  privacy: PrivacyType;
  default: boolean;
  paletee: HexPaletee;
  songs: string[];
  stats: {
    totalSongCount: number;
    totalSongDuration: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

/* get all playlists */
export type PlaylistsResponse = PlaylistResponse[];

/* get playlist by id - populate songs */
export type PopulatedPlaylistResponse = Omit<PlaylistResponse, "songs"> & {
  songs: PopulatedSongResponse[];
};

/* get playlist by id - refactor song's params */
export type RefactorPlaylistResponse = Omit<PopulatedPlaylistResponse, "songs"> & {
  songs: RefactorSongResponse[];
};

// ===================== Other Types =====================
export type Playlist = {
  _id: string;
  title: string;
  coverImage: string;
  description?: string;
};

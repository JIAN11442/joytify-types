import { SongResponse } from "./song.type";
import { HexPaletee } from "./paletee.type";
import { PrivacyType } from "./privacy.type";

// ===================== Request Types =====================
export interface GetPlaylistsRequest {
  search?: string;
}

export interface CreatePlaylistRequest {
  title?: string;
}

export interface UpdatePlaylistRequest {
  playlistId: string;
  title?: string;
  description?: string;
  cover_image?: string;
  privacy?: PrivacyType;
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
  cover_image: string;
  privacy: PrivacyType;
  default: boolean;
  paletee: HexPaletee;
  songs: string[];
  createdAt: Date;
  updatedAt: Date;
}

/* get all playlists */
export type PlaylistsResponse = PlaylistResponse[];

/* get playlist by id - populate songs */
export type PopulatedPlaylistResponse = Omit<PlaylistResponse, "songs"> & {
  songs: SongResponse[];
};

/* get playlist by id - refactor song's params */
export type RefactorPlaylistResponse = Omit<PopulatedPlaylistResponse, "songs"> & {
  songs: (Omit<SongResponse, "artist" | "composers" | "lyricists" | "languages"> & {
    artist: string;
    composers: string;
    lyricists: string;
    languages: string;
  })[];
};

// ===================== Other Types =====================
export type Playlist = {
  _id: string;
  title: string;
  cover_image: string;
  description?: string;
};

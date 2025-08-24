// ===================== Request Types =====================

import { HexPaletee } from "./paletee.type";
import { PopulatedSongResponse, RefactorSongResponse } from "./song.type";

// ===================== Request Types =====================

export interface CreateAlbumRequest {
  title: string;
  description?: string;
  coverImage?: string;
  artists?: string[];
}

export type UpdateAlbumRequest = {
  albumId: string;
  title?: string;
  coverImage?: string;
};

// ===================== Response Types =====================

export interface AlbumResponse {
  _id: string;
  creator: string;
  title: string;
  description?: string;
  coverImage?: string;
  paletee: HexPaletee;
  artists?: string[];
  songs: string[];
  users: string[];
  totalDuration: number;
  createdAt: Date;
  updatedAt: Date;
}

export type PopulatedAlbumResponse = Omit<AlbumResponse, "songs"> & {
  songs: PopulatedSongResponse[];
};

export type RefactorAlbumResponse = Omit<PopulatedAlbumResponse, "songs"> & {
  songs: RefactorSongResponse[];
};

export type PaginatedAlbumResponse = {
  page: number;
  totalDocs: number;
  docs: RefactorAlbumResponse[];
};

// ===================== Other Types =====================
export type Album = {
  _id: string;
  title: string;
  coverImage: string;
};

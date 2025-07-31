import { MusicianOptions } from "../constants/musician.constant";
import { RefactorSongResponse, SongResponse } from "./song.type";
import { HexPaletee } from "./paletee.type";

// ===================== Request Types =====================

export type GetMusicianIdRequest = {
  musician: string;
  type: MusicianType;
  createIfAbsent?: boolean;
};

// ===================== Response Types =====================

export type MusicianResponse = {
  _id: string;
  name: string;
  roles: string[];
  bio: string;
  coverImage: string;
  paletee: HexPaletee;
  songs: string[];
  albums: string[];
  followers: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type PopulatedMusicianResponse = Omit<MusicianResponse, "songs"> & {
  songs: SongResponse[];
};

export type RefactorMusicianResponse = Omit<PopulatedMusicianResponse, "songs"> & {
  songs: RefactorSongResponse[];
};

// ===================== Constants Types =====================

export type MusicianType = (typeof MusicianOptions)[keyof typeof MusicianOptions];

// ===================== Other Types =====================
export type Musician = {
  _id: string;
  name: string;
  coverImage: string;
  roles: string[];
};

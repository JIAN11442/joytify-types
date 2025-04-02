import { MusicianOptions } from "../constants/musician.constant";

// ===================== Request Types =====================

export type GetMusicianIdRequest = {
  musician: string;
  type: MusicianType;
  createIfAbsent?: boolean;
};

// ===================== Constants Types =====================

export type MusicianType = (typeof MusicianOptions)[keyof typeof MusicianOptions];

// ===================== Other Types =====================
export type Musician = {
  _id: string;
  name: string;
  cover_image: string;
  roles: string[];
};

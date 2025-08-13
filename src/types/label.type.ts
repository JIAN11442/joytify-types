import { LabelOptions } from "../constants/label.constant";
import { PopulatedSongResponse, RefactorSongResponse } from "./song.type";
import { HexPaletee } from "./paletee.type";

// ===================== Request Types =====================

export interface CreateLabelRequest {
  label: string;
  type: LabelOptionsType;
}

export interface GetLabelIdRequest {
  label: string;
  type: LabelOptionsType;
  default?: boolean;
  createIfAbsent?: boolean;
}

// ===================== Response Types =====================
export interface LabelResponse {
  _id: string;
  label: string;
  type: LabelOptionsType;
  coverImage: string;
  paletee: HexPaletee;
  author: string;
  users: string[];
  songs: string[];
  default: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type PopulatedSearchLabelResponse = Omit<LabelResponse, "songs"> & {
  songs: PopulatedSongResponse[];
};

export type RefactorSearchLabelResponse = Omit<PopulatedSearchLabelResponse, "songs"> & {
  songs: RefactorSongResponse[];
};

export interface RefactorInputLabelResponse {
  default: LabelItems;
  created: LabelItems;
}

// ===================== Constants Types =====================
export type LabelOptionsType = (typeof LabelOptions)[keyof typeof LabelOptions];

// ===================== Other Types =====================
export type Label = {
  id: string;
  label: string;
};

type LabelItems = {
  feature: Label[];
  genre: Label[];
  tag: Label[];
  region: Label[];
  language: Label[];
  gender: Label[];
};

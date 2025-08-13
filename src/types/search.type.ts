import { SearchFilterOptions } from "../constants";
import { RefactorAlbumResponse } from "./album.type";
import { RefactorSearchLabelResponse } from "./label.type";
import { RefactorMusicianResponse } from "./musician.type";
import { RefactorSongResponse } from "./song.type";

// ===================== Request Types =====================
export type SearchContentByTypeRequest = {
  type: SearchFilterType;
  query: string;
  page: number;
};

// ===================== Response Types =====================

export interface SearchSongResponse extends BaseSearchResponse {
  docs: RefactorSongResponse[];
}

export interface SearchMusicianResponse extends BaseSearchResponse {
  docs: RefactorMusicianResponse[];
}

export interface SearchAlbumResponse extends BaseSearchResponse {
  docs: RefactorAlbumResponse[];
}

export interface SearchLabelResponse extends BaseSearchResponse {
  docs: RefactorSearchLabelResponse[];
}

export type SearchAllResponse = {
  songs: RefactorSongResponse[];
  musicians: RefactorMusicianResponse[];
  albums: RefactorAlbumResponse[];
  genresAndTags: RefactorSearchLabelResponse[];
  languages: RefactorSearchLabelResponse[];
};

export type SearchContentByTypeResponse =
  | SearchSongResponse
  | SearchMusicianResponse
  | SearchAlbumResponse
  | SearchLabelResponse
  | SearchAllResponse;

// ===================== Constant Types =====================
export type SearchFilterType = (typeof SearchFilterOptions)[keyof typeof SearchFilterOptions];

// ===================== Other Types =====================
type BaseSearchResponse = {
  page: number;
  totalDocs: number;
};

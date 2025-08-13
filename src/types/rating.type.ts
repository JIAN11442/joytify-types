import { RatingTypeOptions } from "../constants";

// ===================== Request Types =====================
export interface UpsertRatingRequest {
  songId?: string;
  songDuration?: number;
  rating: number;
  comment?: string;
}

export interface UpsertSongRatingRequet extends UpsertRatingRequest {
  liked: boolean;
}

// ===================== Response Types =====================
export interface RatingResponse {
  _id: string;
  type: RatingType;
  user: string;
  song?: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

// ===================== Constant Types =====================
export type RatingType = (typeof RatingTypeOptions)[keyof typeof RatingTypeOptions];

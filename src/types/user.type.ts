import { PasswordResetStatus, ProfileCollections } from "../constants/user.constant";
import { HexPaletee } from "./paletee.type";

// ===================== Request Types =====================

export interface UpdateUserInfoRequest {
  email?: string;
  username?: string;
  profile_img?: string;
}

export interface ResetPasswordRequest {
  token: string;
  currentPassword: string;
  newPassword: string;
}

export interface ProfileCollectionInfoRequest {
  page: number;
  collection: ProfileCollectionsType;
}

// ===================== Response Types =====================

export interface UserResponse {
  _id: string;
  email: string;
  username: string;
  profile_img: string;
  verified: boolean;
  auth_for_third_party: boolean;
  paletee: HexPaletee;
  playlists: string[];
  songs: string[];
  albums: string[];
  following: string[];
  account_info: {
    total_playlists: number;
    total_songs: number;
    total_albums: number;
    total_following: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthUserResponse {
  _id: string;
  profile_img: string;
}

export interface ProfileUserResponse
  extends Omit<UserResponse, "playlists" | "songs" | "albums" | "following"> {
  playlists: ProfileDocs[];
  songs: ProfileDocs[];
  albums: ProfileDocs[];
  following: ProfileDocs[];
}

export interface RefactorProfileUserResponse
  extends Omit<UserResponse, "playlists" | "songs" | "albums" | "following"> {
  playlists: { docs: ProfileDocs[]; totalDocs: number };
  songs: { docs: ProfileDocs[]; totalDocs: number };
  albums: { docs: ProfileDocs[]; totalDocs: number };
  following: { docs: ProfileDocs[]; totalDocs: number };
}

export interface ProfileCollectionInfoResponse {
  page: number;
  totalDocs: number;
  docs: ProfileDocs[];
}

// ===================== Constant Types =====================

export type PasswordResetStatusType =
  (typeof PasswordResetStatus)[keyof typeof PasswordResetStatus];

export type ProfileCollectionsType = (typeof ProfileCollections)[keyof typeof ProfileCollections];

// ===================== Other Types =====================

export type ProfileDocs = {
  _id: string;
  title: string;
  imageUrl: string;
  description?: string | string[];
};

import {
  AccountDeregistrationStatus,
  PasswordUpdateStatus,
  ProfileCollections,
} from "../constants/user.constant";
import { HexPaletee } from "./paletee.type";
import { SupportedLocaleType } from "./locale.type";
import { AudioVolumeType, LoopModeType } from "./player.type";
import { PlaybackQueueWithIds } from "./playback.type";

// ===================== Request Types =====================

export interface UpdateUserInfoRequest {
  email?: string;
  username?: string;
  profileImage?: string;
  gender?: string;
  country?: string;
  dateOfBirth?: string;
  monthlyStatistic?: boolean;
  followingArtistUpdate?: boolean;
  systemAnnouncement?: boolean;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ResetPasswordRequest extends ChangePasswordRequest {
  token: string;
}

export interface ProfileCollectionInfoRequest {
  page: number;
  collection: ProfileCollectionsType;
}

export interface DeregisterUserAccountRequest {
  shouldDeleteSongs: boolean;
}

// ===================== Response Types =====================

export interface UserResponse {
  _id: string;
  email: string;
  username: string;
  profileImage: string;
  verified: boolean;
  authForThirdParty: boolean;
  paletee: HexPaletee;
  playlists: string[];
  songs: string[];
  albums: string[];
  following: string[];
  notifications: UserNotifications;
  accountInfo: {
    totalPlaylists: number;
    totalSongs: number;
    totalAlbums: number;
    totalFollowing: number;
  };
  personalInfo: {
    gender: string;
    country: string;
    dateOfBirth: Date;
  };
  userPreferences: {
    sidebarCollapsed: boolean;
    locale: SupportedLocaleType;
    notifications: {
      monthlyStatistic: boolean;
      followingArtistUpdate: boolean;
      systemAnnouncement: boolean;
    };
    player: {
      volume: AudioVolumeType;
      shuffle: boolean;
      loop: LoopModeType;
      playlistSongs: string[];
      playbackQueue: PlaybackQueueWithIds;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthUserResponse {
  _id: string;
  profileImage: string;
}

export interface ProfileUserResponse
  extends Omit<UserResponse, "playlists" | "songs" | "albums" | "following"> {
  playlists: ProfileDocs[];
  songs: ProfileDocs[];
  albums: ProfileDocs[];
  following: ProfileDocs[];
}

export interface RefactorProfileUserResponse
  extends Omit<UserResponse, "playlists" | "songs" | "albums" | "following" | "personalInfo"> {
  playlists: { docs: ProfileDocs[]; totalDocs: number };
  songs: { docs: ProfileDocs[]; totalDocs: number };
  albums: { docs: ProfileDocs[]; totalDocs: number };
  following: { docs: ProfileDocs[]; totalDocs: number };
  personalInfo: {
    gender: { _id: string; label: string } | null;
    country: { _id: string; label: string } | null;
    dateOfBirth: Date | null;
  };
}

export interface ProfileCollectionInfoResponse {
  page: number;
  totalDocs: number;
  docs: ProfileDocs[];
}

// ===================== Constant Types =====================

export type PasswordUpdateStatusType =
  (typeof PasswordUpdateStatus)[keyof typeof PasswordUpdateStatus];

export type ProfileCollectionsType = (typeof ProfileCollections)[keyof typeof ProfileCollections];

export type AccountDeregistrationStatusType =
  (typeof AccountDeregistrationStatus)[keyof typeof AccountDeregistrationStatus];

// ===================== Other Types =====================

export type ProfileDocs = {
  _id: string;
  title: string;
  imageUrl: string;
  description?: string | string[];
};

type Notification = {
  id: string;
  viewed: boolean;
  read: boolean;
};

export type UserNotifications = Notification[];

import { NotificationFilterOptions } from "../constants";

// ===================== Request Types =====================

export type CreateSystemAnnouncementRequest = SystemAnnouncement;

// ===================== Response Types =====================
export interface NotificationResponse {
  _id: string;
  type: NotificationFilterType;
  followingArtistUpdate?: Partial<followingArtistUpdate>;
  systemAnnouncement?: Partial<SystemAnnouncement>;
  createdAt: Date;
  updatedAt: Date;
}

export interface RefactorNotificationResponse extends NotificationResponse {
  monthlyStatistic?: Partial<monthlyStatistic>;
  viewed: boolean;
  read: boolean;
}

export interface PaginatedNotificationResponse {
  page: number;
  totalDocs: number;
  docs: RefactorNotificationResponse[];
}

export interface NotificationCountsResponse {
  all: number;
  monthlyStatistic: number;
  followingArtistUpdate: number;
  systemAnnouncement: number;
}

// ===================== Contants Types =====================

export type NotificationFilterType =
  (typeof NotificationFilterOptions)[keyof typeof NotificationFilterOptions];

// ===================== Other Types =====================
type monthlyStatistic = {
  month: number;
  year: number;
  totalDuration: number;
  growthPercentage: number;
  topArtist: string;
  topArtistTotalPlaybackTime: number;
};

type followingArtistUpdate = {
  uploaderId: string;
  artistId: string;
  artistName: string;
  songName: string;
  albumName: string;
};

type SystemAnnouncement = {
  date: string;
  startTime: string;
  endTime: string;
};

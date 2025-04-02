// ===================== Request Types =====================

export interface CreateAlbumRequest {
  title: string;
  description?: string;
  cover_image?: string;
  artist?: string;
}

// ===================== Response Types =====================

export interface AlbumResponse {
  _id: string;
  title: string;
  description?: string;
  cover_image?: string;
  artist?: string;
  songs: string[];
  users: string[];
  total_duration: number;
  createdAt: Date;
  updatedAt: Date;
}

// ===================== Other Types =====================
export type Album = {
  _id: string;
  title: string;
  cover_image: string;
};

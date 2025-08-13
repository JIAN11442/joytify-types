export enum UploadFolder {
  SONGS_MP3 = "songs/mp3",
  SONGS_IMAGE = "songs/image",
  PLAYLISTS_IMAGE = "playlists/image",
  ALBUMS_IMAGE = "albums/image",
  MUSICIANS_IMAGE = "musicians/image",
  USERS_IMAGE = "users/image",
  LABELS_IMAGE = "labels/image",
}

export enum FileExtension {
  PNG = ".png",
  JPEG = ".jpeg",
  JPG = ".jpg",
  MP3 = ".mp3",
  GIF = ".gif",
}

// AWS S3 CONFIG
export const S3_CONFIG = {
  BUCKET_NAME: "mern-joytify-bucket-yj",
  REGION: "ap-northeast-1",
  BASE_URL: "https://mern-joytify-bucket-yj.s3.ap-northeast-1.amazonaws.com",
} as const;

// AWS S3 DEFAULT IMAGES
export const S3_DEFAULT_IMAGES = {
  ALBUM: `${S3_CONFIG.BASE_URL}/defaults/default-album.png`,
  DEFAULT_PLAYLIST: `${S3_CONFIG.BASE_URL}/defaults/default-playlist.png`,
  LIKED_PLAYLIST: `${S3_CONFIG.BASE_URL}/defaults/liked-playlist.png`,
  MUSICIAN: `${S3_CONFIG.BASE_URL}/defaults/default-musician.png`,
  SONG: `${S3_CONFIG.BASE_URL}/defaults/unknown.png`,

  LABEL_GENRE: `${S3_CONFIG.BASE_URL}/defaults/default-label-genre.png`,
  LABEL_LANGUAGE: `${S3_CONFIG.BASE_URL}/defaults/default-label-language.png`,
  LABEL_TAG: `${S3_CONFIG.BASE_URL}/defaults/default-label-tag.png`,
  LABEL_OTHER: `${S3_CONFIG.BASE_URL}/defaults/default-label-other.png`,

  REGISTERED_LOGO: `${S3_CONFIG.BASE_URL}/defaults/registered-logo.png`,

  RESET_PASSWORD: `${S3_CONFIG.BASE_URL}/defaults/reset-password.png`,
  SEND_EMAIL: `${S3_CONFIG.BASE_URL}/defaults/send-email.png`,
} as const;

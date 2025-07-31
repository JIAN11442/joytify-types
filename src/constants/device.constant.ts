export const DEVICE_TYPES = {
  TABLET: "Tablet",
  MOBILE: "Mobile",
  LAPTOP: "Laptop",
  DESKTOP: "Desktop",
  UNKNOWN: "Unknown",
} as const;

export const SCREEN_SIZES = {
  LAPTOP: {
    MIN_WIDTH: 1024,
    MAX_WIDTH: 1920,
    MIN_DIAGONAL: 11,
    MAX_DIAGONAL: 17,
  },
  DESKTOP: {
    MIN_WIDTH: 1920,
    MIN_DIAGONAL: 17,
  },
} as const;

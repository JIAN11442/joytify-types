// ===================== Request Types =====================

import { HomepageSection } from "../constants/homepage.constant";

export type GetHomepageRecommendedSongsRequest = {
  songIds: string[];
};

// ===================== Constant Types =====================

export type HomepageSectionType = (typeof HomepageSection)[keyof typeof HomepageSection];

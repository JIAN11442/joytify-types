import { LabelOptions } from "../constants/label.constant";

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
  index?: number;
  users: string[];
  songs: string[];
  default: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RefactorLabelResponse {
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

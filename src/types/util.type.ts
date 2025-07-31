export type NonEmptyArray<T> = [T, ...T[]];

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type PaginationQueryResponse<T> = {
  page: number;
  totalDocs: number;
  docs: T[];
};

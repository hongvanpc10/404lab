export interface Error {
  message: string;
  code: number;
}

export type PaginatedData<Data = any, Other = {}> = {
  data: Data[];
  total: number;
  limit: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  nextPage: number | null;
  hasPrevPage: boolean;
  prevPage: number | null;
} & Other;

export interface Params {
  limit?: number;
  page?: number;
  sort?: string;
  order?: 1 | -1;
}

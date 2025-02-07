// types.ts
export type Account = {
  id: number;
  owner: string;
  balance: number;
  currency: string;
  created_at: string;
};

export type AccountsQueryParams = {
  page_id: number;
  page_size: number;
};

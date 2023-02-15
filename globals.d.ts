export type Pagination = {
  total: number;
  current_page: number;
  last_page: number;
}

export type WithPagination<T> = {
  pagination: Pagination;
  items: T[];
}

export type Localization = {
  key: string;
  [key: string]: string;
}

export type ConfigurationEntry<T> = {
  id: number;
  key: string;
  group: string;
  title: string;
  description: string;
  type: string;
  value: T;
  created_at: string;
  updated_at: string;
}

export type Banner = {
  id: number;
  title: string;
  type: 'static' | 'interactive';
  source: string;
  href: string | null;
  page: string | null;
  category: string | null;
  created_at: string;
  updated_at: string;
}

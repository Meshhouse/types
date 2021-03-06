export type Pagination = {
  total: number;
  current_page: number;
  last_page: number;
}

export type WithPagination<T> = {
  pagination: Pagination;
  items: T[];
}

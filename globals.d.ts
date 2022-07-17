export type WithPagination<T> = {
  pagination: {
    total: number,
    current_page: number,
    last_page: number
  }
  items: T[]
}

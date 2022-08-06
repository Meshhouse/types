export type StaticPage = {
  id: number;
  slug: string;
  title_en?: string;
  title_ru?: string;
  title?: string;
  content_en?: string;
  content_ru?: string;
  content?: string;
  created_at: string;
  updated_at: string;
}

export type StaticPageDTO = {
  id: number;
  slug: string;
  title_en: string;
  title_ru: string;
  content_en: string;
  content_ru: string;
  created_at: string;
  updated_at: string;
}

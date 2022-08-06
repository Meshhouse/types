export type StaticPage = {
  id: number;
  slug: string;
  title_en?: string;
  title_ru?: string;
  title?: string;
  content_en?: string;
  content_ru?: string;
  content?: string;
}

export type StaticPageDTO = {
  id: number;
  slug: string;
  title_en: string;
  title_ru: string;
  content_en: string;
  content_ru: string;
}

export type BlogSimple = {
  id: number;
  slug: string;
  title_en?: string;
  title_ru?: string;
  title?: string;
  thumbnail: string | null;
  excerpt_en?: string;
  excerpt_ru?: string;
  excerpt?: string;
  created_at: string;
  updated_at: string;
}

export type BlogFull = {
  id: number;
  slug: string;
  title_en?: string;
  title_ru?: string;
  title?: string;
  thumbnail: string | null;
  excerpt_en?: string;
  excerpt_ru?: string;
  excerpt?: string;
  content_en?: string;
  content_ru?: string;
  content?: string;
  created_at: string;
  updated_at: string;
}

export type BlogDTO = {
  id: number;
  slug: string;
  title_en: string;
  title_ru: string;
  thumbnail: string | null;
  excerpt_en: string;
  excerpt_ru: string;
  content_en: string;
  content_ru: string;
  created_at: string;
  updated_at: string;
}

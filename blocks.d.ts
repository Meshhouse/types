import type { SharedCategoryFilter } from './category'

export type BlockType = 'integrations' |
'featured_categories' |
'courtesy_slider' |
'site_supporters' |
'site_patrons' |
'category_filters'

export type BlockPayloadContent = Integration[] |
FeaturedCategory[] |
IndexPageCourtesySlide[] |
SiteSupporter[] |
SitePatron[] |
SharedCategoryFilter[]

export type BlockParams = Integration |
FeaturedCategory |
IndexPageCourtesySlide |
SiteSupporter |
SitePatron |
SharedCategoryFilter

export type Integration = {
  title: string;
  url: string;
  logo: string;
  params: {
    auth: boolean;
    filters: boolean;
    purchase: boolean;
    download: boolean;
    custom_install: boolean;
  }
}

export type FeaturedCategory = {
  title_en: string;
  title_ru: string;
  thumbnail: string;
  tag: string;
  category_slug: string;
}

export type IndexPageCourtesySlide = {
  title_en: string;
  title_ru: string;
  description_en: string;
  description_ru: string;
  background: string;
  courtesy: string;
}

export type SiteSupporter = {
  title: string;
  logo: string;
  url: string;
}

export type SitePatron = {
  title: string;
  level: string;
}

export type DynamicBlock<T> = {
  id: number;
  type: BlockType;
  content: T[];
  created_at: string;
  updated_at: string;
}

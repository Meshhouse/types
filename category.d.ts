export type CategoryFilterType = 'radio' | 'checkbox' | 'checkbox-color' | 'range'

export type Category = {
  id: number;
  slug: string;
  icon: string;
  parent_id: number | null;
  title_en?: string;
  title_ru?: string;
  description_en?: string;
  description_ru?: string;
  title?: string;
  description?: string;
  childrens?: Category[];
  created_at: string;
  updated_at: string;
}

export type CategoryDTO = {
  id: number;
  slug: string;
  icon: string;
  parent_id: number | null;
  order: number;
  created_at: string;
  updated_at: string;
  title_en: string;
  title_ru: string;
  description_en: string;
  description_ru: string;
}

export type CategoryFilterValueBasic = {
  title_en?: string;
  title_ru?: string;
  title?: string;
  value: string;
}

export type CategoryFilterValueColor = {
  title_en?: string;
  title_ru?: string;
  title?: string;
  value: string;
  color: string;
}

export type CategoryFilterValueRange = {
  min: number;
  max: number;
}

export type CategoryFilter = {
  id: number;
  category: number | null;
  order: number;
  key: string;
  localized: boolean;
  type: CategoryFilterType;
  querystring_alias: string;
  value_delimeter: string | null;
  values: CategoryFilterValueBasic[] | CategoryFilterValueColor[] | CategoryFilterValueRange[];
  title?: string;
  title_en?: string;
  title_ru?: string;
  description?: string;
  description_en?: string;
  description_ru?: string;
  unit?: string;
  unit_en?: string;
  unit_ru?: string;
}

export type CategoryFilterDTO = {
  id: number;
  categories: number[];
  order: number;
  key: string;
  localized: boolean;
  type: CategoryFilterType;
  querystring_alias: string;
  value_delimeter: string | null;
  values: CategoryFilterValueBasic[] | CategoryFilterValueColor[] | CategoryFilterValueRange[];
  title_en: string;
  title_ru: string;
  description_en: string;
  description_ru: string;
  unit_en: string;
  unit_ru: string;
}

export type SharedCategoryFilter = {
  order: number;
  key: string;
  type: CategoryFilterType;
  querystring_alias: string;
  value_delimeter: string | null;
  values: CategoryFilterValueBasic[] | CategoryFilterValueColor[] | CategoryFilterValueRange[];
  title_en: string;
  title_ru: string;
  description_en: string;
  description_ru: string;
  unit_en: string;
  unit_ru: string;
}

import type { Category } from './category'

export type ModelFormat = '3ds_max' | 'maya' | 'blender' | 'cinema4d' | 'unity' | 'unreal_engine'
export type ModelRenderer = 'v-ray' | 'mental_ray' | 'arnold' | 'redshift' | 'cycles' | 'corona' | 'unity'
| 'unreal_engine'
export type ModelHairSystem = 'standard' | 'ornatrix' | 'xgen' | 'hairfarm' | 'yeti'
export type ModelTextures = 'procedural' | 'pbr' | 'npr'
export type ModelTexturesWrapping = 'generated' | 'unwrap_uvw' | 'udim' | 'uvtile'
export type ModelRigging = 'bones' | 'autodesk_cat'
export type ModelGeometry = 'tris' | 'quads' | 'ngons' | 'combined'

export type Collection = {
  [key: string]: number | string | undefined;
  id: number;
  slug: string;
  title_en?: string;
  title_ru?: string;
  title?: string;
}

export type CollectionDTO = {
  id: number;
  slug: string;
  title_en: string;
  title_ru: string;
}

export type ModelImage = {
  original: string;
  slide: string;
  thumbnail: string;
}

export type ModelFile = {
  id?: number;
  url: string;
  program: ModelFormat;
  program_version: string;
  renderer: ModelRenderer;
  renderer_version: string;
  size: number;
}

export type ModelInstallPath = {
  models: string;
  textures: string;
}

export type ModelSimple = {
  id: number;
  slug: string;
  title_en?: string;
  title_ru?: string;
  title?: string;
  copyrighted_content: boolean;
  mature_content: boolean;
  available_formats: string[];
  thumbnail: string;
  category: string;
  status?: number;
  statistics: {
    views: number;
    likes: number;
    downloads: number;
  };
  created_at: string;
  updated_at: string;
}

export type ModelFull = {
 [key: string]: any;
  id: number;
  slug: string;
  mature_content: boolean;
  brands: string[];
  install_paths: {
    models: string;
    textures: string;
  };
  textures_link: string;
  thumbnail: string;
  images: ModelImage[];
  preview: string | null;
  created_at: string;
  updated_at: string;
  files: ModelFile[];
  title?: string;
  title_en?: string;
  title_ru?: string;
  description?: string;
  description_en?: string;
  description_ru?: string;
  tags?: string[];
  tags_en?: string[];
  tags_ru?: string[];
  polygons: number;
  vertices: number;
  category: Category;
  blendshapes: boolean;
  licenses: number[];
  collections: Collection[];
  rig: ModelRigging | boolean;
  hair_system: ModelHairSystem | boolean;
  textures: ModelTextures | boolean;
  uv: ModelTexturesWrapping | boolean;
  filters: {
    [key: string]: string | string[];
  }
}

export type ModelDTO = {
  [key: string]: any;
  id: number;
  slug: string;
  status: number;
  mature_content: boolean;
  brands: string[];
  install_paths: {
    models: string;
    textures: string;
  };
  textures_link: string;
  textures_link_size: number;
  thumbnail: string;
  images: ModelImage[];
  preview: string | null;
  created_at: string;
  updated_at: string;
  files: ModelFile[];
  title_en: string;
  title_ru: string;
  description_en: string;
  description_ru: string;
  tags_en: string[];
  tags_ru: string[];
  polygons: number;
  vertices: number;
  category: { [key: string]: boolean } | null;
  blendshapes: boolean;
  licenses: number[];
  collections: number[];
  rig: ModelRigging | boolean;
  hair_system: ModelHairSystem | boolean;
  textures: ModelTextures | boolean;
  uv: ModelTexturesWrapping | boolean;
  filters: {
    [key: string]: string | string[];
  }
}

export type SimilarModelPreCondition = {
  filter_id: number;
  value: unknown;
  condition_id: number;
}

export type SimilarModelPostCondition = {
  condition_id: number;
  filters: SimilarModelFilter[];
}

export type SimilarModelFilter = {
  filter_id: number;
  operand: 'equal' | 'in' | 'between';
  value: unknown;
}

export type SimilarModelConfig = {
  id?: number;
  pre_conditions: SimilarModelPreCondition[],
  post_conditions: SimilarModelPostCondition[],
  created_at: string;
  updated_at: string;
}

export type AccessoryModelPreCondition = {
  filter_id: number;
  value: unknown;
  condition_id: number;
}

export type AccessoryModelPostCondition = {
  condition_id: number;
  accessories: {
    category_id: number;
    filters: AccessoryModelFilter[];
  }[];
}

export type AccessoryModelFilter = {
  filter_id: number;
  operand: 'equal' | 'in' | 'between';
  value: unknown;
  mapper: 'as-is' | boolean;
}

export type AccessoryModelConfig = {
  id?: number;
  pre_conditions: AccessoryModelPreCondition[],
  post_conditions: AccessoryModelPostCondition[],
  created_at: string;
  updated_at: string;
}

export type ModelFilterMapper = {
  source_filter_id: number;
  target_filter_id: number;
  values: Record<string | number, unknown>
}

export type ModelAccessories = {
  categories: {
    id: number;
    title_en?: string;
    title_ru?: string;
    title?: string;
    slug: string;
    href: string;
  }[];
  models: Record<string, ModelSimple[]>;
}

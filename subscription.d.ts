export type SubscriptionTypes = 'patreon' | 'boosty'

export type SubscriptionSimple = {
  id: number;
  service: SubscriptionTypes;
  name: string;
  price: number;
  currency: string;
}

export type SubscriptionFull = {
  id: number;
  service: SubscriptionTypes;
  service_id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: {
    nickname: boolean;
    source_files: boolean;
    sponsor_image: boolean;
    no_courtesy: boolean;
    no_courtesy_mature_content: boolean;
  };
  created_at: string;
  updated_at: string;
}

export type Subscriber = {
  id: number;
  name: string;
  email: string;
  service: SubscriptionTypes;
  tier: string;
  price: number;
  currency: string;
}

export type BoostyLevelInfo = {
  price: number;
  ownerId: number;
  isArchived: boolean;
  changePrice: number;
  createdAt: number;
  id: number;
  name: string;
  data: any[];
  deleted: boolean;
  count: {
    subscribers: number;
  }
}

export type BoostySubscription = {
  level: BoostyLevelInfo,
  subscribed: boolean;
  price: number;
  email: string;
  hasAvatar: boolean;
  onTime: number;
  avatarUrl: string;
  nextPayTime: number;
  isBlackListed: boolean;
  name: string;
  payments: number;
  id: number;
}

export type BoostySubscriptionResponse = {
  limit: number;
  offset: number;
  total: number;
  data: BoostySubscription[];
}

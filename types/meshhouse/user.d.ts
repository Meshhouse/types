import type { SubscriptionSimple } from './subscription'

export type UserRoles = 'basic' | 'subscriber' | 'admin'

export type User = {
  id: number;
  email: string;
  role: UserRoles;
  name: string;
  subscriptions: SubscriptionSimple[];
  access_token?: string;
  refresh_token?: string;
  created_at: string;
  updated_at: string;
}

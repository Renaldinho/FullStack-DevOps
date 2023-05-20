
export enum RoutingPaths {
  HOME = "home",
  PAGE_NOT_FOUND = "**",
  USER_PROFILE = "profile",
  EXPLORE = "explore",
  SIGN_IN = 'sign-in'
}

export enum NotificationTypes {
  SUCCESS = 'success',
  ERROR = 'error',
  ALERT = 'alert',
  WARN = 'warn',
  INFO = 'info'
}

export interface ServiceData {
  name: string | undefined;
  career: string | undefined;
  description: string | undefined;
  price: string | undefined;
}


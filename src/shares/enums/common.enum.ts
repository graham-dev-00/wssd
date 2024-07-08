export enum userType {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum OrderField {
  vote = 'voteMost',
  newest = 'newest',
  oldest = 'oldest',
  view = 'viewMost',
}

export enum UserTitle {
  MR = 'MR',
  MS = 'MS',
  Mrs = 'MRS',
}

export enum ROLE {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum PermissionUser {
  ADMIN = 'ADMIN',
  CREATOR = 'CREATOR',
}

export enum UserConfirmationType {
  RESET_PASSWORD = 'reset_password',
  VERIFY_SIGNUP = 'verify_signup',
}

export enum FilterField {
  tag = 'Tag',
  prompt = 'Prompt',
  creator = 'Creator',
}

export enum TYPE_REPORT {
  USER = 'user',
  PROJECT = 'project',
  IMAGE = 'image'
}

export enum STATUS_COMPANY_OWNER {
  IN_PROCESS = 1,
  STOP = 0
}

export enum STATUS_USER_OWNER {
  IN_PROCESS = 1,
  STOP = 0
}

export enum UPDATE_JOB {
  RETRY = 'retry',
  CANCEL = 'cancel',
  NOT_SHOW_AGAIN = 'not_show_again',
}

export enum RangeScore {
  Min = 0,
  MAX = 100000
}

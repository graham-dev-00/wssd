import { OrderBy } from '../enums/common.enum';

export const TIME_VERIFY = 1000 * 60 * 5;
export const DEFAULT_RECV_WINDOW = 5000;
export const constants = {
  PAGINATION: {
    PAGE_DEFAULT: 1,
    LIMIT_DEFAULT: 10,
    SORT_BY_DEFAULT: 'id',
    ORDER_BY_DEFAULT: OrderBy.DESC,
  },
  CONFIRMATION_CODE_RESET_PW: {
    LENGTH: 5,
    EXPIRE_NUMBER: 3,
    EXPIRE_UNIT: 'minutes',
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 64,
  },
  DAY_EXPIRED_INVITED: {
    // TIME: 2,
    TIME: 30,
  },
};
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const PROVIDER_USER = {
  INTERNAL: 1,
  GOOGLE: 2,
};
export const TEXT_WITH_NUMBER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const TEXT_ONLY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
export const NUMBER_ONLY = '0123456789';
export const MAIL_VERIFY_PATTERN = 'mail_verify_';
export const USER_NAME_VERIFY_PATTERN = 'user_name_verify_';

export const SEND_MAIL_RESET_PASSWORD_PATTERN = 'send_mail_reset_password_';

export const LEADER_BOARD_DISCORD_TOKEN = "LEADER_BOARD_DISCORD_TOKEN";
export const DEFAULT_VALUE_LEADER_BOARD = 110000; //time 1, score 10000, if change score to 1000 have to change SLIDE_FROM to 4

/* Eg : verify_password_76213
 * Use this pattern to store verification code when user reset password.
 * The TTL is 3min start from the moment user receive email reset password.
 */
export const VERIFY_PASSWORD_PATTERN = 'verify_password_';
export const UPDATE_PASSWORD_PATTERN = 'update_password_';
export const MAIL_INVITED_PATTERN = 'mail_invited_';
export const RESEND_MAIL_INVITED_PATTERN = 'resend_mail_invited_';
export const DELETE_IMAGE = 'delete_image_';
export const DELETE_IMAGE_ID = 'delete_image_id_';
export const REGEX_PASSWORD = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\[\~`!@#$%^&*()_\-+={}|:;"'<,>.?\\\/\]]).{10,}$/;
export const MESSAGE_ERROR_PASSWORD =
  'Password needs at least 10 characters including at least a letter, a special character and a number';
export const ADD_MEMBER_SUCCESS = ' has been added to the project';
export const INVITED_MEMBER_NOT_ENOUGH_TIME = 'You must wait 1 min to send another email';

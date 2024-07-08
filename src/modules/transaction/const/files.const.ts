export const DEFAULT_IMAGE_MAX_SIZE = 10 * 1024 * 1024; // 5 MB

export const FOLDER_AVATAR = 'avatar'; // 5 MB
export const FOLDER_IMAGE = 'images'; // 5 MB

export const AVATAR_DEFAULT_URLS = [
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/default_1.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/default_2.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/default_3.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/default_4.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/default_5.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/default_6.png`,
];

export const PROJECT_DEFAULT_THUMBNAIL = [
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/bg_1.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/bg_2.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/bg_3.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/bg_4.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/bg_5.png`,
  `${process.env.AWS_CLOUDFRONT_URL}/avatar/bg_6.png`,
];

export const USER_STATUS = {
  ACTIVE: true,
  INACTIVE: false,
};

export const MOMENT_EXPIRE_TOKEN_VERIFY_DAY = 1;
export const MOMENT_EXPIRE_TOKEN_VERIFY_MINUTE = 10;

export const JWT_EXPIRE_TIME_TOKEN_VERIFY = '10m';

export const MAX_LENGTH_CODE_VERIFY = 6;

export const USE_AVATAR_DEFAULT = true;

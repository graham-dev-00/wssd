export const httpErrors = {
  UNAUTHORIZED: {
    message: 'Unauthorized user.',
    code: 'USER_00003',
  },

  ACCOUNT_NOT_FOUND: {
    message: 'Account not found.',
    code: 'USER_00000',
  },

  ACCOUNT_MATCHING_GOOGLE: {
    message: 'Social media account already in use',
    code: 'USER_00002',
  },

  ACCOUNT_MATCHING_INTERNAL: {
    message: 'This email is already registered',
    code: 'USER_00004',
  },

  ACCOUNT_BLOCK: {
    message: 'Your account has been locked.',
    code: 'USER_BLOCK',
  },

  EMAIL_NOT_FOUND: {
    message: 'Email not found.',
    code: 'EMAIL_00000',
  },

  EMAIL_NOT_REGISTERED: {
    message: 'This email is not registered.',
    code: 'EMAIL_NOT_REGISTER',
  },

  EMAIL_IS_INVALID: {
    message: 'Email is invalid.',
    code: 'EMAIL_IS_INVALID',
  },

  CODE_IS_INVALID: {
    message: 'Verification code is invalid.',
    code: 'CODE_IS_INVALID',
  },

  EMAIL_OR_PASSWORD_IS_INCORRECT: {
    message: 'Email or password is incorrect.',
    code: 'EMAIL_OR_PASSWORD_IS_INCORRECT',
  },

  AVATAR_NOT_EXIST: {
    message: 'Avatar not exists',
    code: 'USER_00003',
  },

  PROJECT_NOT_FOUND: {
    message: 'Project not found.',
    code: 'PROJECT_00000',
  },

  USER_NOT_PERMISSION: {
    message: 'You have no permission.',
    code: 'PERMISSION_00000',
  },

  PROJECT_USER_ALREADY_EXISTS: {
    message: 'The user already exists in the project.',
    code: 'PROJECT_00002',
  },

  USER_NOT_JOIN_PROJECT: {
    message: 'You are not participating in this project.',
    code: 'ERROR_CODE',
  },

  GET_CHANNEL_ERROR: {
    message: 'Get channel error.',
    code: 'CHANNEL_00000',
  },

  ALREADY_VERIFIED: {
    message: 'This email already exists.',
    code: 'ALREADY_VERIFIED',
  },

  MAIL_TOKEN_EXPIRED: {
    message: 'This token is expired',
    code: 'MAIL_TOKEN_EXPIRED',
  },

  INVALID_TOKEN: {
    message: 'This token is invalid',
    code: 'INVALID_TOKEN',
  },

  NOT_ENOUGH_TIME: {
    message: 'You must wait 5 min to send another email',
    code: 'NOT_ENOUGH_TIME',
  },

  NOT_ENOUGH_TIME_SEND_EMAIL_RESET_PASSWORD: {
    message: 'You must wait 1 min to send another email',
    code: 'NOT_ENOUGH_TIME',
  },

  USERNAME_USED: {
    message: 'The same nickname already exists.',
    code: 'USERNAME_USED',
  },

  MAIL_ALREADY_USED: {
    message: 'This email already exists.',
    code: 'MAIL_ALREADY_USED',
  },

  PROJECT_USER_NOT_FOUND: {
    message: 'Project not exist or not belongs to current user login',
    code: 'PROJECT_USER_NOT_FOUND',
  },

  ALREADY_IN_CHANNEL: {
    message: 'This channel is connected to another project.',
    code: 'ALREADY_IN_CHANNEL',
  },

  CHANNEL_NOT_USED: {
    message: 'This channel is not belongs to project or already disconnected',
    code: 'CHANNEL_NOT_USED',
  },

  SLACK_CONNECT_ERROR: {
    message: 'Error when connect to slack',
    code: 'SLACK_CONNECT_ERROR',
  },

  IMAGE_NOT_FOUND: {
    message: 'Image not found.',
    code: 'IMAGE_00000',
  },

  PROJECT_DEMO: {
    message: 'This Project is project demo.',
    code: 'PROJECT_DEMO_00001',
  },

  VERIFICATION_CODE_EXPIRED: {
    message: 'Verification code is expired.',
    code: 'VERIFICATION_CODE_EXPIRED',
  },

  PROJECT_CHANNEL_NOT_FOUND: {
    message: 'Project channel not found',
    code: 'PROJECT_CHANNEL_NOT_FOUND',
  },

  DEFAULT_IMAGE_USED: {
    message: 'User use default image.',
    code: 'IMAGE_DEFAULT_USED',
  },

  VOTE_ERROR: {
    message: 'Vote error.',
    code: 'VOTE_ERROR',
  },

  IMAGE_IS_DELETED: {
    message: 'This image is deleted.',
    code: 'IMAGE_00001',
  },

  MAPPING_USER_CONNECT_ERROR: {
    message: 'Error when mapping user slack to project user',
    code: 'MAPPING_USER_SLACK_ERROR',
  },

  PROJECT_USER_EXISTED: {
    message: 'Project user has been maping user slack.',
    code: 'MAPPING_USER_SLACK_EXISTED_ERROR',
  },

  PROJECT_WORK_SPACE_NOT_MAPPING_ERROR: {
    message: 'Workspace select not mapping with channel',
    code: 'PROJECT_WORK_SPACE_NOT_MAPPING_ERROR',
  },
  
  UPDATE_LIBRARY_ERROR: {
    message: 'update library error.',
    code: 'UPDATE_LIBRARY_ERROR',
  },

  ADDED_TO_LIBRARY: {
    message: 'image added to library.',
    code: 'ADDED_TO_LIBRARY',
  },

  LIBRARY_NOT_FOUND:{
    message: 'library not found.',
    code: 'LIBRARY_NOT_FOUND',
  },

  PROJECT_INVITE_KEY_NOT_FOUND: {
    message: 'Project invite key not found.',
    code: 'PROJECT_INVITE_KEY_NOT_FOUND',
  },

  SLACK_USER_NOT_MAPING_ERROR: {
    message: 'The Slack account is not invited to this project',
    code: 'SLACK_USER_NOT_MAPING_ERROR',
  },
  
  PROJECT_IS_DELETED: {
    message: 'Project is deleted',
    code: 'PROJECT_IS_DELETED',
  },

  PROJECT_NOT_PERMISION_ERROR: {
    message: 'Only Admin users can access this feature.',
    code: 'PROJECT_NOT_PERMISION_ERROR',
  },


  SLACK_USER_EXISTED_MAPING_ERROR: {
    message: 'That Slack account is already associated with this project.',
    code: 'SLACK_USER_EXISTED_MAPING_ERROR',
  },

  SLACK_EXCEPTION_MAPING_ERROR: {
    message: 'Process mapping user slack has exception please try again',
    code: 'SLACK_EXCEPTION_MAPING_ERROR',
  },


  SLACK_WORK_SPACE_NOT_MATCH_INIVITE_ERROR: {
    message: 'This workspace is not connected with the project.',
    code: 'SLACK_WORK_SPACE_NOT_MATCH_INIVITE_ERROR',
  },

  EMAIL_ALREADY_EXISTS: {
    message: 'Email already exists',
    code: 'EMAIL_ALREADY_EXISTS',
  },

  EMAIL_ALREADY_APPLIED_CBT: {
    message: 'You have already applied for CBT',
    code: 'EMAIL_ALREADY_APPLIED_CBT',
  },

  ACCOUNT_CBT_INVALID: {
    message: 'Account CBT invalid',
    code: 'ACCOUNT_CBT_INVALID',
  },

  EMAIL_ALREADY_APPROVED: {
    message: 'Email already approved',
    code: 'EMAIL_ALREADY_APPROVED',
  },

  EMAIL_STOPPED: {
    message: 'Email stopped',
    code: 'EMAIL_STOPPED',
  },

  SLACK_BOT_TOKEN_INVALID: {
    message: 'Slack Bot token invalid',
    code: 'SLACK_BOT_TOKEN_INVALID',
  },

  ADMIN_EMAIL_NOT_FOUND: {
    message: 'Admin email not found.',
    code: 'ADMIN_EMAIL_NOT_FOUND',
  },

  MAIL_TOKEN_REJECTED: {
    message: 'This token is rejected',
    code: 'MAIL_TOKEN_REJECTED',
  },

  DISCORD_ACCOUNT_INVALID: {
    message: 'This Discord account is invalid',
    code: 'DISCORD_ACCOUNT_INVALID',
  },

  INVALID_SLACK_CODE: {
    message: 'Slack code is invalid',
    code: 'INVALID_SLACK_CODE',
  },

  INVALID_DISCORD_TOKEN: {
    message: 'This token is invalid.',
    code: 'INVALID_DISCORD_TOKEN',
  },
};

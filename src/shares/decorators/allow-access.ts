import { SetMetadata } from '@nestjs/common';
import { ROLE } from '../enums/common.enum';

export const REQUEST_ACCESS_USER_TYPE = 'request_access_user_type';
export const AllowAccess = (...roles: ROLE[]) => SetMetadata(REQUEST_ACCESS_USER_TYPE, roles);

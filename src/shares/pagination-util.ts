import { PaginationDtoConstant } from './constants/pagination-dto.constant';

export const getQueryLimit = (paginationDto: PaginationDtoConstant): { offset: number; limit: number } => {
  const offset = paginationDto.limit * (paginationDto.page - 1);
  const limit = paginationDto.limit;

  return { offset, limit };
};

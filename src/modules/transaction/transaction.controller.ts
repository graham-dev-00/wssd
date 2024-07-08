import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CurrentUserId } from 'src/shares/decorators/user.decorator';
import { ROLE } from 'src/shares/enums/common.enum';
import { AllowAccess } from 'src/shares/decorators/allow-access';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { DEFAULT_IMAGE_MAX_SIZE } from './const/files.const';
import { UpdateProfileReq } from './dtos/update-profile.dto';
import * as path from 'path';
import { TransactionService } from './transaction.service';

@Controller('transaction')
@ApiTags('Transaction')
export class TransactionController {

  private allowedFileExtensions = ['.jpg', '.png', '.jpeg'];

  constructor(private transactionService: TransactionService,
    ) {}

  @Get('')
  async getMyProfile(@CurrentUserId() userId: number) {
    return await this.transactionService.insertRandomTransactions(10)
  }

  @Get('find')
  async find(@CurrentUserId() userId: number) {
    return await this.transactionService.findOne()
  }

}

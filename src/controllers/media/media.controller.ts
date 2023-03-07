import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DeleteMediaById, GetMediaById, GetPeginateQuery, MediaDto, SearchMedia, UpdateMedia, UpdateMediaById } from 'src/dto';
import { mediaService } from './media.service';

@Controller('api/v1')
export class mediaController {
  constructor(private mediaService: mediaService) {}

  @Get('/media/search')
  async searchMedia(@Query() query: SearchMedia) {
    try {
      const media = await this.mediaService.searchMedia(query);

      return {
        status: 'success',
        message: 'media fetched successfully',
        data: [media],
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'media failed to fetched',
        data: [],
      };
    }
  }

  @Post('media')
  async createMedia(@Body() body: MediaDto) {
    try {
      const media = await this.mediaService.createMedia(body);
      return {
        status: 'success',
        message: 'media created successfully',
        data: [media],
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'media failed to create',
        data: [],
      };
    }
  }

  @Patch('media/:id')
  async updateMedia(@Param() params: UpdateMediaById, @Body() body: UpdateMedia) {
    try {
      const res = await this.mediaService.updateMedia(params, body);
      return {
        status: 'success',
        message: res.message,
        data: [],
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'media failed to update',
        data: [],
      };
    }
  }

  @Delete('media/:id')
  async deleteMedia(@Param() params: DeleteMediaById) {
    try {
      const res = await this.mediaService.deleteMedia(params);
      return {
        status: 'success',
        message: res.message,
        data: [res.data],
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'media failed to delete',
        data: [],
      };
    }
  }

  @Get('media/:id')
  async getMedia(@Param() params: GetMediaById) {
    try {
      const media = await this.mediaService.getmediaById(params);

      return {
        status: 'success',
        message: 'media fetched successfully',
        data: [media],
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'media failed to fetched',
        data: [],
      };
    }
  }

  @Get('media')
  async getPeginatedMedia(@Query() query: GetPeginateQuery) {
    try {
      const media = await this.mediaService.getPeginatedMedia(query);

      return {
        status: 'success',
        message: 'media fetched successfully',
        data: [media],
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'media failed to fetched',
        data: [],
      };
    }
  }
}

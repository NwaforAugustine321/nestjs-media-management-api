import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DeleteMediaById, GetMediaById, GetPeginateQuery, MediaDto, SearchMedia, UpdateMedia, UpdateMediaById } from 'src/dto';

@Injectable({})
export class mediaService {
  constructor(private database: DatabaseService) {}

  async createMedia(body: MediaDto) {
    try {
      const media = await this.database.media.create({ data: body });
      return media;
    } catch (error) {
      throw error;
    }
  }

  async updateMedia(params: UpdateMediaById, body: UpdateMedia) {
    try {
      const data = await this.database.media.findUnique({
        where: {
          id: params.id,
        },
      });

      if (data !== null) {
        await this.database.media.update({
          data: body,
          where: {
            id: params.id,
          },
        });
        return { message: 'media updated successfully' };
      }

      return { message: 'media not found' };
    } catch (error) {
      throw error;
    }
  }

  async deleteMedia(params: DeleteMediaById) {
    try {
      const data = await this.database.media.findUnique({
        where: {
          id: params.id,
        },
      });

      if (data !== null) {
        const media = await this.database.media.delete({
          where: {
            id: params.id,
          },
        });
        return { message: 'media deleted successfully', data: media };
      }

      return { message: 'media not found', data: [] };
    } catch (error) {
      throw error;
    }
  }

  async getmediaById(params: GetMediaById) {
    try {
      const data = await this.database.media.findUnique({
        where: {
          id: params.id,
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getPeginatedMedia(query: GetPeginateQuery) {
    try {
      let { page, perPage } = query;

      const { skip, take } = this.calculatePeginationSkip(parseInt(page), parseInt(perPage));

      const data = await this.database.media.findMany({
        skip,
        take,
      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  async searchMedia(query: SearchMedia) {
    try {
      const data = await this.database.media.findMany({
        where: {
          AND: [
            {
              name: query.title,
            },
            {
              description: query.description,
            },
          ],
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  calculatePeginationSkip(page: number, perPage: number) {
    let skip = page <= 0 ? 1 : page;
    let take = perPage <= 0 ? 10 : perPage;

    skip = (page - 1) * perPage;
    take = skip + perPage;

    return { skip, take };
  }
}

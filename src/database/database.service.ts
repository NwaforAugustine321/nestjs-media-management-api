import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mysql://root:testing@localhost:3306/media',
        },
      },
    });

    this.$use(async (params, next) => {
      const date = new Date();
      if (params.model == 'Media') {
        if (params.action == 'delete') {
          params.action = 'update';
          params.args['data'] = { deletedAt: date };
        }
      }
      return next(params);
    });
  }
}

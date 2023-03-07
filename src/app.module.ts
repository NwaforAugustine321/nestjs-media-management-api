import { Module } from '@nestjs/common';
import { mediaModule } from './controllers/media/media.module';
import { dataBaseModule } from './database/database.module';

@Module({
  imports: [mediaModule, dataBaseModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { mediaService } from './media.service';
import { mediaController } from './media.controller';
import { dataBaseModule } from 'src/database/database.module';

@Module({
  imports: [dataBaseModule],
  controllers: [mediaController],
  providers: [mediaService],
})
export class mediaModule {}

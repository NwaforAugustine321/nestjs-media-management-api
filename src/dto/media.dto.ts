import { IsNotEmpty, IsString } from 'class-validator';

export class MediaDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}

export class UpdateMedia {
  @IsNotEmpty()
  @IsString()
  status: string;
}

export class GetMediaById {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class UpdateMediaById {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class DeleteMediaById {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class GetPeginateQuery {
  @IsString()
  @IsNotEmpty()
  page: string;

  @IsString()
  @IsNotEmpty()
  perPage: string;
}

export class SearchMedia {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

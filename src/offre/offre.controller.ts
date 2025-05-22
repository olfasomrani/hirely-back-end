// offre.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { OffreService } from './offre.service';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';

@Controller('offres')
export class OffreController {
  constructor(private readonly offreService: OffreService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/offres', // créez ce dossier manuellement
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `offre-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createOffreDto: CreateOffreDto,
  ) {
    if (file) {
      createOffreDto.image = `/uploads/offres/${file.filename}`;
    }
    return this.offreService.create(createOffreDto);
  }

  @Get()
  findAll() {
    return this.offreService.findAll();
  }

  @Get('nombres')
  countUsers() {
    return this.offreService.countOffre();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offreService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image')) // si tu attends un fichier nommé 'image'
  update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateOffreDto: UpdateOffreDto,
  ) {
    if (file) {
      updateOffreDto.image =  `/uploads/offres/${file.filename}`;// ou file.path selon ta config
    }

    return this.offreService.update(+id, updateOffreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offreService.remove(+id);
  }
}

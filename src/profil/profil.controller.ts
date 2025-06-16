import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProfilService } from './profil.service';
import { CreateProfilDto } from './dto/create-profil.dto';

@Controller('profil')
export class ProfilController {
  constructor(private readonly profilService: ProfilService) {}

  @Post()
  async create(@Body() createProfilDto: CreateProfilDto) {
    return this.profilService.create(createProfilDto);
  }

  @Get()
  async findAll() {
    return this.profilService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.profilService.findOne(+id);
  }
}


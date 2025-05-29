import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PersonalInfoService } from './personal_info.service';
import { CreateInformationDto } from './dto/create-personal-info.dto';
import { UpdateInformationDto } from './dto/update-personal-info.dto';

@Controller('personal-info')
export class PersonalInfoController {
  constructor(private readonly personalInfoService: PersonalInfoService) {}

  @Post()
  async create(@Body() createInformationDto: CreateInformationDto) {
    return this.personalInfoService.create(createInformationDto);
  }

  @Get()
  async findAll() {
    return this.personalInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.personalInfoService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInformationDto: UpdateInformationDto,
  ) {
    return this.personalInfoService.update(+id, updateInformationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.personalInfoService.remove(+id);
  }
}


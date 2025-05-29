import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
  } from '@nestjs/common';
  import { PersoSkillsService } from './perso-skills.service';
  import { CreatePersoSkillsDto } from './dto/create-perso-skills.dto';
  import { UpdatePersoSkillsDto } from './dto/update-perso-skills.dto';
  
  @Controller('perso-skills')
  export class PersoSkillsController {
    constructor(private readonly persoSkillsService: PersoSkillsService) {}
  
    @Post()
    create(@Body() createDto: CreatePersoSkillsDto) {
      return this.persoSkillsService.create(createDto);
    }
  
    @Get()
    findAll() {
      return this.persoSkillsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.persoSkillsService.findOne(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateDto: UpdatePersoSkillsDto,
    ) {
      return this.persoSkillsService.update(id, updateDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.persoSkillsService.remove(id);
    }
  }
  
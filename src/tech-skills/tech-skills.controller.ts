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
  import { TechSkillsService } from './tech-skills.service';
  import { CreateTechSkillsDto } from './dto/create-tech-skills.dto';
  import { UpdateTechSkillsDto } from './dto/update-tech-skills.dto';
  
  @Controller('tech-skills')
  export class TechSkillsController {
    constructor(private readonly techSkillsService: TechSkillsService) {}
  
    @Post()
    create(@Body() createDto: CreateTechSkillsDto) {
      return this.techSkillsService.create(createDto);
    }
  
    @Get()
    findAll() {
      return this.techSkillsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.techSkillsService.findOne(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateDto: UpdateTechSkillsDto,
    ) {
      return this.techSkillsService.update(id, updateDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.techSkillsService.remove(id);
    }
  }
  
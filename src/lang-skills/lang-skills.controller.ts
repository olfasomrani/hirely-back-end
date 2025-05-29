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
  import { LangSkillsService } from './lang-skills.service';
  import { CreateLangSkillsDto } from './dto/create-lang-skills.dto';
  import { UpdateLangSkillsDto } from './dto/update-lang-skills.dto';
  
  @Controller('lang-skills')
  export class LangSkillsController {
    constructor(private readonly techSkillsService: LangSkillsService) {}
  
    @Post()
    create(@Body() createDto: CreateLangSkillsDto) {
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
      @Body() updateDto: UpdateLangSkillsDto,
    ) {
      return this.techSkillsService.update(id, updateDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.techSkillsService.remove(id);
    }
  }
  
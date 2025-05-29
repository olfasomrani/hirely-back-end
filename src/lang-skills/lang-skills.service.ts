import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateLangSkillsDto } from './dto/create-lang-skills.dto';
import { UpdateLangSkillsDto } from './dto/update-lang-skills.dto';

@Injectable()
export class LangSkillsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateLangSkillsDto) {
    return this.prisma.competence_Technique.create({
      data: createDto,
    });
  }

  async findAll() {
    return this.prisma.competence_Technique.findMany();
  }

  async findOne(id: number) {
    return this.prisma.competence_Technique.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDto: UpdateLangSkillsDto) {
    return this.prisma.competence_Technique.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: number) {
    return this.prisma.competence_Technique.delete({
      where: { id },
    });
  }
}

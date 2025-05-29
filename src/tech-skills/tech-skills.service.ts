import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateTechSkillsDto } from './dto/create-tech-skills.dto';
import { UpdateTechSkillsDto } from './dto/update-tech-skills.dto';

@Injectable()
export class TechSkillsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateTechSkillsDto) {
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

  async update(id: number, updateDto: UpdateTechSkillsDto) {
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

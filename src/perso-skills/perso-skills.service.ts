import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreatePersoSkillsDto } from './dto/create-perso-skills.dto';
import { UpdatePersoSkillsDto } from './dto/update-perso-skills.dto';

@Injectable()
export class PersoSkillsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreatePersoSkillsDto) {
    return this.prisma.competence_Personnel.create({
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

  async update(id: number, updateDto: UpdatePersoSkillsDto) {
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

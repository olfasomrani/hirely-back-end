import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExperienceDto: CreateExperienceDto) {
    return this.prisma.experience.create({
      data: createExperienceDto,
    });
  }

  async findAll() {
    return this.prisma.experience.findMany();
  }

  async findOne(id: number) {
    const experience = await this.prisma.experience.findUnique({
      where: { id },
    });
    if (!experience) {
      throw new NotFoundException(`Experience with id ${id} not found`);
    }
    return experience;
  }

  async update(id: number, updateExperienceDto: UpdateExperienceDto) {
    await this.findOne(id); 
    return this.prisma.experience.update({
      where: { id },
      data: updateExperienceDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); 
    return this.prisma.experience.delete({
      where: { id },
    });
  }
}


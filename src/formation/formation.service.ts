import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';

@Injectable()
export class FormationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFormationDto: CreateFormationDto) {
    return this.prisma.formation.create({
      data: {
        ...createFormationDto,
      },
    });
  }

  async findAll() {
    return this.prisma.formation.findMany({
      include: {
        domain: true,
        etablissement: true,
        profil: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.formation.findUnique({
      where: { id },
      include: {
        domain: true,
        etablissement: true,
        profil: true,
      },
    });
  }

  async update(id: number, updateFormationDto: UpdateFormationDto) {
    return this.prisma.formation.update({
      where: { id },
      data: {
        ...updateFormationDto,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.formation.delete({
      where: { id },
    });
  }
}

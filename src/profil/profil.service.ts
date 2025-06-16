import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfilDto } from './dto/create-profil.dto';

@Injectable()
export class ProfilService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProfilDto) {
    return await this.prisma.profil.create({
      data: {
        candidate: {
          connect: { id: data.candidateId },
        },
        information: data.information
          ? { create: data.information }
          : undefined,
        documents: data.documents
          ? { create: data.documents }
          : undefined,
        formations: data.formations?.length
          ? { create: data.formations }
          : undefined,
        experiences: data.experiences?.length
          ? { create: data.experiences }
          : undefined,
        techSkills: data.techSkills?.length
          ? { create: data.techSkills }
          : undefined,
        lingSkills: data.lingSkills?.length
          ? { create: data.lingSkills }
          : undefined,
        persoSkills: data.persoSkills?.length
          ? { create: data.persoSkills }
          : undefined,
      },
      include: {
        information: true,
        documents: true,
        formations: true,
        experiences: true,
        techSkills: true,
        lingSkills: true,
        persoSkills: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.profil.findMany({
      include: {
        information: true,
        documents: true,
        formations: true,
        experiences: true,
        techSkills: true,
        lingSkills: true,
        persoSkills: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.profil.findUnique({
      where: { id },
      include: {
        information: true,
        documents: true,
        formations: true,
        experiences: true,
        techSkills: true,
        lingSkills: true,
        persoSkills: true,
      },
    });
  }
}


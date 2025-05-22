import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CandidateService } from '../candidat/candidat.service';
import { Role } from '@prisma/client';
import { RecruteurService } from 'src/recruteur/recruteur.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private candidateService: CandidateService,
    private recruteurService: RecruteurService,
  ) {}

  async create(dto: CreateUserDto) {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({ data: dto });

      if (dto.role === Role.candidat) {
        await this.candidateService.create({ userId: user.id }, tx);
      } else if (dto.role === Role.recruteur) {
        await this.recruteurService.create({ userId: user.id }, tx);
      }

      return user;
    });
  }
  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  countUser() {
    return this.prisma.user.count();
  }
  update(id: number, dto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}

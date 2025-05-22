import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateRecruteurDto } from './dto/create-recruteur.dto';
import { UpdateRecruteurDto } from './dto/update-recruteur.dto';

@Injectable()
export class RecruteurService {
  constructor(private prisma: PrismaService) {}

  async create(
    createRecruteurDto: CreateRecruteurDto,
    tx: Prisma.TransactionClient,
  ) {
    return await tx.recruiter.create({
      data: {
        userId: createRecruteurDto.userId,
        position: createRecruteurDto.position,
        companyName: createRecruteurDto.companyName,
      },
    });
  }
  findAll() {
    return this.prisma.recruiter.findMany();
  }

  findOne(id: number) {
    return this.prisma.recruiter.findUnique({ where: { id } });
  }

  countRecruteur() {
    return this.prisma.recruiter.count();
  }
  update(id: number, dto: UpdateRecruteurDto) {
    return this.prisma.recruiter.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.recruiter.delete({ where: { id } });
  }
}

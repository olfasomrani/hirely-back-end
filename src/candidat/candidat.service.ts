import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'; 
import { PrismaService } from '../prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidat.dto';
import { UpdateCandidateDto } from './dto/update-candidat.dto';

@Injectable()
export class CandidateService {
  constructor(private prisma: PrismaService) {}

  async create(createCandidateDto: CreateCandidateDto, tx: Prisma.TransactionClient) {
    return await tx.candidate.create({
     data: createCandidateDto
    });
  }

  findAll() {
    return this.prisma.candidate.findMany();
  }

  findOne(id: number) {
    return this.prisma.candidate.findUnique({ where: { id } });
  }
  countCandidate() {
    return this.prisma.candidate.count();
  }
  update(id: number, dto: UpdateCandidateDto) {
    return this.prisma.candidate.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.candidate.delete({ where: { id } });
  }
}

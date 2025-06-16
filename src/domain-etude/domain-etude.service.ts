import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DomainEtudeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.domaineEtude.findMany({
    });
  }
}

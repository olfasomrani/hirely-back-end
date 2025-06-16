import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EtablissementService {

     constructor(private readonly prisma: PrismaService) {}
    
      async findAll() {
        return this.prisma.etablissement.findMany({
        });
      }
}

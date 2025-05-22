import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class OffreService {
  constructor(private prisma: PrismaService) {}
  create(createOffreDto: CreateOffreDto) {
    return this.prisma.jobOffer.create({
      data: {
        ...createOffreDto,
        recruiterId: parseInt(createOffreDto.recruiterId as any, 10),
      },
    });
  }
  
  findAll() {
    return this.prisma.jobOffer.findMany({
      include: {
        recruiter: true,
      },
    });
  }
  findOne(id: number) {
    return this.prisma.jobOffer.findUnique({ where: { id } });
  }
  countOffre() {
    return this.prisma.jobOffer.count();
  }

  update(id: number, dto: UpdateOffreDto) {
    return this.prisma.jobOffer.update
     
      ({ where: { id },  data: {
        ...dto,
        recruiterId: parseInt(dto.recruiterId as any, 10),
      },})
    ;
  }
  

  remove(id: number) {
    return this.prisma.jobOffer.delete({ where: { id } });
  }
}

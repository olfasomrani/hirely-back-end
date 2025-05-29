import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInformationDto } from './dto/create-personal-info.dto';
import { UpdateInformationDto } from './dto/update-personal-info.dto';

@Injectable()
export class PersonalInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateInformationDto) {
    return this.prisma.information_General.create({
      data: createDto,
    });
  }

  async findAll() {
    return this.prisma.information_General.findMany();
  }

  async findOne(id: number) {
    const info = await this.prisma.information_General.findUnique({
      where: { id },
    });

    if (!info) {
      throw new NotFoundException(`Information with ID ${id} not found`);
    }

    return info;
  }

  async update(id: number, updateDto: UpdateInformationDto) {
    const info = await this.prisma.information_General.findUnique({
      where: { id },
    });

    if (!info) {
      throw new NotFoundException(`Information with ID ${id} not found`);
    }

    return this.prisma.information_General.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: number) {
    const info = await this.prisma.information_General.findUnique({
      where: { id },
    });

    if (!info) {
      throw new NotFoundException(`Information with ID ${id} not found`);
    }

    return this.prisma.information_General.delete({
      where: { id },
    });
  }
}


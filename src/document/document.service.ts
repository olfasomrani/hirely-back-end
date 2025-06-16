import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDocumentsDto } from './dto/create-document.dto';
import { UpdateDocumentsDto } from './dto/update-document.dto';

@Injectable()
export class DocumentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDocumentsDto: CreateDocumentsDto) {
    return this.prisma.documents.create({
      data: createDocumentsDto,
    });
  }

  async findAll() {
    return this.prisma.documents.findMany();
  }

  async findOne(id: number) {
    const document = await this.prisma.documents.findUnique({
      where: { id },
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return document;
  }

  async update(id: number, updateDocumentsDto: UpdateDocumentsDto) {
    await this.findOne(id); 

    return this.prisma.documents.update({
      where: { id },
      data: updateDocumentsDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); 

    return this.prisma.documents.delete({
      where: { id },
    });
  }
}


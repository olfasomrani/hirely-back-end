import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidateService } from './candidat.service';
import { CreateCandidateDto } from './dto/create-candidat.dto';
import { UpdateCandidateDto } from './dto/update-candidat.dto'; 
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Controller('candidates')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly prismaService: PrismaService,
    private readonly userService: UserService, 
  ) {}


@Post()
async create(@Body() createCandidateDto: CreateCandidateDto) {
  const user = await this.userService.findOne(createCandidateDto.userId);
  if (!user) {
    throw new Error('Utilisateur non trouvé');
  }
  const candidateDto: CreateCandidateDto = {
    userId: user.id,
    resumeUrl: createCandidateDto.resumeUrl,
    experience: createCandidateDto.experience, 
  };
  return await this.prismaService.$transaction(async (tx) => {
    return await this.candidateService.create(candidateDto, tx);
  });
}

  @Get()
  findAll() {
    return this.candidateService.findAll();
  }
  @Get('nombres')
  countUsers(){
    return this.candidateService.countCandidate();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidateService.update(+id, updateCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(+id);
  }
}

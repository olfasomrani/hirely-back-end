import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecruteurService } from './recruteur.service';
import { CreateRecruteurDto } from './dto/create-recruteur.dto';
import { UpdateRecruteurDto } from './dto/update-recruteur.dto';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('recruteurs')
export class RecruteurController {
  constructor(private readonly recruteurService: RecruteurService,
     private readonly userService : UserService,
     private readonly prismaService: PrismaService,
  ) {}

  @Post()
   async create(@Body() createRecruteurDto: CreateRecruteurDto) {
    const user = await this.userService.findOne(createRecruteurDto.userId);
    if (!user){
      throw new Error('user not found');
    }
    const recruteurDto : CreateRecruteurDto = {
      userId: user.id,
      position: createRecruteurDto.position,
      companyName: createRecruteurDto.companyName,
    }

    return await this.prismaService.$transaction(async (tx) => {
      return await this.recruteurService.create(recruteurDto, tx);
    });
  }

  @Get()
  findAll() {
    return this.recruteurService.findAll();
  }

  @Get('nombres')
  countUsers(){
    return this.recruteurService.countRecruteur();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recruteurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecruteurDto: UpdateRecruteurDto) {
    return this.recruteurService.update(+id, updateRecruteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recruteurService.remove(+id);
  }
}

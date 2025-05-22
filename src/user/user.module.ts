import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CandidateModule } from '../candidat/candidat.module'; 
import { PrismaService } from '../prisma/prisma.service';
import { RecruteurModule } from 'src/recruteur/recruteur.module';

@Module({
  imports: [forwardRef(() => CandidateModule), forwardRef(() => RecruteurModule)],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}

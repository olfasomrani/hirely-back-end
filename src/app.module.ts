import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CandidateModule } from './candidat/candidat.module';
import { RecruteurModule } from './recruteur/recruteur.module'
import { OffreModule } from './offre/offre.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, CandidateModule, RecruteurModule, OffreModule, AuthModule],
})
export class AppModule {}

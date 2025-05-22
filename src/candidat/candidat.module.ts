import { Module, forwardRef } from '@nestjs/common';
import { CandidateService } from './candidat.service';
import { CandidateController } from './candidat.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)], 
  controllers: [CandidateController],
  providers: [CandidateService, PrismaService],
  exports: [CandidateService],
})
export class CandidateModule {}

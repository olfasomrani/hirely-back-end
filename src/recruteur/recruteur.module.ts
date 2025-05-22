import { Module , forwardRef} from '@nestjs/common';
import { RecruteurService } from './recruteur.service';
import { RecruteurController } from './recruteur.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [RecruteurController],
  providers: [RecruteurService, PrismaService],
  imports: [forwardRef(() => UserModule)], 
  exports: [RecruteurService],
})
export class RecruteurModule {}

import { Module } from '@nestjs/common';
import { PersonalInfoService } from './personal_info.service';
import { PersonalInfoController } from './personal_info.controller';

@Module({
  providers: [PersonalInfoService],
  controllers: [PersonalInfoController]
})
export class PersonalInfoModule {}

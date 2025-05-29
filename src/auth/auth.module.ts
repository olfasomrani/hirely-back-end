import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { MailModule } from 'src/mail/mail.module';
import { MailService } from 'src/mail/mail.service';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    PassportModule,
    MailModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'votre_secret_fort_à_changer',
      signOptions: { expiresIn: '8h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, MailService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
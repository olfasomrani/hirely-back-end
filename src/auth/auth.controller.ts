import { Controller, Post, UseGuards, Body, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../jwt/local-auth.guard';
import { JwtAuthGuard } from '../jwt/jwt.guard';
import { Role } from '@prisma/client';
import { CurrentUser } from './decorators/current-user.decorator';
import { Response } from 'express';

class LoginDto {
  email: string;
  password: string;
}

class RegisterDto {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role: Role;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Connexion avec cookie sécurisé
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDto: LoginDto,
    @CurrentUser() user,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { access_token, user: userInfo } = await this.authService.login(user);

    res.cookie('jwt', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true en prod
      sameSite: 'lax',
      maxAge: 3600000, // 1h
    });

    return { user: userInfo };
  }

  // Enregistrement d’un utilisateur
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  // Récupérer les infos de l’utilisateur connecté via cookie
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@CurrentUser() user) {
    return user;
  }

  // Déconnexion (efface le cookie)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Déconnecté avec succès' };
  }
}

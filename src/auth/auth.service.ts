
// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // Récupérer des informations supplémentaires en fonction du rôle
    let additionalInfo = {};
    
    if (user.role === 'recruteur') {
      const recruiter = await this.prisma.recruiter.findUnique({
        where: { userId: user.id },
      });
      additionalInfo = { recruiterId: recruiter?.id };
    } else if (user.role === 'candidat') {
      const candidate = await this.prisma.candidate.findUnique({
        where: { userId: user.id },
      });
      additionalInfo = { candidateId: candidate?.id };
    }

    const payload = { 
      email: user.email, 
      sub: user.id, 
      role: user.role,
      ...additionalInfo
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        ...additionalInfo
      }
    };
  }

  async register(userData: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: Role;
  }) {
    // Vérifier si l'email existe déjà
    const existingUser = await this.usersService.findOneByEmail(userData.email);
    if (existingUser) {
      throw new UnauthorizedException('Cet email est déjà utilisé');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Créer l'utilisateur
    const newUser = await this.prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: userData.role,
      },
    });

    // Créer le profil associé (Recruiter ou Candidate)
    if (userData.role === 'recruteur') {
      await this.prisma.recruiter.create({
        data: {
          userId: newUser.id,
        },
      });
    } else if (userData.role === 'candidat') {
      await this.prisma.candidate.create({
        data: {
          userId: newUser.id,
        },
      });
    }

    // Nettoyer la réponse
    const { password, ...result } = newUser;
    return result;
  }
}
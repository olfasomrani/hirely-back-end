import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CandidateModule } from './candidat/candidat.module';
import { RecruteurModule } from './recruteur/recruteur.module'
import { OffreModule } from './offre/offre.module';
import { AuthModule } from './auth/auth.module';
import { ProfilModule } from './profil/profil.module';
import { PersonalInfoModule } from './personal_info/personal_info.module';
import { ExperienceModule } from './experience/experience.module';
import { TechSkillsModule } from './tech-skills/tech-skills.module';
import { LangSkillsModule } from './lang-skills/lang-skills.module';
import { PersoSkillsModule } from './perso-skills/perso-skills.module';
import { MailModule } from './mail/mail.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { FormationModule } from './formation/formation.module';
import { DomainEtudeModule } from './domain-etude/domain-etude.module';
import { EtablissementModule } from './etablissement/etablissement.module';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [PrismaModule, UserModule, CandidateModule, RecruteurModule, OffreModule, AuthModule, ProfilModule, PersonalInfoModule, ExperienceModule, TechSkillsModule, LangSkillsModule, PersoSkillsModule, MailModule, ChatbotModule, FormationModule, DomainEtudeModule, EtablissementModule, DocumentModule],
})
export class AppModule {}

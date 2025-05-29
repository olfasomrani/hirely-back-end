import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendWelcomeEmail(to: string, firstName: string, lastName: string) {
    await this.transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to,
      subject: 'Bienvenue sur TalentSphere !',
      html: `
        <div style="font-family: Arial, sans-serif; background: #f7fafc; padding: 20px;">
          <div style="
            background: linear-gradient(to right, #1e3a8a, #06b6d4);
            color: white;
            padding: 30px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          ">
            <h1 style="margin: 0; font-size: 28px;">Bienvenue ${firstName} ${lastName} !</h1>
          </div>
          <div style="
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            color: #1e3a8a;
            font-size: 16px;
            line-height: 1.5;
          ">
            <p>Merci pour votre inscription sur TalentSphere.</p>
            <p>L'équipe TalentSphere est ravie de vous compter parmi nous.</p>
            <p>Nous vous souhaitons beaucoup de succès dans votre aventure avec nous !</p>
          </div>
        </div>
      `,
    });
    
  }
}

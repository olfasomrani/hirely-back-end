import { Controller, Post, Body } from '@nestjs/common';
import { ChatbotService, JobRequest } from './chatbot.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('generate-description')
  async generateDescription(@Body() data: JobRequest) {
    const description = await this.chatbotService.generateJobDescription(data);
    return { description };
  } 
}

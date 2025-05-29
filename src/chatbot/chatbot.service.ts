import { Injectable } from '@nestjs/common';
import axios from 'axios';

export interface JobRequest {
  title: string;
  company: string;
  location: string;
  role: string;
  niveau: string;
  environnement: string;
}

@Injectable()
export class ChatbotService {
  private readonly fastApiUrl = 'http://localhost:8000/generate';

  async generateJobDescription(data: JobRequest): Promise<string> {
    try {
      const response = await axios.post(this.fastApiUrl, data);
      return response.data.description;
    } catch (error) {
      console.error('Erreur lors de l’appel à l’API FastAPI:', error.message);
      throw new Error('Impossible de générer la description de poste');
    }
  }
}

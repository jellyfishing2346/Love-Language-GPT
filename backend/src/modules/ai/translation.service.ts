// backend/src/modules/ai/translation.service.ts
import axios from 'axios';

const BIONIC_API_KEY = process.env.BIONIC_API_KEY!;
const BIONIC_API_URL = 'https://api.bionicgpt.com/v1/chat/completions'; // Update if BionicGPT uses a different URL

export class TranslationService {
  private async callBionicGPT(messages: any[]): Promise<string> {
    const response = await axios.post(
      BIONIC_API_URL,
      {
        model: 'bionic-3.5', // Adjust if BionicGPT uses a different model name
        messages,
        temperature: 0.7,
        max_tokens: 1000
      },
      {
        headers: {
          Authorization: `Bearer ${BIONIC_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const choices = response.data.choices;
    return choices[0]?.message?.content || '';
  }

  async translate(text: string, targetLanguage: string): Promise<string> {
    const messages = [
      {
        role: 'system',
        content: `Translate this to ${targetLanguage} preserving romantic/emotional nuance. Keep dating app context.`
      },
      {
        role: 'user',
        content: text
      }
    ];

    const translation = await this.callBionicGPT(messages);
    return translation || text;
  }

  async suggestReply(context: string): Promise<string> {
    const messages = [
      {
        role: 'system',
        content: `Provide a romantic or emotionally nuanced reply based on the following context. Keep dating app context.`
      },
      {
        role: 'user',
        content: context
      }
    ];

    const reply = await this.callBionicGPT(messages);
    return reply || "Sorry, I couldn't generate a reply.";
  }
}

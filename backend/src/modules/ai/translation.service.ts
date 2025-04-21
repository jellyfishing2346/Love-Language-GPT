// backend/src/modules/ai/translation.service.ts
import OpenAI from 'openai';

export class TranslationService {
  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

  async translate(text: string, targetLanguage: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Translate this to ${targetLanguage} preserving romantic/emotional nuance. Keep dating app context.`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return response.choices[0]?.message?.content || text;
  }

  async suggestReply(context: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Provide a romantic or emotionally nuanced reply based on the following context. Keep dating app context.`
        },
        {
          role: 'user',
          content: context
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return response.choices[0]?.message?.content || "Sorry, I couldn't generate a reply.";
  }
}
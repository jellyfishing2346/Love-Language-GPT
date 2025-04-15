import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const translate = async (text: string, targetLang: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Translate this to ${targetLang} while preserving the original tone, meaning, and emotional intent. Maintain any romantic or flirtatious nuances.`
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
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text if translation fails
  }
};

// Additional AI services
export const generateIcebreaker = async (userBio: string): Promise<string[]> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Generate a list of icebreaker questions based on the following user bio.`
        },
        {
          role: 'user',
          content: userBio
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const content = response.choices[0]?.message?.content || '';
    return content.split('\n').filter((line) => line.trim() !== '');
  } catch (error) {
    console.error('Icebreaker generation error:', error);
    return []; // Fallback to an empty array if generation fails
  }
};
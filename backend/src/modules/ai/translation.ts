import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export const translate = async (text: string, targetLang: string) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{
      role: 'system',
      content: `Translate this to ${targetLang} keeping romantic tone`
    }, {
      role: 'user',
      content: text
    }],
    temperature: 0.7
  });
  return response.choices[0]?.message?.content || text;
};
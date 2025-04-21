import axios from 'axios';

const BIONIC_API_KEY = process.env.BIONIC_API_KEY!;
const BIONIC_API_URL = 'https://api.bionicgpt.com/v1/chat/completions'; // Adjust if BionicGPT uses a slightly different URL

export const translate = async (text: string, targetLang: string) => {
  const response = await axios.post(
    BIONIC_API_URL,
    {
      model: 'bionic-3.5', // Replace with correct BionicGPT model if needed
      messages: [
        {
          role: 'system',
          content: `Translate this to ${targetLang} keeping romantic tone`
        },
        {
          role: 'user',
          content: text
        }
      ],
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

  return response.data.choices[0]?.message?.content || text;
};

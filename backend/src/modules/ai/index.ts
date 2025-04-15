import { Elysia, t } from 'elysia';
// Mock implementation of BionicGPT for development purposes
class MockBionicGPT {
  constructor(apiKey: string) {}

  async translate(text: string, targetLang: string) {
    return `Translated(${text}) to ${targetLang}`;
  }

  async generateIcebreakers(userBio: string) {
    return [`Icebreaker for ${userBio}`];
  }
}

const ai = new MockBionicGPT(process.env.BIONIC_API_KEY!);

export const aiRoutes = new Elysia({ prefix: '/ai' })
  // Translation endpoint
  .post('/translate', async ({ body }) => {
    return {
      translation: await ai.translate(body.text, body.targetLang)
    };
  }, {
    body: t.Object({
      text: t.String(),
      targetLang: t.String()
    })
  })

  // Icebreaker suggestions
  .post('/icebreaker', async ({ body }) => {
    return {
      suggestions: await ai.generateIcebreakers(body.userBio)
    };
  }, {
    body: t.Object({
      userBio: t.String()
    })
  });

// Export translation function for other modules
export const translate = async (text: string, targetLang: string) => {
  return ai.translate(text, targetLang);
};
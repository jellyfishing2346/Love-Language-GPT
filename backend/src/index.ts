import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors({
    credentials: true, // Enable if using cookies
    allowedHeaders: ['Content-Type', 'Authorization']
  }))
  .group('/api', (app) =>
    app
      .post('/analyze', async ({ body }) => {
        // Add actual analysis logic here
        const analysisResult = await analyzeLoveLanguage(body.text)
        return { 
          success: true, 
          result: analysisResult,
          timestamp: new Date().toISOString() 
        }
      }, {
        body: t.Object({
          text: t.String({ minLength: 1 }),
          userId: t.Optional(t.String())
        }),
        // Add response type for better frontend typing
        response: t.Object({
          success: t.Boolean(),
          result: t.String(),
          timestamp: t.String()
        })
      })
      .get('/history/:userId', async ({ params }) => {
        const db = {
          userHistory: {
            find: async (userId: string) => {
              // Placeholder logic for fetching user history
              return [
                { id: '1', text: 'Sample text', analysis: 'Sample analysis' }
              ];
            }
          }
        };
        const history = await db.userHistory.find(params.userId)
        return history
      }, {
        params: t.Object({
          userId: t.String()
        }),
        response: t.Array(
          t.Object({
            id: t.String(),
            text: t.String(),
            analysis: t.String()
          })
        )
      })
  )
  .listen(3001)

export type App = typeof app

// Removed duplicate function implementation
async function analyzeLoveLanguage(text: string): Promise<string> {
  // Placeholder implementation for analyzing love language
  const loveLanguages = [
    "Words of Affirmation",
    "Acts of Service",
    "Receiving Gifts",
    "Quality Time",
    "Physical Touch"
  ];

  // Simple logic to determine love language based on keywords
  const keywords = {
    "affirmation": "Words of Affirmation",
    "service": "Acts of Service",
    "gift": "Receiving Gifts",
    "time": "Quality Time",
    "touch": "Physical Touch"
  };

  for (const [keyword, loveLanguage] of Object.entries(keywords)) {
    if (text.toLowerCase().includes(keyword)) {
      return loveLanguage;
    }
  }

  // Default response if no keywords match
  return "Unknown Love Language";
}
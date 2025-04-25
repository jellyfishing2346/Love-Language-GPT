import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors())
  .group('/api', (app) =>
    app
      .post('/analyze', async ({ body }) => {
        // Add your love language analysis logic
        return { success: true, result: "Your analysis" }
      }, {
        body: t.Object({
          text: t.String(),
          userId: t.Optional(t.String())
        })
      })
      .get('/history/:userId', async ({ params }) => {
        // Fetch user history from DB
      })
  )
  .listen(3001)

export type App = typeof app
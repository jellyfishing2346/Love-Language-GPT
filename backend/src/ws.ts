// server/src/ws.ts
import { websocket, ElysiaWS } from '@elysiajs/websocket'
import { Elysia } from 'elysia'

// Initialize the app
const app = new Elysia();

// Example analyzeMessage function
function analyzeMessage(message: string): string {
  return `Analyzed: ${message}`;
}

app.use(websocket())
  .ws('/ws', {
    message(ws: ElysiaWS, message: string) {
      ws.send(analyzeMessage(message))
    }
  })
// src/integrations/api.ts
import type { App } from '../../../backend/src/index';

type AppWithDefs = App extends { defs: infer D } ? { defs: D } : never

export const api = async <
  Path extends keyof AppWithDefs['defs'],
  Method extends keyof AppWithDefs['defs'][Path]
>(
  path: Path,
  method: Method,
  data?: AppWithDefs['defs'][Path][Method]['body']
) => {
  const response = await fetch(`http://localhost:3001${String(path)}`, {
    method: String(method),
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`)
  }

  return response.json() as Promise<
    AppWithDefs['defs'][Path][Method]['response']
  >
}
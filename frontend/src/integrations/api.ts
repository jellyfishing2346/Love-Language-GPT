// src/integrations/api.ts
import type { App } from '../../../backend/src/index'

const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3001'

type ElysiaApp = App extends { api: infer A } ? { defs: A } : never

export const api = async <
  Path extends keyof ElysiaApp['defs'],
  Method extends keyof ElysiaApp['defs'][Path]
>(
  path: Path,
  method: Method,
  data?: ElysiaApp['defs'][Path][Method]['body'] | Record<string, unknown> | undefined,
  options?: RequestInit
): Promise<ElysiaApp['defs'][Path][Method]['response']> => {
  
  const headers = new Headers(options?.headers)
  headers.set('Content-Type', 'application/json')
  
  // Add auth token if exists
  const token = localStorage.getItem('token')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(`${API_BASE_URL}${String(path)}`, {
    method: String(method).toUpperCase(),
    headers,
    body: data ? JSON.stringify(data) : undefined,
    ...options
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    throw new Error(error?.message || `Request failed with status ${response.status}`)
  }

  return response.json()
}

// Convenience methods
export const apiClient = {
  analyze: (text: string, userId?: string) => 
    api('/api/analyze', 'post', userId ? { text, userId } : { text }),
    
  getHistory: (userId: string) => 
    api(`/api/history/${userId}`, 'get')
}
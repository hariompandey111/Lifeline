import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null

export function useSupabase() {
  if (supabaseClient) {
    return supabaseClient
  }

  const config = useRuntimeConfig()

  if (!config.supabaseUrl || !config.supabaseServiceRoleKey) {
    console.warn('Supabase credentials not configured. Database features will be disabled.')
    return null
  }

  supabaseClient = createClient(config.supabaseUrl, config.supabaseServiceRoleKey)
  return supabaseClient
}

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  company?: string | null
  service: string
  message: string
  created_at?: string
  status?: 'new' | 'contacted' | 'closed'
}

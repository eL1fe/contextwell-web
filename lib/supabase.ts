import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cfsttclattfsdqrgebhu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmc3R0Y2xhdHRmc2RxcmdlYmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNTQ5NTUsImV4cCI6MjA4MTgzMDk1NX0.GWkiI8Wi2sce0mGLbFiTS8yDnUzmMqq6ktVfds9Z2n0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

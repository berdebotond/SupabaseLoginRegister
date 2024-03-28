import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://isecdmkotnnazrgvgike.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZWNkbWtvdG5uYXpyZ3ZnaWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTkxNjIsImV4cCI6MjAyNzE5NTE2Mn0.UBxBF9UHeNk6lsCDjjgK6sPOl_2ocNBR1n87VJX2E1U'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

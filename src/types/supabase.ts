export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          display_name: string | null
          avatar_url: string | null
          reputation: number
          is_guide: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          display_name?: string | null
          avatar_url?: string | null
          reputation?: number
          is_guide?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          display_name?: string | null
          avatar_url?: string | null
          reputation?: number
          is_guide?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      destinations: {
        Row: {
          id: string
          name: string
          description: string | null
          location: string
          image_url: string | null
          rating: number
          votes_count: number
          added_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          location: string
          image_url?: string | null
          rating?: number
          votes_count?: number
          added_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          location?: string
          image_url?: string | null
          rating?: number
          votes_count?: number
          added_by?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
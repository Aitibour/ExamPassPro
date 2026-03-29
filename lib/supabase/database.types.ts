export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export type Database = {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          slug: string
          title: string
          description: string | null
          icon_url: string | null
          brand_color: string
          price_cents: number
          enrolled_count: number
          is_published: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['courses']['Row'], 'id' | 'created_at' | 'enrolled_count'>
        Update: Partial<Database['public']['Tables']['courses']['Insert']>
        Relationships: []
      }
      questions: {
        Row: {
          id: string
          course_id: string
          body: string
          options: { A: string; B: string; C: string; D: string }
          correct: string
          explanation: string
          domain: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['questions']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['questions']['Insert']>
        Relationships: []
      }
      exam_sets: {
        Row: {
          id: string
          course_id: string
          title: string
          question_ids: string[]
          duration_mins: number
        }
        Insert: Omit<Database['public']['Tables']['exam_sets']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['exam_sets']['Insert']>
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          role: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
        Relationships: []
      }
      purchases: {
        Row: {
          id: string
          user_id: string
          course_id: string
          plan: string
          stripe_session_id: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['purchases']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['purchases']['Insert']>
        Relationships: []
      }
      exam_attempts: {
        Row: {
          id: string
          user_id: string
          exam_set_id: string
          answers: Record<string, string>
          score_pct: number | null
          passed: boolean | null
          mode: string
          started_at: string
          completed_at: string | null
        }
        Insert: Omit<Database['public']['Tables']['exam_attempts']['Row'], 'id' | 'started_at'>
        Update: Partial<Database['public']['Tables']['exam_attempts']['Insert']>
        Relationships: []
      }
      coaching_bookings: {
        Row: {
          id: string
          user_email: string
          user_name: string
          package_id: string
          package_name: string
          slot_date: string
          slot_time: string
          stripe_session_id: string | null
          status: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['coaching_bookings']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['coaching_bookings']['Insert']>
        Relationships: []
      }
      links: {
        Row: {
          id: string
          code: string
          destination: string
          label: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['links']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['links']['Insert']>
        Relationships: []
      }
      link_clicks: {
        Row: {
          id: string
          code: string
          ip_address: string | null
          user_agent: string | null
          clicked_at: string
        }
        Insert: Omit<Database['public']['Tables']['link_clicks']['Row'], 'id' | 'clicked_at'>
        Update: Partial<Database['public']['Tables']['link_clicks']['Insert']>
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}

export type Course = Database['public']['Tables']['courses']['Row']
export type Question = Database['public']['Tables']['questions']['Row']
export type ExamSet = Database['public']['Tables']['exam_sets']['Row']
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Purchase = Database['public']['Tables']['purchases']['Row']
export type ExamAttempt = Database['public']['Tables']['exam_attempts']['Row']

// Extended types for join queries
export type PurchaseWithCourse = Purchase & { courses: Course }
export type ExamAttemptWithSet = ExamAttempt & { exam_sets: Pick<ExamSet, 'title'> | null }
export type QuestionWithCourse = Question & { courses: Pick<Course, 'title'> | null }
export type ExamSetWithCourse = ExamSet & { courses: Pick<Course, 'title'> | null }
export type CoachingBooking = Database['public']['Tables']['coaching_bookings']['Row']
export type Link            = Database['public']['Tables']['links']['Row']
export type LinkClick       = Database['public']['Tables']['link_clicks']['Row']
export type LinkWithClicks  = Link & { click_count: number }

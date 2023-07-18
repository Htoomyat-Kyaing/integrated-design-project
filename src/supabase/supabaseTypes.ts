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
      employees: {
        Row: {
          age: number | null
          first_name: string | null
          id: number
          last_name: string | null
          position: string | null
          today: boolean
        }
        Insert: {
          age?: number | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          position?: string | null
          today?: boolean
        }
        Update: {
          age?: number | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          position?: string | null
          today?: boolean
        }
        Relationships: []
      }
      records: {
        Row: {
          created_at: string
          employee_id: number
          id: number
          status: boolean
        }
        Insert: {
          created_at?: string
          employee_id: number
          id?: number
          status: boolean
        }
        Update: {
          created_at?: string
          employee_id?: number
          id?: number
          status?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "records_employee_id_fkey"
            columns: ["employee_id"]
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

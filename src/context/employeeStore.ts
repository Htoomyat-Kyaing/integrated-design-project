import { create } from "zustand";
import { supabase } from "../supabase/supabaseClient";
import { Database } from "../supabase/supabaseTypes";

type Employee = Database["public"]["Tables"]["employees"]["Row"];

interface EmployeeStore {
  employees: Employee[] | null;
  getEmployees: () => Promise<void>;
}

export const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: [],
  getEmployees: async () => {
    let { data: employees } = await supabase.from("employees").select("*");
    set({ employees: employees });
  },
}));

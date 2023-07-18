import { create } from "zustand";
import { supabase } from "../supabase/supabaseClient";
import { Database } from "../supabase/supabaseTypes";

type Record = Database["public"]["Tables"]["records"]["Row"];

interface RecordStore {
  records: Record[] | null;
  getRecords: () => Promise<void>;
}

export const useRecordStore = create<RecordStore>((set) => ({
  records: [],
  getRecords: async () => {
    let { data: records } = await supabase
      .from("records")
      .select(`*,employees(*)`);
    set({ records: records });
  },
}));

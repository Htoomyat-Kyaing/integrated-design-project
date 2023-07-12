import { useState } from "react";
import collect from "collect.js";
import { supabase } from "../supabase/supabaseClient";

const DeleteEmployee = ({ employees }: any) => {
  const collection = collect(employees);
  const sortedEmployees = collection.sortBy("id");

  const [id, setId] = useState();

  // Delete Form onSubmit function
  const deleteEmployee = async () => {
    const { data, error } = await supabase
      .from("employees")
      .delete()
      .eq("id", id)
      .select();
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          deleteEmployee();
        }}
      >
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {/* ID */}
          <div>
            <label className="text-black dark:text-gray-200">ID</label>
            <select
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                const num: any = Number(e.target.value);
                setId(num);
              }}
              required
            >
              <option>Select Employee ID</option>
              {sortedEmployees.map((employee: any) => (
                <option key={employee.id} value={employee.id}>
                  {employee.id}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end py-6">
          <button
            type="submit"
            className="px-6 py-2 font-semibold leading-5 text-white bg-red-500 rounded-md hover:bg-red-400 focus:outline-none dark:text-black"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
};

export default DeleteEmployee;

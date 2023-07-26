import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState();
  const [age, setAge] = useState();
  const [position, setPosition] = useState("");
  const [today, setToday] = useState(false);

  // Add Form onSubmit function
  const insertEmployee = async ({
    id,
    firstName,
    lastName,
    age,
    position,
    today,
  }: any) => {
    const { data, error } = await supabase
      .from("employees")
      .insert([
        {
          id: id,
          first_name: firstName,
          last_name: lastName,
          age: age,
          position: position,
          today: today,
        },
      ])
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
          insertEmployee({ id, firstName, lastName, age, position, today });
        }}
      >
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {/* ID */}
          <div>
            <label className="text-black dark:text-gray-200">ID</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                setId(e.target.value);
              }}
              required
            />
          </div>

          {/* First Name */}
          <div>
            <label className="text-black dark:text-gray-200">First Name</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-black dark:text-gray-200">Last Name</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="text-black dark:text-gray-200">Age</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                setAge(e.target.value);
              }}
              required
            />
          </div>

          {/* Position */}
          <div>
            <label className="text-black dark:text-gray-200">Position</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                setPosition(e.target.value);
              }}
            />
          </div>

          {/* Today */}
          <div>
            <label className="text-black dark:text-gray-200">Today</label>
            <select
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                if (e.target.value === "present") setToday(true);
                else setToday(false);
              }}
              required
            >
              <option value={"absent"}>ABSENT</option>
              <option value={"present"}>PRESENT</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end py-6">
          <button
            type="submit"
            className="px-6 py-2 font-semibold leading-5 text-white rounded-md bg-emerald-500 hover:bg-emerald-400 focus:outline-none dark:text-black"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;

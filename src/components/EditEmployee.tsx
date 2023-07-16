import { useEffect, useState } from "react";
import collect from "collect.js";
import { supabase } from "../supabase/supabaseClient";

const EditEmployee = ({ employees }: any) => {
  const collection = collect(employees);
  const sortedEmployees = collection.sortBy("id");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState();
  const [age, setAge] = useState();
  const [position, setPosition] = useState("");
  const [today, setToday] = useState(false);

  // Edit Form onSubmit function
  const editEmployee = async ({
    id,
    firstName,
    lastName,
    age,
    position,
    today,
  }: any) => {
    const { data, error } = await supabase
      .from("employees")
      .update([
        {
          first_name: firstName,
          last_name: lastName,
          age: age,
          position: position,
          today: today,
        },
      ])
      .eq("id", id)
      .select();
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    const filteredPerson = employees.filter((person: any) => {
      return person.id === id;
    });
    // console.log(filteredPerson);
    setFirstName(filteredPerson.first_name);
    setLastName(filteredPerson.last_name);
    setAge(filteredPerson.age);
    setPosition(filteredPerson.position);
  }, [id]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editEmployee({ id, firstName, lastName, age, position, today });
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
          {/* First Name */}
          <div>
            <label className="text-black dark:text-gray-200">First Name</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e: any) => {
                setFirstName(e.target.value);
              }}
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
            >
              <option value={"absent"}>ABSENT</option>
              <option value={"present"}>PRESENT</option>
            </select>
          </div>

          {/* // TODO: implement later */}
          {/* Image */}
          {/* <div>
              <label className="text-black dark:text-gray-200">Image</label>
              <div className="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="w-12 h-12 mx-auto text-indigo-500 dark:text-sky-400"
                    stroke="currentColor"
                    fill="currentcolor"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex items-center text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative p-1 font-medium text-indigo-600 bg-white rounded-md cursor-pointer dark:bg-black dark:text-sky-500"
                    >
                      <span className="dark:hover:text-sky-400 hover:text-violet-400">
                        Upload
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="ml-2 ">profile image here</p>
                  </div>
                </div>
              </div>
            </div> */}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end py-6">
          <button
            type="submit"
            className="px-6 py-2 font-semibold leading-5 text-white bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none dark:text-black"
          >
            Edit
          </button>
        </div>
      </form>
    </>
  );
};

export default EditEmployee;

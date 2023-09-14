import { useState } from "react";
import RecordRow from "./components/RecordRow";
import { format } from "date-fns";

const Record = ({ records }: any) => {
  const [filteredRecords, setFilteredRecords] = useState(records);
  enum MonthList {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
  }
  const [name, setName] = useState("");
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState("");

  const handleSearch = (e: any) => {
    const filteredRows = records.filter((record: any) => {
      return (
        record.employees.first_name.toLowerCase().includes(e.toLowerCase()) ||
        record.employees.last_name.toLowerCase().includes(e.toLowerCase())
      );
    });
    setFilteredRecords(filteredRows);
  };

  const handleSelectDay = (e: any) => {
    const filteredRows = records.filter((record: any) => {
      const date = format(new Date(record.created_at), "d");
      return Number(date) === e;
    });
    setFilteredRecords(filteredRows);
  };

  const handleSelectMonth = (e: any) => {
    const filteredRows = records.filter((record: any) => {
      const date = format(new Date(record.created_at), "M");
      return String(date).match(e);
    });
    setFilteredRecords(filteredRows);
  };

  const handleSelectYear = (e: any) => {
    const filteredRows = records.filter((record: any) => {
      const date = format(new Date(record.created_at), "y");
      return String(date).match(e);
    });
    setFilteredRecords(filteredRows);
  };

  const searchSelective = () => {
    const filteredRows = records.filter((record: any) => {
      const date = format(new Date(record.created_at), "P");
      // return String(date).match(`${day}/${month}/${year}`);
      // console.log(date);
      return (
        (record.employees.first_name
          .toLowerCase()
          .includes(name.toLowerCase()) ||
          record.employees.last_name
            .toLowerCase()
            .includes(name.toLowerCase())) &&
        String(date).match(`${month}/${day}/${year}`)
      );
    });
    setFilteredRecords(filteredRows);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can view the
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Records
            </h1>
          </div>

          <div className="flex flex-col items-center justify-between my-6 space-y-4 lg:flex-row lg:space-y-0">
            {/* Search Bar */}
            <div className="relative flex items-center gap-2">
              {/* Name */}
              <input
                type="text"
                name="search"
                id="search"
                className="px-2 py-1 bg-white border-2 rounded-md border-violet-400 dark:border-sky-400 focus:border-slate-700 focus:outline-none focus:ring-0 dark:text-white dark:bg-black dark:focus:border-slate-300 placeholder:text-sm contrast-more:placeholder-slate-500"
                placeholder="Enter Name"
                onChange={(e) => {
                  handleSearch(e.target.value);
                  setName(e.target.value);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute w-4 h-4 left-[183px] text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            <div className="flex space-x-3">
              {/* Day Select Box */}
              <div>
                <select
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={(e: any) => {
                    const num: any = Number(e.target.value);
                    handleSelectDay(num);
                    setDay(num);
                  }}
                  required
                >
                  {(() => {
                    const arr = [];

                    for (let i = 1; i <= 31; i++) {
                      arr.push(
                        <option key={i} value={i}>
                          {i}
                        </option>
                      );
                    }
                    return arr;
                  })()}
                </select>
              </div>

              {/* Month Select Box */}
              <div>
                <select
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={(e: any) => {
                    const num: any = Number(e.target.value);
                    handleSelectMonth(num);
                    setMonth(num);
                  }}
                  required
                >
                  {(() => {
                    const arr = [];

                    for (let i = 1; i < 13; i++) {
                      arr.push(
                        <option key={i} value={i}>
                          {MonthList[i]}
                        </option>
                      );
                    }
                    return arr;
                  })()}
                </select>
              </div>
            </div>

            {/* Year Search Bar */}
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                name="search"
                id="search"
                className="px-2 py-1 bg-white border-2 rounded-md border-violet-400 dark:border-sky-400 focus:border-slate-700 focus:outline-none focus:ring-0 dark:text-white dark:bg-black dark:focus:border-slate-300 placeholder:text-sm contrast-more:placeholder-slate-500"
                placeholder="Enter Year"
                onChange={(e) => {
                  handleSelectYear(e.target.value);
                  setYear(e.target.value);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute w-4 h-4 left-[183px] text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            <button
              className="px-6 py-2 font-semibold leading-5 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-black"
              onClick={searchSelective}
            >
              Search
            </button>
          </div>

          <div className="w-full pb-6 overflow-x-auto rounded-lg">
            <table className="w-full">
              {/* Table Columns */}
              <thead>
                <tr className="tracking-wide text-left text-white uppercase bg-indigo-500 text-md dark:bg-slate-950 dark:text-sky-400">
                  <th className="px-4 py-3">
                    <button className="text-xl font-semibold">Name</button>
                  </th>
                  <th className="px-4 py-3">
                    <button className="text-xl font-semibold">Age</button>
                  </th>
                  <th className="px-4 py-3">
                    <button className="text-xl font-semibold">Status</button>
                  </th>
                  <th className="px-4 py-3">
                    <button className="text-xl font-semibold">
                      Date(MM/DD/YY)
                    </button>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-slate-900">
                {filteredRecords.map((record: any) => (
                  <RecordRow key={record.id} record={record} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Record;

import RecordRow from "./RecordRow";

const Record = ({ records }: any) => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          <div className="text-center">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can view the
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Records
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center gap-2 my-6">
            <input
              type="text"
              name="search"
              id="search"
              className="px-2 py-1 bg-white border-2 rounded-md border-violet-400 dark:border-sky-400 focus:border-slate-700 focus:outline-none focus:ring-0 dark:text-white dark:bg-black dark:focus:border-slate-300 placeholder:text-sm contrast-more:placeholder-slate-500"
              placeholder="Search Records"
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

          <div className="w-full pb-6 overflow-x-auto rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="tracking-wide text-left text-white uppercase bg-indigo-500 text-md dark:bg-slate-900 dark:text-sky-400">
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
                    <button className="text-xl font-semibold">Date</button>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-black">
                {records.map((record: any) => (
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

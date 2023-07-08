import RecordRow from "./RecordRow";

const Record = ({ records }: any) => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          <div className="pb-12 text-center">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can view the
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Records
            </h1>
          </div>

          <div className="w-full pb-6 overflow-x-auto rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="tracking-wide text-left text-gray-900 uppercase bg-violet-400 text-md dark:bg-slate-900 dark:text-sky-400">
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

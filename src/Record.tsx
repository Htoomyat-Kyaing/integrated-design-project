import employee_placeholder from "./assets/unknown_employee.png";

const Record = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          <div className="pb-12 text-center">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can view the
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Record
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
                <tr className="text-gray-700 dark:text-slate-100">
                  <td className="px-4 py-3 ">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={employee_placeholder}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Sufyan</p>
                        <p className="text-xs text-gray-600 dark:text-slate-400">
                          Developer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-ms">22</td>
                  <td className="px-4 py-3 text-xs ">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Attended{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm ">6/4/2000</td>
                </tr>

                <tr className="text-gray-700 dark:text-slate-100">
                  <td className="px-4 py-3 ">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={employee_placeholder}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Nora</p>
                        <p className="text-xs text-gray-600 dark:text-slate-400">
                          Designer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-md">17</td>
                  <td className="px-4 py-3 text-xs ">
                    <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                      {" "}
                      Absented{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm ">6/10/2020</td>
                </tr>

                <tr className="text-gray-700 dark:text-slate-100">
                  <td className="px-4 py-3 ">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={employee_placeholder}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Khalid</p>
                        <p className="text-xs text-gray-600 dark:text-slate-400">
                          Designer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-md">20</td>
                  <td className="px-4 py-3 text-xs ">
                    <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm">
                      {" "}
                      Unknown{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm ">6/10/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Record;

import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <section className="w-full h-full p-6 mx-auto bg-slate-200 dark:bg-gray-800">
        <nav className="flex gap-2">
          <Link to="add">
            <div className="p-2 text-xl font-bold text-white capitalize bg-sky-500 rounded-xl dark:text-black min-w-max">
              Add
            </div>
          </Link>
          <Link to="edit">
            <div className="p-2 text-xl font-bold text-white capitalize bg-indigo-500 rounded-xl dark:text-black min-w-max">
              Edit
            </div>
          </Link>
        </nav>

        {/* Add, Edit and Delete */}
        <Outlet />
      </section>
    </main>
  );
};

export default Settings;

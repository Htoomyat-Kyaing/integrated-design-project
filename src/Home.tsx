import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex items-center justify-center h-full overflow-hidden">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Efficiently
            <span className="text-indigo-600 dark:text-sky-400"> manage </span>
            your workforce
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            with our powerful employee management system ,empowering your
            organization to thrive!
          </p>

          <div className="flex flex-wrap justify-center">
            <Link to={"/attendance"}>
              <button className="px-8 py-3 m-2 text-lg font-semibold text-white bg-indigo-600 rounded dark:bg-sky-400 dark:text-slate-800">
                Get started
              </button>
            </Link>
            <Link to={"/help"}>
              <button className="px-8 py-3 m-2 text-lg border border-indigo-600 rounded text-slate-800 dark:text-gray-50 dark:border-sky-400">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

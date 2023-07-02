const Help = () => {
  return (
    <main className="flex items-center justify-center h-full overflow-auto">
      <section className="overflow-auto dark:bg-gray-800 dark:text-gray-100 text-slate-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Here are some frequently asked questions (FAQs) that you can include
            on your employee management system web application:
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg border-slate-800 dark:border-slate-200">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What is an employee management system?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-slate-950 dark:text-gray-400">
                An employee management system is a web-based software solution
                designed to streamline and automate various human resources (HR)
                tasks, including employee onboarding, attendance tracking, leave
                management, performance evaluations, and more.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg border-slate-800 dark:border-slate-200">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What are the benefits of using an employee management system?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-slate-950 dark:text-gray-400">
                Using an employee management system offers several benefits,
                such as improved efficiency in HR processes, accurate employee
                data management, simplified payroll administration, enhanced
                employee engagement and satisfaction, and better compliance with
                labor laws and regulations.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg border-slate-800 dark:border-slate-200">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Can I customize the employee management system to fit my
                organization's needs?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-slate-950 dark:text-gray-400">
                Absolutely! Our employee management system is designed to be
                flexible and customizable. You can tailor it to match your
                organization's specific processes, workflows, and branding
                requirements.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Help;
